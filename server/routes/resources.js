const express = require('express');
const router = express.Router();
const { getResources, addResource, getResource, deleteResource, getCategoryResource} = require('../controllers/resource_controller');

router
    .route('/')
    .get(getResources)
    .post(addResource);

router
    .route('/:id')
    .get(getResource)
    .delete(deleteResource);

router
    .route('/category/:id')
    .get(getCategoryResource)

    
module.exports = router;