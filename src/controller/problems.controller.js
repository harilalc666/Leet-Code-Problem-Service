const ProblemService = require('../services/problem.service');
const ProblemRepository = require('../repository/problem.repository');

const logger = require('../logger/logger');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/response.util');
const problemService = new ProblemService(new ProblemRepository);

async function addProblem(req, res){
	try {
		const createdProblem = await problemService.createProblem(req?.body);
		return sendSuccessResponse(res, 201,createdProblem, 'Successfully Created the New Problem');
	} catch (error) {
		// next(error);
		return sendErrorResponse(req, res, error.statusCode, error);
	}
}

async function getProblem(req, res){
	try {
		const { id } = req.params;
		const singleProblem = await problemService.getProblem(id);
		return sendSuccessResponse(res, 200, singleProblem, "Successfully fetched problem")
	} catch (error) {
		// next(error);
		return sendErrorResponse(req, res, error.statusCode, error);
	}
}

async function getAllProblem(req, res){
	try {
		const allProblems = await problemService.getAllProblem(req?.query);
		return sendSuccessResponse(res, 200, allProblems, "Successfully fetched all problems");
	} catch (error) {
		// next(error);
		return sendErrorResponse(req, res, error.statusCode, error);
	}
}

async function updateProblem(req, res){
	try {
		const data = req.body;
		const updatedProblem = await problemService.udpdateProblem(data, req.params?.id);
		return sendSuccessResponse(res, 200, updatedProblem, "Successfully updated the Problem");
	} catch (error) {
		// next(error);
		return sendErrorResponse(req, res, error.statusCode, error);
	}
}

async function deleteProblem(req, res){
	try {
		const response = await problemService.deleteProblem(req.params?.id);
		logger.info('Successfully Deleted the problem')
		return sendSuccessResponse(res, 200, response, "Problem Deleted Successfully");
	} catch (error) {
		// next(error);
		return sendErrorResponse(req, res, error.statusCode, error);
	}
}

module.exports = {
	deleteProblem,
	getProblem,
	getAllProblem,
	updateProblem,
	addProblem
}