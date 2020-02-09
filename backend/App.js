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




const express = require('express')
var cors = require('cors')
const app = express();
const morgan = require('morgan')

const port = process.env.PORT || 8000

app.use(cors(config.corsOptions))
app.use(morgan('dev'))

const cookierParser = require('cookie-parser')

app.use(cookierParser(config.cookieSecret))

let bodyParser = require('body-parser')

app.use(bodyParser.json())

/**
 * Routes
 */

let products = require('./routes/products')
let login = require('./routes/login')

app.use('/api', products)
app.use('/api', login)

app.listen(port, () => {
    console.log(`Server started and working on port ${port}`)
});