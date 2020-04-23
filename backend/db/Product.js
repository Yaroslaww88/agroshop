module.exports = class Product {
    /**
     * 
     * @param {String} description 
     * @param {Boolean} available 
     */
    constructor( {id = 0, title, description, price, available} ) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.available = available
    }

    serializeToJson = () => {
        return JSON.stringify({
            id: this.id,
            title: this.title, 
            description: this.description, 
            price: this.price, 
            available: this.available
        })
    }

    serializeToObject = () => {
        return {
            id: this.id,
            title: this.title, 
            description: this.description, 
            price: this.price, 
            available: this.available
        }
    }
}