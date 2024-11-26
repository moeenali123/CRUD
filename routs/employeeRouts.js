const express = require('express')

const router = express.Router();


const employee = require('./../models/employee'); 

router.post('/',async (req,res)=>{
    try{
        const data = req.body
        const newEmployee = new employee(data)

        const response = await newEmployee.save()
        console.log("Data Saved")
        res.statas(200).json(response)

    }catch(err){    
        console.log(err)
        res.statas(500).json({err : 'Internal Serverr Error'})
    }
})

router.get('/',async(req,res)=>{
    try{
        const data = await employee.find()
        console.log("data Fatched Successfully")
        res.status(200).json(data)

    }catch(err){
        console.log(err)
        res.status(500).json({err:'internal Server Error'})
    }
})

router.get('/:profiletype',async (req,res)=>{

    try{
        const profiletype = req.params.profiletype;
        if(profiletype =='fullstack'|| profiletype =='frontend'|| profiletype =='backend'|| profiletype =='dba'|| profiletype =='softwere'){
        
            const response = await employee.find({profile:profiletype});
            console.log('response Fetched Successfully')
            res.status(200).json(response)
        }else{
            res.status(404).json({erro : 'invalid work type'})
        }
    }catch(err){
        console.log(err)
        res.status(404),json({error : 'internal server error'})
    }
})

router.put('/:id',async (req,res) => {

    try{
        const employeeid = req.params.id;
        const updatedemployeedata = req.body;

        const response = await employee.findByIdAndUpdate(employeeid,updatedemployeedata,{
            new :true,
            runValidators:  true
        })

        if(!response){
            return res.status(404).json({error : 'employee Not Found!'})
        }

        console.log("Data Updated")
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(404),json({error : 'internal server error'})
    }
    
})

router.delete('/:id',async(req,res)=>{
    try{
        const personid = req.params.id
        const response =  await employee.findByIdAndDelete(personid)

        if(!response){
            return res.status(404).json({error : 'employee Not Found!'})
        }

        console.log("data Deleted")
        res.status(200).json({massage: 'Employee Deleted Successfully'})
    }catch(err){
        console.log(err)
        res.status(404).json({error : 'internal server error'})
    }
})

module.exports = router;