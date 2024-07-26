const InternalServerError = require("../errors/internalserver.erorr");
const ProblemSchema = require("../schemas/problem.schema");

class ProblemRepository{

    async createProblem(problemData){
        try {
            return await ProblemSchema.create(problemData);
        } catch (error) {
            console.error(`Failure in creating Problem, ${error.message}`);
            throw new InternalServerError();
        }
    }
}

module.exports = ProblemRepository;