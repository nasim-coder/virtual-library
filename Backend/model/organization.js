const mongoose = require('mongoose');

//defining schema for organisation
let OrgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    org_id: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//creating model of organisation and exporting it 
module.exports = mongoose.model('Organisation', OrgSchema);
