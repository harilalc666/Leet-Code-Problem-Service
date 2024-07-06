// const { errorMessage } = require('../constants/error.constant');

class BaseException extends Error {
	constructor(message, statusCode = 500) {
		super(message);
		this.statusCode = statusCode;
		this.errorStatus = statusCode
	}
}

module.exports = BaseException;