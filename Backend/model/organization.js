const mongoose = require('mongoose');

let OrgSchema= new mongoose.Schema({
    name:{
    type: String,
    required: true
    },
    org_id:{
        type:Number,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

let Organization = mongoose.model("Organization", OrgSchema);
module.exports = Organization;