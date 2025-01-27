
const path = require('path') // path
const express = require('express');
const app = express();

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
    res.render('tag', {tag});
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
    console.log(`listeing on host http://localhost:8080`);
})