const mongoose = require('mongoose');

let OrgSchema= new mongoose.Schema({
    name:{
    type: String,
    requird: true
    },
    org_id:{
        type:Number,
        required: true
    }
})

let Organization = mongoose.model("Organization", OrgSchema);
module.exports=Organization;