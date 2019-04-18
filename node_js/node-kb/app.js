const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// check connection

db.once('open', () => {
    console.log('Connected to MongoDB');

});

// db error

db.on('error', (err) => {
    console.log('err', err);
})

// init app
const app = express();
let Article = require('./models/article');
const port = 3000;

// Load View engine
app.set('view', path.join(__dirname, 'views'));

// home route
app.get('/', (req, res) => {
    Article.find({}, (err, articles) => {
        if (err) {
            console.log('err', err);            
        } else {
            console.log('article',articles);            
        }
    })
    res.send('hello world');
});

// start server
app.listen(port, () => {
    console.log('server is listening on port ', port);
});