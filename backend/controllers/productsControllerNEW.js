const path = require('path')
const uploadsPath = path.join(__dirname, '../images') 

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
const imageService = new ImageService(uploadsPath)

const Product = require('../db/Product')

const formidable = require('formidable');

exports.addOneProduct = async function addOneProduct(req, res, next) {
    try {
        const form = formidable({ multiples: true })

        let counter = 0

        /**
         * Set folder where to upload images !NOTE this is temporary path. After adding product to db this file will be moved
         */
        form.on('fileBegin', (filename, file) => {
            file.path = path.join(__dirname, `../images/${filename}_${counter}.png`)
            counter++
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

        res.status(200).json({status: 'success', error: ''})
    } catch(err) {
        console.log(err)
        //next(err)
    }
}

exports.getOneProduct = async function getOneProduct(req, res, next) {
    try {
        let id = req.params.id

        let product = await productService.getOneProduct(id)

        res.status(200).json({status: 'success', error: '', product: product})
    } catch(err) {
        console.log(err) 
        //next(err)
    }
}

exports.getAllProducts = async function getAllProducts(req, res, next) {
    try {
        let products = await productService.getAllProducts()

        res.status(200).json({status: 'success', error: '', products: products})
    } catch(err) {
        console.log(err) 
        //next(err)
    }
}

exports.deleteOneProduct = async function deleteOneProduct(req, res, next) {
    try {
        let id = req.params.id

        await productService.deleteOneProduct(id)

        res.status(200).json({status: 'success', error: ''})
    } catch(err) {
        console.log(err)
    }
}