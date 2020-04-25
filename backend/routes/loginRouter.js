const router = require('express').Router()

const controller = require('../controllers/loginController')

router.post('/admin/login', controller.adminLogin)
router.post('/admin/logout', controller.adminLogout)

module.exports = router