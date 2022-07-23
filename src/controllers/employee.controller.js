const EmployeeModel = require('../models/employee.model')

// Consultar la lista de empleados:

exports.getEmployeeList = (req, res) =>{
    // res.send({Status: 200, Message: "Entro a la lista de empleados"})
    EmployeeModel.getAllEmployee((err, employees)=>{

        if(err)
            res.send(err)
        
        res.send(employees)
        
    })
}

exports.getEmployeeById = (req, res) =>{
    
    let id = req.params.id
    EmployeeModel.getEmployeeById(id, (err, employee)=>{
        if(err)
            res.send(err)
        
        res.send(employee)
    })
}

exports.createNewEmployee = (req,res)=>{
    console.log('creacion de registro: ',req.body)
}