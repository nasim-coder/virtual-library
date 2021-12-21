const mongoose = require('mongoose');
let BookSchema = new mongoose.Schema({
    name:{
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
    }
})
let Book = mongoose.model("Book", BookSchema);
module.exports = Book;