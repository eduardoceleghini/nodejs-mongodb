const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://root:root@ds137720.mlab.com:37720/model')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/model', require('./routes/route'))

module.exports = app