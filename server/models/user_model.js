const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleID : {
        type: String,
        required: [true, 'Add a googleID']
    },

    profilePic: {
        type: String
    },

    userName: {
        type: String,
        required: [true, 'Add a username']
    },

    email: {
        ype: String,
        required: [true, 'Add an email']
    },

    bio: {
        type: String
    },

    push: [
        String
    ],

    pull: [
        String
    ],
    
    posts: [
        mongoose.Schema.Types.ObjectId
    ]
});

module.exports = mongoose.model('User', UserSchema);