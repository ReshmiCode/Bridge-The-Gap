const User = require('../models/user_model');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.find({}).where({ "googleID": req.params.id});

        return res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        return res.status(201).json({
            success: true,
            data: user
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

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.find({}).where({ "googleID": req.params.id});
        if(user.length == 0){
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        await User.remove({googleID : req.params.id});

        return res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.updateUser = async (req, res, next) => {
    try {

        const user = await User.find({}).where({ "googleID": req.params.id});

        if(!user){
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        if(req.body.profilePic != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    profilePic: req.body.profilePic
                } 
            });
        }

        if(req.body.userName != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    userName: req.body.userName
                } 
            });
        }
        
        if(req.body.posts != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    posts: req.body.posts
                } 
            });
        }

        if(req.body.push != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    push: req.body.push
                } 
            });
        }

        if(req.body.pull != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    pull: req.body.pull
                } 
            });
        }

        if(req.body.bio != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    bio: req.body.bio
                } 
            });
        }

        if(req.body.linkedin != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    linkedin: req.body.linkedin
                } 
            });
        }

        if(req.body.twitter != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    twitter: req.body.twitter
                } 
            });
        }

        if(req.body.github != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    github: req.body.github
                } 
            });
        }

        return res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}