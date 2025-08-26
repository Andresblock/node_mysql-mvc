const dbConect = require('../../config/db.config')

let Hwperfil = (perfil) =>{
    this.nombre = perfil.nombre;
    this.apellido = perfil.apellido;
    this.edad = perfil.edad;
}

// Lista de perfiles:

Hwperfil.getAllPerfil = (result) =>{
    let query = `SELECT * FROM hw_user_perfil;`
    dbConect.query(query,(err,res)=>{
        if(err){
            console.log('A ocurrido un error: ',err);
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

Hwperfil.getPerfilById = (id,result)=>{
    let query = `SELECT * FROM hw_user_perfil WHERE id_perfil = ?;`
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

Hwperfil.createNewPerfil = (params, result)=>{
    let query = 'INSERT INTO hw_user_perfil SET ?;'
    dbConect.query(query,[params], (err,res)=>{
        if(err){
            result (null,err);
        }else{
            result (null,res);
        }
    })
}


module.exports = Hwperfil;