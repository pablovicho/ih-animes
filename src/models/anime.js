// 1. IMPORTACIONES
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 2. SCHEMA
const animeSchma = new Schema({ //estrictamente tipado: decir el tipo de dato que va a tener
    name: String,
    description: String,
    Rating: String,
    episode: Number,
    category: String,
    studio: String,
    img: String
}, {timestamps: true}) //para escribir el día y la hora en que fue publicado

// 3. MODELO
const Anime = mongoose.model('Anime', animeSchma) //primero, la carpeta en la que van a estar los animes (en mayúscula), después el Schema 

// 4. EXPORTACIONES
module.exports = Anime