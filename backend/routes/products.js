let express = require('express')

let router = express.Router()

let controller = require('../controllers/productsController')

let auth = require('../middlewares/auth')

/**
 * File uploads
 */
let multer = require('multer')

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
     },
    filename: function (req, file, cb) {
        cb(null , `${req.params.id}.jpg`)
    }
})

let upload = multer({ storage: storage })

const uploadFile = (req, res, next) => {
    upload.single('image')
    next()
}

/**
 * Solve auth issues controller.postProducts
 */

router.get('/products/:id', controller.getOneProduct)
router.get('/products', controller.getAllProducts)
router.post('/products', auth.auth, upload.single('image'), controller.postProducts)
router.delete('/products/:id', auth.auth, controller.deleteOneProduct)
router.delete('/products', auth.auth, controller.deleteAllProducts)
router.put('/products/:id', auth.auth, upload.single('image'), controller.updateOneProduct)

module.exports = router