const mongoose = require('mongoose');

let AdminSchema = new mongoose.Schema({
    organization:{
        type: String,
        required: true
    },
    name :{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

let Admin = mongoose.model("Admin", AdminSchema);
module.exports=Admin;