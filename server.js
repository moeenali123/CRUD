const express = require('express')

const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const router = require('router')

const db = require('./db');
const employee = require('./models/employee'); 


app.get('/',function(req,res){
    res.send('hello this is connectivity with mongo DB Server')
})

app.get('/connected',function(req,res){
    res.send('yes Conncected')
})


const employeeRouts = require('./routs/employeeRouts')
app.use('/employee',employeeRouts)


app.listen(3000,()=>{
    console.log('server is listening on port No 3000')
})