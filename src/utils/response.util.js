const BaseError = require("../errors/base.error");
const errorLogger = require("../logger/logger");

function sendSuccessResponse(res, statusCode, data, message){
    return res.status(statusCode).json({
        success: true,
        message: message,
        data: data,
    })
}

async function sendErrorResponse(req, res, statusCode, error){
    await errorLogger(req, res, error);
    return res.status(statusCode).json({
        success: false,
        message: error.message,
        data: {},
    })
}

module.exports = {
    sendSuccessResponse, 
    sendErrorResponse
};