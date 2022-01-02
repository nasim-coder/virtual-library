const mongoose = require('mongoose');

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

module.exports = mongoose.model('Organisation', OrgSchema);
