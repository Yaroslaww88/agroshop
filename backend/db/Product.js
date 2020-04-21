module.exports = class Product {
    /**
     * 
     * @param {String} description 
     * @param {Boolean} available 
     */
    constructor( {title, description, price, available} ) {
        this.title = title
        this.description = description
        this.price = price
        this.available = available
    }

    serializeToJson = () => {
        return JSON.stringify({
            title: this.title, 
            description: this.description, 
            price: this.price, 
            available: this.available
        })
    }

    serializeToObject = () => {
        return {
            title: this.title, 
            description: this.description, 
            price: this.price, 
            available: this.available
        }
    }
}