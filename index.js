//modules and globals
require('dotenv').config()
const express = require('express');
const app = express()
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const PORT = process.env.PORT
//express settings
//app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//mongo
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to: ', process.env.MONGO_URI)}
)

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
app.listen(PORT)

module.exports = app