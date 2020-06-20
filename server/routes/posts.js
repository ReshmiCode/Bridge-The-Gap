const express = require('express');
const router = express.Router();
const { getPosts, addPost, getPost, deletePost, getUserPost} = require('../controllers/post_controller');

router
    .route('/')
    .get(getPosts)
    .post(addPost);

router
    .route('/:id')
    .get(getPost)
    .delete(deletePost);

router
    .route('/user/:id')
    .get(getUserPost)

    
module.exports = router;