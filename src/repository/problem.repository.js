const InternalServerError = require("../errors/internalserver.erorr");
const logger = require("../logger/logger");
const ProblemSchema = require("../schemas/problem.schema");

class ProblemRepository {

	async createProblem(problemData) {
		try {
			return await ProblemSchema.create(problemData);
		} catch (error) {
			logger.error(`${new Date()} :Failure in creating Problem, ${error.message}, error in repo`);
			throw new InternalServerError();
		}
	}

	async getProblem(problemId) {
		try {
			return await ProblemSchema.findById(problemId);
		} catch (error) {
			logger.error(`${new Date()} :Failure in fetching Problem, ${error.message}, error in repo`);
			throw new InternalServerError();
		}
	}

	async getAllProblem(filtercondition){
		try {
				return await ProblemSchema.find();
		} catch (error) {
			logger.error(`${new Date()} :Failure in fetching All Problem, ${error.message} error in repo`);
			throw new InternalServerError();
		}
	}

	async updateProblem(data, id){
		try {
			const response = await ProblemSchema.findOneAndUpdate({_id: id}, data, {lean: true, returnDocument: after});
			return response;
		} catch (error) {
			logger.error(`${new Date()} :Failed to udpdate the problem data, ${error.message}, error in repo`);
			throw new InternalServerError();
		}
	}

	async deleteProblem(id){
		try {
			const response = await ProblemSchema.findByIdAndDelete(id);
			return response;
		} catch (error) {
			logger.error(`${new Date()} :Failed to delete the problem data, ${error.message}, error in Repo`);
			throw new InternalServerError();
		}
	}
}

module.exports = ProblemRepository;