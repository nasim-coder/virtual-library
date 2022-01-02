const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment-iw');
// const connection = require('../config/mongoConnection')

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
let Organization = mongoose.model("Organization", OrgSchema);
//auto increment the org_id field by one
// everytime when the record is saved
autoIncrement.initialize(mongoose.connection)
OrgSchema.plugin(autoIncrement.plugin, {
    model: Organization,
    field: 'org_id',
    startAt: 100,
    incrementBy: 1
})
module.exports = Organization;
