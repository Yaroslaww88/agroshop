const pool = require('./dbPool')

function createProductsTable() {
    const createProductsTableQuery = `CREATE TABLE IF NOT EXISTS products
    (id SERIAL PRIMARY KEY,
    title CHARACTER(100),
    description CHARACTER(1000),
    price CHARACTER(20),
    available BOOLEAN)`;

    pool.query(createProductsTableQuery)
    .then((res) => {
        console.log('table "products" created successfully')
        pool.end()
    })
    .catch((err) => {
        console.log('Table "products" not created. ', err)
        pool.end()
    })
}

createProductsTable()