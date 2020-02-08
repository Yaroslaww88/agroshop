let express = require('express')

let router = express.Router()

let controller = require('../controllers/loginController')

let auth = require('../middlewares/auth')

router.post('/login', auth.auth, controller.login)

module.exports = router