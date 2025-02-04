const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/');
});

router.get('/sub-merged-arc-furnace-transformers', function (req, res) {
    res.render('productOne', {page_name: 'product 1'});
});

router.get('/induction-melting-furnace-transformers', function (req, res) {
    res.render('productTwo', {page_name: 'product 2'});
});

router.get('/power-transformers', function (req, res) {
    res.render('productThree', {page_name: 'product 3'});
});

router.get('/dry-type-transformers', function (req, res) {
    res.render('productFour', {page_name: 'product 4'});
});

router.get('/oltc-fitted-transformer-asvr', function (req, res) {
    res.render('productFive', {page_name: 'product 5'});
});

router.get('/distribution-transformers', function (req, res) {
    res.render('productSix', {page_name: 'product 6'});
});

router.get('/earthing-transformers', function (req, res) {
    res.render('productSeven',{page_name: 'product 7'});
});

router.get('/lt-panel-board', function (req, res) {
    res.render('productEight',{page_name: 'product 8'});
});

module.exports = router;