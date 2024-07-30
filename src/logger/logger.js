const winston = require('winston');
const {format, transports} = require('winston');
const todayDate = new Date();
const fileName = `error_${todayDate}.log`;
const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
      new winston.transports.File({ filename: `error.log`, level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ]
  });


  module.exports = logger