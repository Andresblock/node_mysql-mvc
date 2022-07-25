const EmployeeModel = require('../models/employee.model')

// Consultar la lista de empleados:

exports.getEmployeeList = (req, res) =>{

    EmployeeModel.getAllEmployee((err, employees)=>{

        if(err)
            res.send(err)
        
        res.send(employees)
        
    })
}

// Consulta empleado por identificacion:

exports.getEmployeeById = (req, res) =>{
    
    let id = req.params.id
    EmployeeModel.getEmployeeById(id, (err, employee)=>{
        if(err)
            res.send(err)
        
        res.send(employee)
    })
}

// Creacion de registro de empleado:

exports.createNewEmployee = (req,res)=>{
    let parametros = req.body
    EmployeeModel.createNewEmployee(parametros,(err, dato)=>{
        if(err)
            res.send(err)
        
        res.send({Status:200,Message: 'Registro creado correctamente.', Id: dato.insertId})
    })
}