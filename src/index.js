// 1. IMPORTACIONES (o variables globales)
const express = require("express")
const app = express()

require("dotenv").config()

const path = require('path') //path es un método incluído en nodejs

const connectDB = require('./config/db')

// 2. MIDDLEWARES
app.use(express.static(path.join(__dirname, "public"))) //similar a lo que habíamos hecho antes

//Configuraciones
app.set('views', path.join(__dirname, 'views')) //motor de vistas
app.set('view engine', 'hbs')

connectDB()
// 3. RUTAS
app.get('/', (req,res) => {
res.render('index.hbs')
})


// 4. SERVIDOR
app.listen(process.env.PORT, () => {
console.log(`servidor funcionando en puerto http://localhost:${process.env.PORT}`)
})