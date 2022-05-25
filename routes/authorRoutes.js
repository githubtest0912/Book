const express = require('express')

const router = express.Router()
const {createAuthor, getAllAuthors, getSingleAuthor, updateAuthor,deleteAuthor} = require('../controllers/AuthorController')


router.post('/', createAuthor )
router.get('/', getAllAuthors)
router.get('/:id', getSingleAuthor)
router.patch('/:id', updateAuthor)
router.delete('/:id', deleteAuthor)

module.exports = router