const ProblemService = require('../services/problem.service');
const ProblemRepository = require('../repository/problem.repository');
const sendSuccessResponse = require('../utils/success-response');
const logger = require('../logger/logger');
const problemService = new ProblemService(new ProblemRepository);

async function addProblem(req, res, next){
	try {
		const createdProblem = await problemService.createProblem(req?.body);
		return sendSuccessResponse(res, 201,createdProblem, 'Successfully Created the New Problem');
	} catch (error) {
		next(error);
	}
}

async function getProblem(req, res, next){
	try {
		const singleProblem = await problemService.getProblem(req.params)
		return sendSuccessResponse(res, 200, singleProblem, "Successfully fetched problem")
	} catch (error) {
		next(error);
	}
}

async function getAllProblem(req, res, next){
	try {
		const allProblems = await problemService.getAllProblem(req?.query);
		return sendSuccessResponse(res, 200, allProblems, "Successfully fetched all problems");
	} catch (error) {
		next(error);
	}
}

async function updateProblem(req, res, next){
	try {
		const data = req.body;
		const updatedProblem = await problemService.udpdateProblem(data, req.params?.id);
		return sendSuccessResponse(res, 200, updatedProblem, "Successfully updated the Problem");
	} catch (error) {
		next(error);
	}
}

async function deleteProblem(req, res, next){
	try {
		const response = await problemService.deleteProblem(req.params?.id);
		logger.info('Successfully Deleted the problem')
		return sendSuccessResponse(res, 200, response, "Problem Deleted Successfully");
	} catch (error) {
		next(error);
	}
}

module.exports = {
	deleteProblem,
	getProblem,
	getAllProblem,
	updateProblem,
	addProblem
}