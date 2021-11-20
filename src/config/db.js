const mongoose = require("mongoose")
const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB) //cuando mongoose se conecte a process.env
console.log('database connected') //¿de dónde salió MONGODB?
}

module.exports = connectDB 