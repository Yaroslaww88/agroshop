const productsRouter = require('./productsRouter')
const loginRouter = require('./loginRouter')

module.exports = app => {
    app.use('/api', productsRouter)
    app.use('/api', loginRouter)
    app.use(function (err, req, res, next) {
        if (err) {
             res.status(err.status || 500).send({
                 status: 'unsuccess',
                 error: err.message || 'Internal Server Error',
             })
        } else {
             res.status(200).send({
                 status: 'success',
                 error: '',
             })
        }
    })
}