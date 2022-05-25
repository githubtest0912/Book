const Book = require('../model/Book')



const createBook =async (req,res) => {
    const {  ISBN, title, price, noOfPages, description, category} = req.body;
    try {
       
        const book = await Book.create({ ISBN, title, price, noOfPages, description, category})
        return res.status(201).json({book})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

const getAllBooks = async(req,res) => {
    try {
        const books = await Book.find({})
        
        return res.status(200).json({books})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    } 
}

const getSingleBook = async(req,res) => {
    const {id:bookID} = req.params
    try {
        const book = await Book.findOne({_id:bookID})
        if(!book) {
            return res.status(404).json({msg: `no books with id ${bookID}`})
        } 
        return res.status(200).json({book})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
    
}

const updateBook = async(req,res) => {
    const {id:bookID} = req.params
    const {ISBN, title, price, noOfPages, description, category} = req.body
    try {
        const book = await Book.findOne({_id:bookID})
        if(!book) {
            return res.status(404).json({msg: `no books with id ${bookID}`})
        }   
        book.ISBN = ISBN
        book.title = title
        book.price = price
        book.noOfPages = noOfPages
        book.description = description
        book.category = category
        await book.save();  
        return res.status(200).json({msg: `book updated successfully`})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }

}
const deleteBook = async(req,res) => {
    const {id:bookID} = req.params
    try {
        const book = await Book.findOneAndDelete({_id:bookID})
        if(!book) {
            return res.status(404).json({msg: `no books with id ${bookID}`})
        } 
        return res.status(200).json({msg: `book deleted successfully`})

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
    
}

module.exports = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
}