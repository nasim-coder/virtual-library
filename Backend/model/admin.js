const mongoose = require('mongoose');

//creating schema for Admin
let AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    org_id: {
        type: Number,
        required: true
    }
})

//creating model for Admin
let Admin = mongoose.model("Admin", AdminSchema);

//exporting the Admin model
module.exports = Admin;