const express = require('express')

const router = express.Router()
const {createBook, getAllBooks, getSingleBook, updateBook,deleteBook} = require('../controllers/bookController')


router.post('/', createBook )
router.get('/', getAllBooks)
router.get('/:id', getSingleBook)
router.patch('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router