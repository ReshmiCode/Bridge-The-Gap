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
        type: String,
        required: [true, 'Add an email']
    },

    bio: {
        type: String
    },

    linkedin: {
        type: String
    },

    twitter: {
        type: String
    },

    github: {
        type: String
    },

    pushList: [
        String
    ],

    pullList: [
        String
    ],
    
    posts: [
        mongoose.Schema.Types.ObjectId
    ]
});

module.exports = mongoose.model('User', UserSchema);