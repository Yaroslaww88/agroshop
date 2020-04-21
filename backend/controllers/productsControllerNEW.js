let dbQueries = require('../db/dbQueries')

/**
 * Init products service to communicate with it insead of database itself
 */
const ProductService = require('../services/ProductService')
const productService = new ProductService(dbQueries)

const Product = require('../db/Product')

/**
 * @TODO fix req.desctiption to req.products[0] or req.product
 */

exports.addOneProduct = async function addOneProduct(req, res, next) {
    try {
        /**
         * @TODO fix checking in every route
         */
        let product = new Product(req.body)

        await productService.addOneProduct(product)

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

        res.status(200).json({status: 'success', error: '', product: product.serializeToJson})
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