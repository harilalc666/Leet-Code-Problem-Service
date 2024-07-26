const ProblemService = require('../services/problem.service');
const ProblemRepository = require('../repository/problem.repository');
const problemService = new ProblemService(new ProblemRepository);

async function addProblem(req, res, next){
	try {
		const createdProblem = await problemService.createProblem(req?.body);
		return res.status(201).json({
			success: true,
			message: "Successfully created the New Problem",
			data: createdProblem,
		})
	} catch (error) {
		next(error);
	}
}

async function getProblem(req, res, next){
	try {
		
	} catch (error) {
		next(error);
	}
}

async function getProblems(){
	return;
}

async function updateProblem(){
	return;
}

async function deleteProblem(){
	return;
}

module.exports = {
	deleteProblem,
	getProblem,
	getProblems,
	updateProblem,
	addProblem
}