const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const scraperRoutes = require('./routes/scraper');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests

// Basic root route
app.get('/', (req, res) => {
    res.send('Welcome to the eCommerce Scraper API!');
});

// Scraper route
app.use('/api/scraper', scraperRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
