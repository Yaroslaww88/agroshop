const config = require('../config')

exports.adminIsAuth = function adminIsLogin(req, res, next) {

    let { admin } = config

    try {
        if (req.signedCookies.user) {
            if (req.signedCookies.user === admin.secretCookie) 
                next()
            else 
                throw new Error("Authorization failed")
        } else
            throw new Error("Authorization failed")
    } catch(err) {
        console.error(err)
        err.status = 500
        next(err)
    }
}


