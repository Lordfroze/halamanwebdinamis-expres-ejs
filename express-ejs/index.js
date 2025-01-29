
const path = require('path') // path
const express = require('express');
const app = express();

// import file data json
const tagsData = require('./data.json');

// set view engine ke ejs
app.set('view engine', 'ejs');
// set agar view default mengarah pada folder views
app.set('views', path.join(__dirname, '/views'));

// menampilkan halaman home.ejs
app.get('/', (req, res) => {
    res.render('home.ejs') // bisa juga ditulis home tanpa ejs
});

// menampilkan data seperti devto sesuai tag
app.get('/t/:tag', (req, res) => {
    const {tag} = req.params;
    const data = tagsData[tag]; // data yang diambil dari data.json
    if (data) {
        res.render('tag', {data}); // passing data ke views/tag.ejs
    } else {
        res.render('notfound', {tag}); // passing tag ke views/notfound.ejs
    }
});

// Menampilkan data kucing
app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephen', 'Winston'
    ];
    res.render('cats', {cats});
})

// passing data num ke views/random.ejs
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {num});
});

app.listen(8080, () => {
    console.log(`buka pada host http://localhost:8080`);
})