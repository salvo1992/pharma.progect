const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');


router.post('/comments', async (req, res) => {
    try {
      const { comment, rating, recommend } = req.body;
      const newComment = new Comment({ comment, rating, recommend });
      await newComment.save();
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error: 'Errore durante il salvataggio del commento' });
    }
  });


  // Route per ottenere tutti i commenti salvati
router.get('/comments', async (req, res) => {
  try {
      const comments = await Comment.find();
      res.status(200).json(comments);
  } catch (error) {
      res.status(500).json({ error: 'Errore durante il recupero dei commenti' });
  }
});
  
  module.exports = router;