const express = require('express');
const v1Router = express.Router();

const problemRouter = require('./problem.routes');


v1Router.use('/v1',problemRouter);

module.exports = v1Router