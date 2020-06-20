const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user : {
        type: String,
        required: [true, 'Add a user']
    },

    title: {
        type: String,
        required: [true, 'Add content']
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

module.exports = mongoose.model('Post', PostSchema);