const express = require('express')

const router = express.Router()
const {
    createPublisher,
    getAllPublishers,
    getSinglePublisher,
    updatePublisher,
    deletePublisher
} = require('../controllers/publishController')


router.post('/', createPublisher)
router.get('/', getAllPublishers)
router.get('/:id', getSinglePublisher)
router.patch('/:id', updatePublisher)
router.delete('/:id', deletePublisher)

module.exports = router