const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
})

const bookModel = mongoose.model('bookTbl', bookSchema);

module.exports = bookModel;