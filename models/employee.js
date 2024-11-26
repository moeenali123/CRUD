const mongoose = require('mongoose')

const EmployeeScema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phoneno :{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address : {
        type:String,
        require:true
    },
    profile: {
        type:String,
        require:true,
        enum: ['fullstack', 'frontend', 'backend','dba','softwere'],
    },
    salary : {
        type:Number,
        require:true
    }
})

const Employee = mongoose.model('Employee',EmployeeScema)
module.exports = Employee;