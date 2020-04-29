const imagesFolder = require('../config').imagesFolder

const dbQueries = require('../db/dbQueries')

/**
 * Init products service to communicate with it insead of database itself
 */
const ProductService = require('../services/ProductService')
const productService = new ProductService(dbQueries)

/**
 * Init image service which saves images
 */
const ImageService = require('../services/ImageService')
const imageService = new ImageService(imagesFolder)

const Product = require('../db/Product')

const formidable = require('formidable')

const { v4: uuidv4 } = require('uuid');

exports.addOneProduct = async function addOneProduct(req, res, next) {
    try {
        const form = formidable({ multiples: true })

        let counter = 0

        /**
         * Set folder where to upload images !NOTE this is temporary path. After adding product to db this file will be moved
         */
        form.on('fileBegin', (filename, file) => {
            file.path = `${imagesFolder}/${uuidv4()}.png`
            counter++
        })

        form.on('error', (err) => {throw err});

        form.on('aborted', () => {console.error('aborted in image parsing')});

        form.on('end', () => {
            res.status(200).json({status: 'success', error: ''})
        })

        form.parse(req, async (err, fields, files) => {
            if (err) {
                throw err
            } else {
                let product = new Product(JSON.parse(fields.product))

                let id = await productService.addOneProduct(product)

                /**
                 * Move images from temporary folder /images to subdir /{id} Name will be {id}_{counter}.png 
                 */
                imageService.addImages(id, files)
            }
        });   

        
    } catch(err) {
        console.error(err)
        res.status(500).json({status: 'unsuccess', error: err})
    }
}

exports.getOneProduct = async function getOneProduct(req, res, next) {
    try {
        let id = parseInt(req.params.id)

        let product = await productService.getOneProduct(id)

        res.status(200).json({status: 'success', error: '', product: product})
    } catch(err) {
        console.error(err) 
        res.status(500).json({status: 'unsuccess', error: err})
        //next(err)
    }
}

exports.getAllProducts = async function getAllProducts(req, res, next) {
    try {
        let products = await productService.getAllProducts()

        res.status(200).json({status: 'success', error: '', products: products})
    } catch(err) {
        console.error(err) 
        res.status(500).json({status: 'unsuccess', error: err})
    }
}

exports.deleteOneProduct = async function deleteOneProduct(req, res, next) {
    try {
        let id = parseInt(req.params.id)

        await productService.deleteOneProduct(id)

        imageService.deleteAllImagesByID(id)

        res.status(200).json({status: 'success', error: ''})
    } catch(err) {
        console.error(err)
        res.status(500).json({status: 'unsuccess', error: err})
    }
}

exports.updateOneProduct = async function updateOneProduct(req, res, next) {
    try {
        const form = formidable({ multiples: true })

        let counter = 0

        let id = parseInt(req.params.id)

        /**
         * Set folder where to upload images !NOTE this is temporary path. After adding product to db this file will be moved
         */
        form.on('fileBegin', (filename, file) => {
            file.path = `${imagesFolder}/${id}_${uuidv4()}.png`
            counter++
        })

        form.on('error', (err) => {throw err});

        form.on('aborted', () => {console.error('aborted in image parsing')});

        form.on('end', () => {
            res.status(200).json({status: 'success', error: ''})
        })

        form.parse(req, async (err, fields, files) => {
            if (err) {
                throw err
            } else {
                let product = new Product({ ...JSON.parse(fields.product), id })

                await productService.updateOneProduct(product)

                /**
                 * Move images from temporary folder /images to subdir /{id} Name will be {id}_{counter}.png 
                 */
                console.log(fields)
                console.log('Parsed JSOn', JSON.parse(fields.filenames))
                imageService.updateImagesByID(id, files, JSON.parse(fields.filenames))
            }
        });   

        
    } catch(err) {
        console.error(err)
        res.status(500).json({status: 'unsuccess', error: err})
    }
}