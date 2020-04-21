let router = require('express').Router()

let controller = require('../controllers/saveFileController')

router.post('/saveFile', controller.saveFile)

module.exports = router