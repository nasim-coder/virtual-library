const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email :{
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    date: {
        type:Date,
        default: Date.now
    }
});
let User = mongoose.model("User", UserSchema);
module.exports=User;