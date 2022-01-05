const mongoose = require('mongoose');

//defining Notification Schema
const NotificationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    org_id: {
        type: Number,
        required: true
    }
})

//creating model and exporting
module.exports = mongoose.model('Notification', NotificationSchema);
