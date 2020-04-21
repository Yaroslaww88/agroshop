const Product = require('../db/Product')

module.exports = class ProductService {
    constructor(databaseInstance) {
        this.db = databaseInstance

        this.addOneProduct = this.addOneProduct.bind(this)
        this.getOneProduct = this.getOneProduct.bind(this)
        this.getAllProducts = this.getAllProducts.bind(this)
    }

    /**
     * 
     * @param {Product} product
     * @returns {Promise.<null>} 
     */
    async addOneProduct(product) {
        if (!(product instanceof Product)) {
            throw new Error(`product must be instance of Product class`)
        }
        /* if(!product.isValid()) {
            throw new Error(...)
        }*/

        try {
            let { title, description, available, price } = product.serializeToObject()
            let data = await this.db.addOneProduct({ title, description, available, price })
            if (data.status === 'success') {
                return ''
            } else {
                throw new Error('Something wrong in addOneProduct query')
            }
        } catch(err) {
            throw new Error(err)
        }
    }

    /**
     * 
     * @param {Integer} id
     * @returns {Promise.<Product>} 
     */
    async getOneProduct(id) {
        try {
            let data = await this.db.getOneProduct(id)
            if (data.status === 'success') {
                let product = new Product(data.result)
                return product
                /*if (product.isValid()) {
                    resolve(product)
                } else {
                    throw product.getError()
                }*/
            } else {
                throw new Error('Something wrong in addOneProduct query')
            }
        } catch(err) {
            throw new Error(err)
        }
    }

    async getAllProducts() {
        try {
            let data = await this.db.getAllProducts()
            if (data.status === 'success') {
                let products = data.result.rows
                return products
            } else {
                throw new Error('Something wrong in getAllProducts query')
            }
        } catch(err) {
            throw new Error(err)
        }
    }
}