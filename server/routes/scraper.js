const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { data } = await axios.get('http://books.toscrape.com/');
        const $ = cheerio.load(data);
        const products = [];

        $('.product_pod').each((index, element) => {
            const title = $(element).find('h3 a').attr('title');
            const price = $(element).find('.price_color').text();
            const link = $(element).find('h3 a').attr('href');

            products.push({
                title,
                price,
                link: `http://books.toscrape.com/${link}`, // Create the full URL
            });
        });

        await Product.insertMany(products);
        res.json(products);
    } catch (error) {
        console.error('Error scraping the website:', error.response ? error.response.data : error.message);
        res.status(500).send('Error scraping the website');
    }
});

module.exports = router;
