const mongoose = require('mongoose');

let OrgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    org_id: {
        type: Number,
        
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Organization;
