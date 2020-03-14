const config = require('./config')

/**
 * DB initialization
 */
const mongoose = require('mongoose')
const Products = require('./models/Product')

const url = config.mongoUrl
const connect = mongoose.connect(url)

connect.then((db) => {
    console.log("Connected correctly to server")
}, (err) => { console.log(err); })


/**
 * Set up
 */
const express = require('express')

const app = express();


/**
 * Cors
 */
const cors = require('cors')

app.use(cors(config.corsOptions))


/**
 * Logging
 */
const morgan = require('morgan')

app.use(morgan('dev'))


/**
 * Cookies
 */
const cookierParser = require('cookie-parser')

app.use(cookierParser(config.cookieSecret))

const bodyParser = require('body-parser')

app.use(bodyParser.json())


/**
 * Routes
 */
const products = require('./routes/products')
const login = require('./routes/login')

app.use('/api', products)
app.use('/api', login)


/**
 * Static
 */
const path = require('path')

app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})


/**
 * Go live
 */
let http = require('http');
http.createServer(app).listen(80);
/*const port = process.env.PORT || 80

app.listen(port, () => {
    console.log(`Server started and working on port ${port}`)
});*/