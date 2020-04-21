const db = require('./dbMain')

/**
 * @TODO Automate process of creating queries text insead of plaintext query.text  
 */

/**
 * @param {String} title
 * @param {String} description
 * @param {String} price
 * @param {Boolean} available
 * @returns {Promise.<Object>} query response
 */
exports.addOneProduct = async function addOneProduct({title, description, price, available}) {
    const query = {
        text: `INSERT INTO products (title, description, price, available) 
            VALUES ($1, $2, $3, $4)`,
        values: [title, description, price, available],
    }

    return new Promise((resolve, reject) => {
        db.query(query.text, query.values)
        .then(
            function onResolved(res) {
                resolve({status: 'success', error: ''})
            },
            function onRejected(err) {
                reject({status: 'unsuccess', error: err})
            }
        )
    })
}

/**
 * @param {Integer} id
 * @returns {Promise.<Object>} query response
 */
exports.getOneProduct = async function getOneProduct(id) {
    const query = {
        text: `SELECT (title, description, price, available) FROM products 
            WHERE id = $1`,
        values: [id],
    }

    return new Promise((resolve, reject) => {
        db.query(query.text, query.values)
        .then(
            function onResolved(res) {
                resolve({status: 'success', error: '', result: res})
            },
            function onRejected(err) {
                reject({status: 'unsuccess', error: err})
            }
        )
    })
}

/**
 * @returns {Promise.<Object>} query response
 */
exports.getAllProducts = async function getAllProducts() {
    const query = {
        text: `SELECT (id, title, description, price, available) FROM products`,
        values: '',
    }

    return new Promise((resolve, reject) => {
        db.query(query.text, query.values)
        .then(
            function onResolved(res) {
                resolve({status: 'success', error: '', result: res})
            },
            function onRejected(err) {
                reject({status: 'unsuccess', error: err})
            }
        )
    })
}