const config = require('../config')

exports.adminLogin = function adminLogin(req, res, next) {

    const { admin } = config

    try {
        if (!req.signedCookies.user) {

            const authHeader = req.headers['authorization']
            if (!authHeader) {
                let err = new Error("Login failed, authorization header is not set")
                err.status = 401
                next(err)
            }

            let auth = new Buffer.from(authHeader.split(" ")[1], "base64")
                .toString()
                .split(":")
            let login = auth[0]
            let password = auth[1]

            if (login === admin.login && password === admin.password) {
                res.cookie('user', admin.secretCookie, {
                    signed: true,
                })
                res.status(200).send({status: 'success', error: ''})
            } else {
                let err = new Error("Login failed, wrong credentials")
                err.status = 401
                next(err)
            }
        } else {
            if (req.signedCookies.user === admin.secretCookie) {
                res.status(200).send({status: 'success', error: ''})
            } else {
                let err = new Error("Login failed, cookie is wrong")
                err.status = 401
                next(err)
            }   
        }
    } catch(err) {
        console.error(err)
        err.status = 500
        next(err)
    }

}

exports.adminLogout = function adminLogout(req, res, next) {
    res.clearCookie('user')
    next()
}