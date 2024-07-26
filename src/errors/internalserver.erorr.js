const BaseError = require("./base.error");

class InternalServerError extends BaseError{
    constructor(details){
        super(500, "InternalServerError", 'Something Went Wrong !!', details);
    }
}

module.exports = InternalServerError;