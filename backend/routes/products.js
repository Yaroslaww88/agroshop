let express = require('express')

let router = express.Router()

let controller = require('../controllers/productsController')

let auth = require('../middlewares/auth')

const path = require('path')

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

/**
 * File uploads+
 */
let multer = require('multer')

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        console.log("FILES INSIDE FRONTEND:", _getAllFilesFromFolder('/../../frontend/build/img/'))
        cb(null, path.join(__dirname, '/../../frontend/build/img/'))
     },
    filename: function (req, file, cb) {
        let name = 'default_name'
        if (req.params.id)
            name = req.params.id + '.png'
        else
            name = file.originalname
        console.log('get in storage', name)
        cb(null , name)
    }
})

let upload = multer({ storage: storage })

/**
 * Solve auth issues controller.postProducts
 */

router.get('/products/:id', controller.getOneProduct)
router.get('/products', controller.getAllProducts)
router.post('/products', auth.auth, upload.single('image'), controller.postProducts)
router.delete('/products/:id', auth.auth, controller.deleteOneProduct)
//router.delete('/products', auth.auth, controller.deleteAllProducts)
router.put('/products/:id', auth.auth, upload.single('image'), controller.updateOneProduct)

module.exports = router