const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
        
    },
    
    
}, {timestamps: true})

module.exports = mongoose.model('Author',AuthorSchema)