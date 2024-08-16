function globalErrorHandler(err, req, res, next){
  const env = process.env.NODE_ENV;
  
  return res.status(err.statusCode).json({
    status: err.statusCode,
    success: false,
    message: err.message,
    error: env == 'dev' ? err.details : ''
  })
}

module.exports = globalErrorHandler;