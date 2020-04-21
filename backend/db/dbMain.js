const pool = require('./dbPool')

module.exports = {
  query: (text, params) => {
    const start = Date.now()
    const duration = Date.now() - start

    console.log('starting query', { text, duration })

    return new Promise((resolve, reject) => {
      pool.query(text, params)
      .then((res) => {
        console.log('query resolved', { text, duration, rows: res.rowCount })
        resolve(res)
      })
      .catch((err) => {
        console.log('query rejected', { text, duration, error: err })
        reject(err)
      })
    })
  },
}