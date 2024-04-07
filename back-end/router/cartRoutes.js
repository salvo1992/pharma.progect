// routes/cart.js

const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// Aggiunge l'intero oggetto carrello al database durante il checkout
router.post('/checkout', async (req, res) => {
  try {
    const cartItems = req.body.items; // Ricevi l'array degli elementi selezionati dal frontend
    await CartItem.insertMany(cartItems); // Aggiunge l'intero oggetto carrello al database
    res.status(200).json({ message: 'Checkout completato con successo' });
  } catch (error) {
    console.error('Errore durante il checkout:', error);
    res.status(500).json({ error: 'Errore durante il checkout' });
  }
});

// Recupera tutti gli elementi presenti nel carrello
// Recupera tutti gli elementi presenti nel carrello dal database
router.get('/cartItems', async (req, res) => {
    try {
      const cartItems = await CartItem.find(); // Recupera tutti gli elementi presenti nel carrello dal database
      res.status(200).json(cartItems);
    } catch (error) {
      console.error('Errore durante il recupero degli elementi del carrello:', error);
      res.status(500).json({ error: 'Errore durante il recupero degli elementi del carrello' });
    }
  });

module.exports = router;






