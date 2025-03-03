const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', (req, res) => {
    res.render('blog', { page_name: 'blog' });
});

// Add individual blog routes
router.get('/blogOne', (req, res) => {
    res.render('blogOne', { page_name: 'blog' });
});

router.get('/blogTow', (req, res) => {
    res.render('blogTow', { page_name: 'blog' });
});

router.get('/blogThree', (req, res) => {
    res.render('blogThree', { page_name: 'blog' });
});

router.get('/blogFour', (req, res) => {
    res.render('blogFour', { page_name: 'blog' });
});

router.get('/blogFive', (req, res) => {
    res.render('blogFive', { page_name: 'blog' });
});

router.get('/blogSix', (req, res) => {
    res.render('blogSix', { page_name: 'blog' });
});

router.get('/blogSeven', (req, res) => {
    res.render('blogSeven', { page_name: 'blog' });
});

module.exports = router;