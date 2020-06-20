const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Add a title']
    },
    
    category: {
        type: String,
        required: [true, 'Add a category']
    },

    content: {
        type: String,
        required: [true, 'Add a content']
    },
    
    image: {
        type: String
    },

    link: {
        type: String
    },
});

module.exports = mongoose.model('Resource', ResourceSchema);