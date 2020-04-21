const { Pool } = require('pg')
const config = require('../config')

const { pg } = config
//const { name, host, database, password, port} = pg

const pool = new Pool(pg)

module.exports = pool