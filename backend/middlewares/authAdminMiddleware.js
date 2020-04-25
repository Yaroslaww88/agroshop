const config = require('../config')

exports.adminIsAuth = function adminIsLogin() {

    try {
        if (req.signedCookies.user) {
            if (req.signedCookies.user === 'admin') 
                next()
            else 
                throw new Error("Authorization failed")
        } else
            throw new Error("Authorization failed")
    } catch(err) {
        err.status = 401
        next(err)
    }
}

exports.adminLogin = function adminLogin(req, res, next) {

    try {
        if (!req.signedCookies.user) {

            const authHeader = req.headers['authorization']
            if (!authHeader) {
                throw new Error("Login failed")
            }

            let auth = new Buffer.from(authHeader.split(" ")[1], "base64")
                .toString()
                .split(":")
            let login = auth[0]
            let password = auth[1]

            const { admin } = config

            if (login === admin.login && password === admin.password) {
                res.cookie('user', 'admin', {
                    signed: true,
                })
                next()
            } else {
                throw new Error("Login failed")
            }
        } else {
            if (req.signedCookies.user === 'admin') {
                next();
            } else {
                throw new Error("Login failed")
            }   
        }
    } catch(err) {
        err.status = 401
        next(err)
    }

}

exports.adminLogout = function adminLogout(req, res, next) {
    res.clearCookie('user')
    next()
}