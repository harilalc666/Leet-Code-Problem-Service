const InternalServerError = require("../errors/internalserver.erorr");
const logger = require("../logger/logger");
const ProblemSchema = require("../schemas/problem.schema");

class ProblemRepository {

	async createProblem(problemData) {
		try {
			return await ProblemSchema.create(problemData);
		} catch (error) {
			console.log(error.message);
			throw new InternalServerError(error.message);
		}
	}

	async getProblem(problemId) {
		try {
			return await ProblemSchema.findById(problemId);
		} catch (error) {
			console.log(error.message);
			throw new InternalServerError(error.message);
		}
	}

	async getAllProblem(filtercondition){
		try {
				return await ProblemSchema.find();
		} catch (error) {
			console.log(error.message);
			throw new InternalServerError(error.message);
		}
	}

	async updateProblem(data, id){
		try {
			const response = await ProblemSchema.findOneAndUpdate({_id: id}, data, {lean: true, returnDocument: 'after', runValidators: true});
			return response;
		} catch (error) {		
			console.log(error.message);
			throw new InternalServerError(error.message);
		}
	}

	async deleteProblem(id){
		try {
			const response = await ProblemSchema.findByIdAndDelete(id);
			return response;
		} catch (error) {
			console.log(error.message);
			throw new InternalServerError(error.message);
		}
	}
}

module.exports = ProblemRepository;