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
exports.addOneProduct = function addOneProduct({ title, description, price, available }) {
    const query = {
        text: `INSERT INTO products (title, description, price, available) 
            VALUES ($1, $2, $3, $4)
            RETURNING id`,
        values: [title, description, price, available],
    }

    return new Promise((resolve, reject) => {
        db.query(query.text, query.values)
        .then(
            function onResolved(res) {
                resolve({status: 'success', error: '', result: res.rows[0].id})
            },
            function onRejected(err) {
                reject({status: 'unsuccess', error: err})
            }
        ).catch((err) => {
            reject({status: 'unsuccess', error: err})
        })
    })
}

/**
 * @param {Integer} id
 * @returns {Promise.<Object>} query response
 */
exports.getOneProduct = function getOneProduct(id) {
    const query = {
        text: `SELECT row_to_json(row)
                FROM (
                    SELECT id, title, description, price, available,
                    TRIM(trailing ' ' from title) as title,
                    TRIM(trailing ' ' from description) as description,
                    TRIM(trailing ' ' from price) as price
                    FROM products
                    WHERE id = $1
                ) row`,
        values: [id],
    }

    return new Promise((resolve, reject) => {
        db.query(query.text, query.values)
        .then(
            function onResolved(res) {
                let result = res.rows[0].row_to_json
                resolve({status: 'success', error: '', result: result})
            },
            function onRejected(err) {
                reject({status: 'unsuccess', error: err})
            }
        ).catch((err) => {
            reject({status: 'unsuccess', error: err})
        })
    })
}

/**
 * @returns {Promise.<Object>} query response
 */
exports.getAllProducts = function getAllProducts() {
    const query = {
        text: `SELECT row_to_json(row)
                FROM (
                    SELECT id, title, description, price, available,
                    TRIM(trailing ' ' from title) as title,
                    TRIM(trailing ' ' from description) as description,
                    TRIM(trailing ' ' from price) as price
                    FROM products
                ) row`,
        values: '',
    }

    return new Promise((resolve, reject) => {
        db.query(query.text, query.values)
        .then(
            function onResolved(res) {
                let result = []
                for (let row of res.rows) {
                    result.push(row.row_to_json)
                }
                resolve({status: 'success', error: '', result: result})
            },
            function onRejected(err) {
                reject({status: 'unsuccess', error: err})
            }
        ).catch((err) => {
            reject({status: 'unsuccess', error: err})
        })
    })
}

/**
 * @param {Integer} id of product to delete
 */
exports.deleteOneProduct = function deleteOneProduct(id) {
    const query = {
        text: `DELETE FROM products 
            WHERE id = $1`,
        values: [id],
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
        ).catch((err) => {
            reject({status: 'unsuccess', error: err})
        })
    })
}

/**
 * @param {String} title
 * @param {String} description
 * @param {String} price
 * @param {Boolean} available
 * @returns {Promise.<Object>} query response
 */
exports.updateOneProduct = async function({ id, title, description, price, available }) {
    const query = {
        text: `UPDATE products
            SET (title, description, price, available) = ($2, $3, $4, $5)
            WHERE id = $1`,
        values: [id, title, description, price, available]
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
        .catch((err) => {
            reject({status: 'unsuccess', error: err})
        })
    })
}