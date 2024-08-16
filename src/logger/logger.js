const BaseError = require("../errors/base.error");
const ErrorLog = require("../schemas/error.log.schema");

async function errorLogger(req, res, err) {
    // Capture request details
    const { originalUrl, method, query, params, body } = req;
    
    // Capture response details
    const oldSend = res.send;
    let responseBody;
    
    res.send = function(data) {
        responseBody = data; // Capture response body
        oldSend.apply(res, arguments); // Call the original res.send() function
    };
    
    const statusCode = err instanceof BaseError ? err.statusCode : 500;
    
    // Log error details after response is sent
    res.on('finish', async () => {
        const errorLog = new ErrorLog({
            url: originalUrl,
            method: method,
            query: Object.keys(query).length ? query : '',
            params: Object.keys(params).length ? params : '',
            requestBody: body,
            errorDetails: err instanceof BaseError ? err.details : err.message,
            statusCode: statusCode
        });

        try {
            await errorLog.save();
        } catch (saveError) {
            console.error('Failed to save error log:', saveError.message);
        }
    });
}

module.exports = errorLogger;
