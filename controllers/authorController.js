const Author = require('../model/Author')


const createAuthor =async (req,res) => {
    const { authorName} = req.body;
    try {
      
        const author = await Author.create({ authorName})
        return res.status(201).json({author})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

const getAllAuthors = async(req,res) => {
    try {
        const authors = await Author.find({}).populate('book')
        return res.status(200).json({authors})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    } 
}

const getSingleAuthor = async(req,res) => {
    const {id:authorID} = req.params
    try {
        const author = await Author.findOne({_id:authorID})
        if(!author) {
            return res.status(404).json({msg: `no authors with id ${authorID}`})
        } 
        return res.status(200).json({author})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
    
}

const updateAuthor = async(req,res) => {
    const {id:authorID} = req.params
    const {authorName} = req.body
    try {
        const author = await Author.findOne({_id:authorID})
        if(!author) {
            return res.status(404).json({msg: `no authors with id ${authorID}`})
        }   
        author.authorName = authorName
        
        await author.save();  
        return res.status(200).json({msg: `author updated successfully`})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }

}
const deleteAuthor = async(req,res) => {
    const {id:authorID} = req.params
    try {
        const author = await Author.findOneAndDelete({_id:authorID})
        if(!author) {
            return res.status(404).json({msg: `no authors with id ${authorID}`})
        } 
        return res.status(200).json({msg: `author deleted successfully`})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
    
}

module.exports = {
    createAuthor,
    getAllAuthors,
    getSingleAuthor,
    updateAuthor,
    deleteAuthor
}