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
            result(null,res)
        }
    })
}

Employee.getEmployeeById = (id,result)=>{
    let query = `SELECT * FROM mvc_employee WHERE id_employee = ?;`
    dbConect.query(query,id, (err,res)=>{
        if(err){
            result (null,err);
        }else{
            if(res.length == 0){
                let respuesta = {Status: 201 , Message: "No se encontraron resultados."}
                result (null,respuesta);
            }else{
                result (null,res);
            }
        }
    })

}

module.exports = Employee;