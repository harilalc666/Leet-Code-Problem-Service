const BaseError = require("../errors/base.error");
const logger = require("../logger/logger");

function errorHandler(err, req, res, next){
	if(err instanceof BaseError){
		return res.status(err.statusCode).json({
			success: false,
			message: err.message,
			error: err.details,
			data: {},
		})
	}

	// logging exception error
	logger.error('Unhandled Error', {
        message: err.message,
        stack: err.stack,
        details: err,
    });

	return res.status(500).json({
		success: false,
		message: 'Something went wrong',
		error: err,
		data: {},
	})
}

module.exports = errorHandler;