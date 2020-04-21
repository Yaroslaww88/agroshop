const saveFileRouter = require('./saveFileRouter')
const productsRouter = require('./productsRouter')

module.exports = app => {
    app.use('/api', saveFileRouter)
    app.use('/api', productsRouter)
    app.use('*', (req, res, next) => (console.log("* get", req.body)))
}