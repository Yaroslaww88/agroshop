const saveFileRouter = require('./saveFile')

module.exports = app => {
    app.use('/api', saveFileRouter)
    app.use('*', (req, res, next) => (console.log("* get", req.body)))
}