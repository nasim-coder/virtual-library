const mongoose = require('mongoose');

//defining schema for the Books
let BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    org_id: {
        type: Number,
        required: true
    },
    fileId: {
        type: mongoose.Types.ObjectId
    }
})

//creating model for the book
let Book = mongoose.model("Book", BookSchema);

//exporting the Book model
module.exports = Book;