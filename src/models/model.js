const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MongSchema = new Schema({
    marca: String,
    ano: Number,
    categoria: String,
    combustivel: String,
    cor: String,
    tipo: String,
    renavan: String,
});

module.exports = mongoose.model('models', MongSchema);