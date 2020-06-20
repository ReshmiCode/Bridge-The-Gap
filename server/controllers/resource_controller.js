const Resource = require('../models/resource_model');

exports.getResources = async (req, res, next) => {
    try {
        const resources = await Resource.find();

        return res.status(200).json({
            success: true,
            count: resources.length,
            data: resources
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getResource = async (req, res, next) => {
    try {
        const resource = await Resource.findById(req.params.id);

        if(!resource){
            return res.status(404).json({
                success: false,
                error: 'No resource found'
            });
        }

        return res.status(200).json({
            success: true,
            data: resource
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getCategoryResource = async (req, res, next) => {
    try {
        const resources = await Resource.find({}).where({ "category": req.params.id});

        if(!resources){
            return res.status(404).json({
                success: false,
                error: 'No resource found'
            });
        }

        return res.status(200).json({
            success: true,
            count: resources.length,
            data: resources
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addResource = async (req, res, next) => {    
    try {
        const resource = await Resource.create(req.body);

        return res.status(201).json({
            success: true,
            data: resource
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

exports.deleteResource = async (req, res, next) => {    
    try {
        const resource = await Resource.findById(req.params.id);

        if(!resource){
            return res.status(404).json({
                success: false,
                error: 'No resource found'
            });
        }

        await resource.remove();

        return res.status(200).json({
            success: true,
            data: resource
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
