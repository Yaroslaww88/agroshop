let router = require('express').Router()

let controller = require('../controllers/productsControllerNEW')

router.get('/products/all', controller.getAllProducts)
router.get('/products/:id', controller.getOneProduct)
router.post('/products', controller.addOneProduct)
//router.delete('/products/:id', auth.auth, controller.deleteOneProduct)
//router.delete('/products', auth.auth, controller.deleteAllProducts)
//router.put('/products/:id', auth.auth, upload.single('image'), controller.updateOneProduct)

module.exports = router