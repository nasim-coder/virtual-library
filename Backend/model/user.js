const mongoose = require('mongoose');

//defining scham for Users
let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    org_id: {
        type: Number,
        required: true
    }
});

//creating model for the User
let User = mongoose.model("User", UserSchema);

//exporting the Model
module.exports = User;