const Question = require('../models/question_model');

exports.getQuestions = async (req, res, next) => {
    try {
        const questions = await Question.find();

        return res.status(200).json({
            success: true,
            count: questions.length,
            data: questions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getQuestion = async (req, res, next) => {
    try {
        const question = await Question.findById(req.params.id);

        if(!question){
            return res.status(404).json({
                success: false,
                error: 'No question found'
            });
        }

        return res.status(200).json({
            success: true,
            data: question
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

//TODO: This
exports.getTagQuestion = async (req, res, next) => {
    try {
        const questions = await Question.find().where('_id').in(req.params.id).exec((err, records) => {});

        if(!questions){
            return res.status(404).json({
                success: false,
                error: 'No questions found'
            });
        }

        return res.status(200).json({
            success: true,
            count: questions.length,
            data: questions
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addQuestion = async (req, res, next) => {    
    try {
        const question = await Question.create(req.body);

        return res.status(201).json({
            success: true,
            data: question
        });
    } catch (error) {
        
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            });

        } 
        
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

exports.deleteQuestion = async (req, res, next) => {    
    try {
        const question = await Question.findById(req.params.id);

        if(!question){
            return res.status(404).json({
                success: false,
                error: 'No question found'
            });
        }

        await question.remove();

        return res.status(200).json({
            success: true,
            data: question
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.updateQuestion = async (req, res, next) => {
    try {

        const question = await Question.findById(req.params.id);

        if(!question){
            return res.status(404).json({
                success: false,
                error: 'No question found'
            });
        }

        if(req.body.question != null) {
            await Question.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    question: req.body.question
                } 
            });
        }

        if(req.body.answer != null) {
            await Question.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    answer: req.body.answer
                } 
            });
        }
        
        if(req.body.tags != null) {
            await Question.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    tags: req.body.tags
                } 
            });
        }

        return res.status(200).json({
            success: true,
            data: question
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}