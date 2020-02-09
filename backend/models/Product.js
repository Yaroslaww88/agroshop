var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    in_stock: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

var Products = mongoose.model('Product', ProductSchema);

module.exports = Products