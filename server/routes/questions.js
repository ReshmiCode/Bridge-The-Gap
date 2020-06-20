const express = require('express');
const router = express.Router();
const { getQuestions, addQuestion, getQuestion, deleteQuestion, updateQuestion, getTagQuestion} = require('../controllers/question_controller');

router
    .route('/')
    .get(getQuestions)
    .post(addQuestion);

router
    .route('/:id')
    .get(getQuestion)
    .delete(deleteQuestion)
    .patch(updateQuestion);

router
    .route('/tag/:id')
    .get(getTagQuestion)

    
module.exports = router;