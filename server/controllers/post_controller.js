const Post = require('../models/post_model');
const axios = require("axios").default;

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();

        return res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                success: false,
                error: 'No post found'
            });
        }

        return res.status(200).json({
            success: true,
            data: post
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getUserPost = async (req, res, next) => {
    try {
        const posts = await Post.find({}).where({ "user": req.params.id});

        if(!posts){
            return res.status(404).json({
                success: false,
                error: 'No post found'
            });
        }

        return res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addPost = async (req, res, next) => {    
    try {
        const post = await Post.create(req.body);

        try {
            const user = await axios.get(`https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${post.user}`);
            const newPosts = user.data.data[0].posts;
            newPosts.push(post._id.toString());
            await axios.patch(`https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${post.user}`,
            {
                posts: newPosts,
            });
        } catch (err) {
            console.log(err);
        }

        return res.status(201).json({
            success: true,
            data: post
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

exports.deletePost = async (req, res, next) => {    
    try {
        const post = await Post.findById(req.params.id);

        const postToDelete = post._id;

        if(!post){
            return res.status(404).json({
                success: false,
                error: 'No post found'
            });
        }

        await post.remove();

        try {
            const user = await axios.get(`https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${post.user}`);
            const newPosts = user.data.data[0].posts;
            var index = newPosts.indexOf(postToDelete.toString());
            if (index !== -1) newPosts.splice(index, 1);
            await axios.patch(`https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${post.user}`,
              {
                posts: newPosts,
              }
            );
        } catch (err) {
            console.log(err);
        }

        return res.status(200).json({
            success: true,
            data: post
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
