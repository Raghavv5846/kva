const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', (req, res) => {
    // Sample blog data - replace this with your actual blog data source
    const blogs = [
        {
            image: '/images/blog/1.jpg',
            date: '25 May 2024',
            title: 'Sample Blog Title 1',
            description: 'This is a sample blog description 1'
        },
        {
            image: '/images/blog/2.jpg',
            date: '26 May 2024',
            title: 'Sample Blog Title 2',
            description: 'This is a sample blog description 2'
        },
        // Add more blog objects as needed
    ];

    res.render('blog', { blogs: blogs , page_name: 'blog' });
});

router.get('/:slug/', function (req, res) {
    res.render('blogOne',{page_name: 'blog'});
});

module.exports = router;