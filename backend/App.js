const config = require('./config')

/**
 * DB initialization
 */


/**
 * Set up
 */
const express = require('express')

const app = express();


/**
 * Cors
 */
/*const cors = require('cors')

app.use(cors(config.corsOptions))*/


/**
 * Logging
 */
/*const morgan = require('morgan')

app.use(morgan('dev'))*/


/**
 * Cookies
 */
/*const cookierParser = require('cookie-parser')

app.use(cookierParser(config.cookieSecret))*/

const bodyParser = require('body-parser')

app.use(bodyParser.json())


/**
 * Routes
 */
const mountRoutes = require('./routes/index')
mountRoutes(app)


/**
 * Static
 */
/*const path = require('path')

app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get('*', function(req, res) {
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