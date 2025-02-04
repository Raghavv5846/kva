const express = require('express');
const ejs = require('ejs');
const port = process.env.PORT || 5500;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

const productRoutes = require('./routes/products');
const blogRoutes = require('./routes/blog');
const galleryData = require('./galleryData.js')

app.get('/', function (req, res) {
    res.render('home', {page_name: 'home'});
});

app.get('/about', function (req, res) {
    res.render('about', {page_name: 'about'});
});

app.get('/contact', function (req, res) {
    res.render('contact', {page_name: 'contact'});
});

app.get('/manufacturing-process', function (req, res) {
    res.render('process', {page_name: 'process'});
});

app.get('/gallery', function (req, res) {
    res.render('gallery', {page_name: 'gallery', imgData : galleryData});
});

app.get('/clients', function (req, res) {
    res.render('clients', {page_name: 'clients'});
});

app.get('/blogdetail', function (req, res) {
    res.render('blogdetail', {page_name: 'blogdetail'});
});
// app.get('/blog', function (req, res) {
//     res.render('blog', {page_name: 'blog'});
// });

app.use("/products", productRoutes);
app.use("/blog", blogRoutes);

// SEO Centric Path Corrections

app.get('/index.html', function (req, res) {
    res.redirect('/');
});

app.get('/about.html', function (req, res) {
    res.redirect('/about');
});

app.get('/manufacturing-process.html', function (req, res){
    res.redirect('/manufacturing-process');
});

app.use(function(req, res){
    res.status(404).render('404', {page_name: "404"});
});

app.listen(port, function(){
    console.log("Server is listening on port " + port);

});