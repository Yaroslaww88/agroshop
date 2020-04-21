const { Pool } = require('pg')
const config = require('../config')

const { pg } = config

const pool = new Pool(pg)

module.exports = pool