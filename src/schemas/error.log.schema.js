const mongoose = require('mongoose');

const errorLogSchema = new mongoose.Schema({
    url: String,
    method: String,
    query: Object,
    params: Object,
    requestBody: Object,
    errorDetails: Object,
    statusCode: Number,
    timestamp: { type: Date, default: Date.now }
});

const ErrorLog = mongoose.model('ErrorLog', errorLogSchema);

module.exports = ErrorLog;
