const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: String,
    link: String,
});

module.exports = mongoose.model('Product', productSchema);
