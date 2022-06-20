const express = require('express')
const OpenBrewery = require('../../models/open-brewery');

const router = express.Router()

// GET all breweries
router.get('/', (req, res) => {
  res.json({mssg: 'GET all breweries'})
})

// GET a single brewery
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single brewery'})
})

// POST a new brewery
router.post('/', (req, res) => {
    res.json({mssg: 'POST a brewery'})
})

// DELETE a brewery
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a brewery'})
})

// UPDATE a brewery
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a brewery'})
})

module.exports = router