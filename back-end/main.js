const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const purchaseRouter = require('./router/PurchaseRouter');
const CommentRouter = require('./router/CommentRouter');
const ReviewRouter = require('./router/ReviewRouter'); 
const cartRoutes = require('./router/cartRoutes');
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 9089;

app.use(express.json());
app.use(cors());
app.use('/', purchaseRouter);
app.use('/', CommentRouter); // Aggiorna il prefisso dell'endpoint per CommentRouter
app.use('/', ReviewRouter);
app.use('/',cartRoutes)


mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Db connection error'));
db.once('open', () => {
    console.log('Database successfully connected!');
});

app.listen(PORT, () => console.log(`server connected and listening on port ${PORT}`));
