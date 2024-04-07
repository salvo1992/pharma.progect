const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Purchase = require('../models/Purchase'); // Importa il modello Purchase



// Route per creare una nuova farmacia e un nuovo acquisto
router.post('/createPharma', async (request, response) => {
    const newPharm = new Purchase({
        asin: request.body.asin,
        title: request.body.title,
        img: request.body.img,
        price: request.body.price,
        category: request.body.category,
        text: request.body.text,
        textL: request.body.textL,
        availability: request.body.availability
    });

    try {
        const pharmToSave = await newPharm.save();
        response.status(201).json({
            statusCode: 201,
            payload: pharmToSave
        });
    } catch (e) {
        response.status(500).json({
            statusCode: 500,
            message: 'Internal server error'
        });
    }
});

// Route per ottenere tutte le farmacie
router.get('/getPharma', async (request, response) => {
    const { page = 1, pageSize = 5 } = request.query;
    try {
        const Pharma = await Purchase.find()
            .limit(pageSize)
            .skip((page - 1) * pageSize);

        const totalPharma = await Purchase.countDocuments();

        response.status(200).json({
            currentPage: +page,
            totalPages: Math.ceil(totalPharma / pageSize),
            Pharma,
        });
    } catch (e) {
        response.status(500).json({
            statusCode: 500,
            message: 'Internal server error'
        });
    }
});



module.exports = router;

