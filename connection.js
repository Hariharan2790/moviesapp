const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

let connectionObj = mongoose.connection

connectionObj.on('connected', () => {
    console.log('Mongo DB connected successfully')
})

connectionObj.on('error', ()=>{
    console.log('Mongo DB connection failed')
})