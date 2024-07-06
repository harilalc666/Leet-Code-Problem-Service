const express = require('express');
const probelmRouter = express.Router();
const { ProblemController } = require('../../controller');


probelmRouter.post('/problem', ProblemController.addProblem);

module.exports = probelmRouter