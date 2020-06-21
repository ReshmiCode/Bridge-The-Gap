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
        type: String,
        default: 'https://www.protexinvet.com/userfiles/image/cute-2500929_1920_(1).jpg'
    },

    link: {
        type: String,
        default: 'https://mlh-bridge-the-gap.web.app'
    },
});

module.exports = mongoose.model('Resource', ResourceSchema);