const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    ISBN: {
        type: String,
        required: true,
        
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true,
        get: v => Math.round(v),
        set: v => Math.round(v)
    },
    noOfPages: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String,
        enum:['Science Fiction', 'Fantasy', 'Detective and Mystery','Comic', 'Horror'],
        default: 'Fantasy',
       
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author'

    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Publisher'

    }

    
    
}, {timestamps: true})

module.exports = mongoose.model('Book',BookSchema)