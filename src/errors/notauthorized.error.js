const BaseError = require("./base.error");

class NotAuthorized extends BaseError{
    constructor(details){
        super(401, "NotAuthorized", 'Not Authorized to make request', details);
    }
}

module.exports = NotAuthorized;