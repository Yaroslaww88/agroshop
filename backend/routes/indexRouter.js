const imagesRouter = require('./imagesRouter')
const productsRouter = require('./productsRouter')

module.exports = app => {
    app.use('/api', imagesRouter)
    app.use('/api', productsRouter)
    app.use('*', (req, res, next) => (console.log("* get", req.body)))
}