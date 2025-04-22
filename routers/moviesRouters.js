// Variable to import Express
const express = require('express')

// Routes variables
const router = express.Router()
const movieController = require('../controllers/movieController.js')

// Routes
router.get('/', movieController.getMovies)

router.get('/:id', movieController.showMovie)

router.post('/', movieController.storeMovie)

router.put('/:id', movieController.updateMovie)

router.patch('/:id', movieController.modifyMovie)

router.delete('/:id', movieController.destroyMovie)

router.post('/reviews/', movieController.storeReview)

// Export
module.exports = router