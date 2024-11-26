const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/deardatabase'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true 
})

const db = mongoose.connection

db.on('connected',()=>{
    console.log('Connected to Mongo DB')
})
db.on('error',(err)=>{
    console.log('Error : ',err)
})
db.on('disconnected',()=>{
    console.log('Disconnected to Mongo DB')
})

module.exports = db;