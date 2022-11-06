//modules and globals
require('dotenv').config()
const express = require('express');
const app = express()

//express settings
// app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


//Controllers and Routes
app.use('/places', require('./controllers/places'))

//homepage
app.get('/', function(req, res) {
    res.render('home')
})

//wildcard route
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

//listen for connections
app.listen(process.env.PORT)