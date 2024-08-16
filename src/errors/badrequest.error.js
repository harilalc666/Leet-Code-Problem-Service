const BaseError = require("./base.error");

class BadRequest extends BaseError{
    constructor(details){
        super(400, "BadRequest", 'Invalid data passed', details);
        // this.details = details
    }
}

module.exports = BadRequest;