const BaseError = require("../errors/base.error");
const sanitizeMarkDownContent = require('../utils/sanitize');

class ProblemService {

	constructor(problemrepo) {
		this.problemRepo = problemrepo
	}

	async createProblem(problemData) {
		try {
			console.log('in service');
			problemData.description = sanitizeMarkDownContent(problemData.description);
			
			const result = await this.problemRepo.createProblem(problemData)

			if (!result) throw new BaseError(400, 'Something went error', 'Unable to create problem');

			return result;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = ProblemService;