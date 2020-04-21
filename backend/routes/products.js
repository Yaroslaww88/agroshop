// let express = require('express')

// let router = express.Router()

// let controller = require('../controllers/productsController')

// let auth = require('../middlewares/auth')

// /**
//  * File uploads+
//  */
// let path = require('path')
// let multer = require('multer')

// let storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         //console.log("__dirname", _getAllFilesFromFolder(path.join(__dirname, '/../../frontend/public/img')))
//         cb(null, path.join(__dirname, '/../../frontend/public/img'))
//         cb(null, path.join(__dirname, '/../../frontend/build/img'))
//      },
//     filename: function (req, file, cb) {
//         let name = 'default_name'
//         if (req.params.id)
//             name = req.params.id + '.png'
//         else
//             name = file.originalname
//         console.log('get in storage', name)
//         cb(null , name)
//     }
// })

// let upload = multer({ storage: storage })

// /**
//  * Solve auth issues controller.postProducts
//  */

// router.get('/products/:id', controller.getOneProduct)
// router.get('/products', controller.getAllProducts)
// router.post('/products', auth.auth, upload.single('image'), controller.postProducts)
// router.delete('/products/:id', auth.auth, controller.deleteOneProduct)
// //router.delete('/products', auth.auth, controller.deleteAllProducts)
// router.put('/products/:id', auth.auth, upload.single('image'), controller.updateOneProduct)

// module.exports = router