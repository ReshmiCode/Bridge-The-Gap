const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Add a question']
    },

    answer: {
        type: String
    },
    
    tags: [
        String
    ]

});

module.exports = mongoose.model('Question', QuestionSchema);