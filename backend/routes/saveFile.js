let express = require('express')

let router = express.Router()

let controller = require('../controllers/saveFileController')

router.post('/save', controller.saveFile)

module.exports = router