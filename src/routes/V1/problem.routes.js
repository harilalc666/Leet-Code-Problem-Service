const express = require('express');
const probelmRouter = express.Router();
const { ProblemController } = require('../../controller');


probelmRouter.post('/problem', ProblemController.addProblem);
probelmRouter.get('/problem/:id', ProblemController.getProblem);
probelmRouter.get('/problems', ProblemController.getAllProblem);
probelmRouter.patch('/problem/:id', ProblemController.updateProblem);
probelmRouter.delete('/problem/:id', ProblemController.deleteProblem);

module.exports = probelmRouter