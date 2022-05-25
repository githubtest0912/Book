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
    
    
}, {timestamps: true})

module.exports = mongoose.model('Publisher',PublisherSchema)