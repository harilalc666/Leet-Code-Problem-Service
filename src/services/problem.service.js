const BadRequest = require("../errors/badrequest.error");
const BaseError = require("../errors/base.error");
const NotFound = require("../errors/notfound.error");
const sanitizeMarkDownContent = require("../utils/sanitize-html");

class ProblemService {

	constructor(problemrepo) {
		this.problemRepo = problemrepo
	}

	async createProblem(problemData) {
		try {
			console.log('in service');
			problemData.description = sanitizeMarkDownContent(problemData.description);
			
			const result = await this.problemRepo.createProblem(problemData)

			if (!result) throw new BaseError(400, 'Bad Request', 'Unable to create problem');

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getProblem(id){
		try {
			if(!id) throw new BadRequest({details: "Need to pass ID"});

			const result = await this.problemRepo.getProblem(id);

			if(!result) throw new NotFound('Problem not found', {details: `No record matches with id ${id}`})

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getAllProblem(filterdata){
		try {
			const result = await this.problemRepo.getAllProblem();

			if(!result) throw new BaseError(404, "NotFound", "problems not found",{});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async udpdateProblem(problemdata, id){
		try {
			const result = await this.problemRepo.updateProblem(problemdata, id);
			if(!result) throw new BaseError(404, "Not Found", `Problem not found with ID ${id} to update`, {});
			return result;
		} catch (error) {
			throw error;
		}
	}

	async deleteProblem(id){
		try {
			const result = await this.problemRepo.deleteProblem(id);
			console.log(result);
			if(!result) throw new BaseError(404, "Not Found", `Problem not found with ID ${id} to delete`, {});

			return result;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = ProblemService;