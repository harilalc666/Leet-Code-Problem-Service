const BaseError = require("./base.error");

class NotFound extends BaseError{
    constructor(message, details){
        super(404, "NotFound", message, details);
        this.details = details
        this.message = message
    }
}

module.exports = NotFound;