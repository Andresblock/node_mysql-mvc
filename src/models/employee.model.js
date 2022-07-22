const dbConect = require('../../config/db.config')

let Employee = (employee) =>{
    this.nombre = employee.nombre;
    this.apellido = employee.apellido;
    this.edad = employee.edad;
}

// Lista de empleados:

Employee.getAllEmployee = (result) =>{
    let query = `SELECT * FROM mvc_employee;`
    dbConect.query(query,(err,res)=>{
        if(err){
            console.log('A ocurrido un error: ',err);
            result(null,err)
        }else{
            console.log('Ejecutado con exito la consulta de empleados');
            result(null,res)
        }
    })
}

module.exports = Employee;