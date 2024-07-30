const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },

    difficulty:{
        type: String,
        enum:{
            values: ['Easy', 'Medium', 'Hard'],
        },
        default: "Easy",
        required: true,
    },

    testcase:[{ 
        input: {
            type: String,
            required: true,
        },
        output: {
            type: String,
            required: true,
        } 
    }],

    editorial_description:{ type: String },
})

module.exports = mongoose.model('Problem', ProblemSchema);