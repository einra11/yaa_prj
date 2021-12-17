const express = require('express');
const path = require('path');

// Init App
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', (req, res) => {
    res.render('index')
})

//Start Server
app.listen(3000, () =>{
    console.log('Server started ...')
})