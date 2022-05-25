const Publisher = require('../model/Publisher')


const createPublisher =async (req,res) => {
    const { publisherName, year} = req.body;
    try {
        
        const publisher = await Publisher.create({publisherName, year})
        return res.status(201).json({publisher})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

const getAllPublishers = async(req,res) => {
    try {
        const publishers = await Publisher.find({}).populate('book')
        return res.status(200).json({publishers})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    } 
}

const getSinglePublisher= async(req,res) => {
    const {id:publisherID} = req.params
    try {
        const publisher = await Publisher.findOne({_id:publisherID})
        if(!publisher) {
            return res.status(404).json({msg: `no publishers with id ${publisherID}`})
        } 
        return res.status(200).json({publisher})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
    
}

const updatePublisher = async(req,res) => {
    const {id:publisherID} = req.params
    const {publisherName, year} = req.body
    try {
        const publisher = await Publisher.findOne({_id:publisherID})
        if(!publisher) {
            return res.status(404).json({msg: `no publishers with id ${publisherID}`})
        }   
        publisher.publisherName = publisherName
        publisher.year = year
        
        await publisher.save();  
        return res.status(200).json({msg: `publisherupdated successfully`})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }

}
const deletePublisher = async(req,res) => {
    const {id:publisherID} = req.params
    try {
        const publisher = await Publisher.findOneAndDelete({_id:publisherID})
        if(!publisher) {
            return res.status(404).json({msg: `no publisher with id ${publisherID}`})
        } 
        return res.status(200).json({msg: `publisher deleted successfully`})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
    
}

module.exports = {
    createPublisher,
    getAllPublishers,
    getSinglePublisher,
    updatePublisher,
    deletePublisher
}