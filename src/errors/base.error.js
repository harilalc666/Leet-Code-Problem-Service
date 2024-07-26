class BaseError extends Error{
    constructor(statusCode, name, message, errordetails){
        super(message);
        this.name = name;
        this.details = errordetails;
        this.statusCode = statusCode;
    }
}

module.exports = BaseError;