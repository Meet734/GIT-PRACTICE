const express = require('express');

const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// About route
router.get('/about', (req, res) => {
    res.send('This is the About Page');
});

// Contact route
router.get('/contact', (req, res) => {
    res.send('This is the Contact Page');
});

module.exports = router;