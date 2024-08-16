class BaseError extends Error{
    constructor(statusCode, name, message, details){
        super(message, name);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details
    }
}

module.exports = BaseError;