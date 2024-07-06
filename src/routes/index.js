const express = require('express');
const apiRouter = express.Router();

const v1Router = require('./V1/index')


apiRouter.use('/api',v1Router);

module.exports = apiRouter