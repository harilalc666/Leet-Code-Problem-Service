function sendSuccessResponse(res, statusCode, data, message){
    return res.status(statusCode).json({
        success: true,
        message: message,
        data: data,
    })
}

module.exports = sendSuccessResponse;