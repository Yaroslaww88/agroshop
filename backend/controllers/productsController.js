const fs = require('fs')
const path = require('path')

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

var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};

exports.postProducts = async (req, res, next) => {
    let product = req.body

    console.log('Product in postProduct: ', product)

    try {
        let createdProduct = await Products.create(product)
        let file = req.file
        let oldPath = path.join(__dirname, '..', '..', 'frontend', 'public', 'img', file.originalname)
        let newPath = path.join(__dirname, '..', '..', 'frontend', 'public', 'img', createdProduct.id.toString() + '.png')
        console.log("PATH:", oldPath, " -> ", newPath)
        console.log("NAME:", file.originalname)
        console.log("ALL FILES:", _getAllFilesFromFolder(path.join(__dirname, '..', '..', 'frontend', 'public')))
        if (fs.existsSync(path.join(__dirname, '..', '..', 'frontend', 'public', '1ycO6.jpg'))) {
            console.log('The path exists.');
          }
        fs.renameSync(oldPath, newPath, function(err) {
            if (err) throw new Error('error while renaming file in /public')
        })
        oldPath = path.join(__dirname, '..', '..', 'frontend', 'build', 'img', file.originalname)
        newPath = path.join(__dirname, '..', '..', 'frontend', 'build', 'img', createdProduct.id.toString() + '.png')
        fs.renameSync(oldPath, newPath, function(err) {
            if (err) throw new Error('error while renaming file in /build')
        })
        res.json({success: true})
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
        if (id) {
            await Products.findByIdAndDelete(id, req.body.product)
            fs.unlinkSync(path.join(__dirname, `/../../frontend/public/img/${id}.png`))
            fs.unlinkSync(path.join(__dirname, `/../../frontend/build/img/${id}.png`))
        } else {
            console.log('no id in deleteOneProduct')
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
        if (!id) {
            res.statusCode = 404
            res.json({success: false, error: 'Empty id of deleted product'})
        }
        
        let updatedProduct = await Products.findOneAndUpdate(id, req.body)
        /*let file = req.file
        let path = file.path
        let newPath = path.substring(0, path.indexOf(file.filename)) + createdProduct.id.toString() + '.png'*/
        res.statusCode = 200
        res.json({success: true})
    } catch (ex) {
        res.statusCode = 400
        res.json({error: ex})
        console.log(ex);
    }
} 