// Variable to import Express
const express = require('express')

// Routes variables
const router = express.Router()
const movieController = require('../controllers/movieController.js')

// Routes
router.get('/', movieController.index)

router.get('/:id', movieController.show)

router.post('/', movieController.store)

router.put('/:id', movieController.update)

router.patch('/:id', movieController.modify)

router.delete('/:id', movieController.destroy)

// Export
module.exports = router