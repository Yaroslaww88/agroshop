let express = require('express')

let router = express.Router()

let controller = require('../controllers/productsController')

let auth = require('../middlewares/auth')

/**
 * Solve auth issues controller.postProducts
 */

router.get('/products/:id', controller.getOneProduct)
router.get('/products', controller.getAllProducts)
router.post('/products', auth.auth, controller.postProducts)
router.delete('/products/:id', auth.auth, controller.deleteOneProduct)
router.delete('/products', auth.auth, controller.deleteAllProducts)

module.exports = router