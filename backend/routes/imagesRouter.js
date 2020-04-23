let router = require('express').Router()

let controller = require('../controllers/imagesController')

router.post('/images/:id', controller.addImages)

module.exports = router