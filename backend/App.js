const config = require('./config')


/**
 * Set up
 */
const express = require('express')

const app = express();

/**
 * Logging
 */
const morgan = require('morgan')

app.use(morgan('dev'))


/**
 * Cors
 */
const cors = require('cors')

app.use(cors(config.corsOptions))


/**
 * Cookies
 */
const cookierParser = require('cookie-parser')

app.use(cookierParser(config.cookieSecret))

/**
 * Body parser
 */
const bodyParser = require('body-parser')

app.use(bodyParser.json())


/**
 * Routes
 */
const mountRoutes = require('./routes/indexRouter')
mountRoutes(app)

/**
 * Static
 */
const path = require('path')

app.use(express.static(path.join(__dirname, '../images')))
/*app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})*/

/**
 * Go live
 */
//let http = require('http');
//http.createServer(app).listen(80);
const {applicationStartPort} = config

app.listen(applicationStartPort, () => {
    console.log(`Server started and working on port ${applicationStartPort}`)
});