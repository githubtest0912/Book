const mongoose = require('mongoose')

const PublisherSchema = new mongoose.Schema({
    publisherName: {
        type: String,
        required: true,
        
    },
    year: {
        type: Number,
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Book'

    }
    
    
}, {timestamps: true})

module.exports = mongoose.model('Publisher',PublisherSchema)