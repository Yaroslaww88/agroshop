const mongoose = require('mongoose')
const Products = require('../models/Product')
const fs = require('fs')


exports.getAllProducts = async (req, res, next) => {
    let products = await Products.find({})

    res.statusCode = 200
    res.json({products: products})
}

exports.getOneProduct = async (req, res, next) => {
    let id = req.params.id
    if (!id) {
        res.statusCode = 400
        res.json({products: [], error: 'no ID provided'})
    }

    let product = await Products.findById(id)

    res.statusCode = 200
    res.json({products: product})
}

exports.postProducts = async (req, res, next) => {
    let product = req.body

    console.log('Product in postProduct: ', product)

    try {
        let createdProduct = await Products.create(product)
        let file = req.file
        let path = file.path
        let newPath = path.substring(0, path.indexOf(file.filename)) + createdProduct.id.toString() + '.png'
        fs.renameSync(path, newPath, function(err) {
            if (err) throw new Error('error while renaming file')
        })
        console.log('new file name: ', newPath)
        res.json({})
        res.statusCode = 200
    } catch (ex) {
        console.log(ex);
        res.json({error: ex})
        res.statusCode = 400
    }
}

exports.deleteAllProducts = async (req, res, next) => {
    try {
        await Products.deleteMany({})
    } catch (ex) {
        res.statusCode = 400
        res.json({error: ex})
        console.log(ex);
    }

    res.statusCode = 200
    res.json({success: true})
}

exports.deleteOneProduct = async (req, res, next) => {
    try {
        let id = req.params.id
        if (id)
            await Products.findByIdAndDelete(id, req.body.product)
        else {
            res.statusCode = 404
            res.json({success: false, error: 'Empty id of deleted product'})
        }
    } catch (ex) {
        res.statusCode = 400
        res.json({error: ex})
        console.log(ex);
    }

    res.statusCode = 200
    res.json({success: true})
} 

exports.updateOneProduct = async (req, res, next) => {
    try {
        let id = req.params.id
        if (id)
            await Products.findOneAndUpdate(id, req.body)
        else {
            res.statusCode = 404
            res.json({success: false, error: 'Empty id of deleted product'})
        }
    } catch (ex) {
        res.statusCode = 400
        res.json({error: ex})
        console.log(ex);
    }

    res.statusCode = 200
    res.json({success: true})
} 