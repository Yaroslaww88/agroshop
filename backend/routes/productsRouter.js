const router = require('express').Router()

const controller = require('../controllers/productsController')
const authAdminMiddleware = require('../middlewares/authAdminMiddleware')

router.get('/products/all', controller.getAllProducts)
router.get('/products/:id', controller.getOneProduct)
router.post('/products', controller.addOneProduct)
router.delete('/products/:id', authAdminMiddleware.adminIsAuth, controller.deleteOneProduct)
//router.delete('/products', auth.auth, controller.deleteAllProducts)
//router.put('/products/:id', auth.auth, upload.single('image'), controller.updateOneProduct)

module.exports = router