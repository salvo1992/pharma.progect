// routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// Aggiungi un elemento al carrello
router.post('/add', async (req, res) => {
  try {
    const newCartItem = new CartItem(req.body);
    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante l\'aggiunta al carrello' });
  }
});

// Visualizza il contenuto del carrello
router.get('/view', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il recupero del carrello' });
  }
});

// Checkout: rimuove gli elementi del carrello
router.post('/checkout', async (req, res) => {
  try {
    // Implementa qui la logica per completare il checkout
    // Ad esempio, potresti rimuovere gli elementi dal carrello una volta che il pagamento è avvenuto con successo
    await CartItem.deleteMany(); // Rimuove tutti gli elementi dal carrello
    res.status(200).json({ message: 'Checkout completato con successo' });
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il checkout' });
  }
});

module.exports = router;
