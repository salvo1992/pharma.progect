// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// GET request to retrieve all reviews
router.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il recupero delle recensioni' });
  }
});

// POST request to create a new review
router.post('/api/reviews', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il salvataggio della recensione' });
  }
});

module.exports = router;




