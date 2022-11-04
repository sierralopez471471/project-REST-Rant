require('dotenv').config()
const express = require('express');
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

//homepage
app.get('/', function(req, res) {
    res.render('home')
})

//wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)