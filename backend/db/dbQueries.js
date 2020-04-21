const db = require('./dbMain')

exports.addOneProduct = async function addOneProduct(product) {
    let { description, available } = product
    const query = {
        text: `INSERT INTO products (description, available) 
            VALUES ($1, $2)`,
        values: [description, available],
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

exports.getOneProduct = async function getOneProduct(product) {
    let { id } = product
    const query = {
        text: `SELECT (description, available) FROM products 
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

exports.getAllProducts = async function getAllProducts() {
    const query = {
        text: `SELECT (id, description, available) FROM products`,
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