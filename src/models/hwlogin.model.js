const dbConect = require('../../config/db.config')

let Hwlogin = (usuario) =>{
    this.usuario = usuario.usuario;
    this.pass = usuario.pass;
}


Hwlogin.getUsuario = (usuario,result)=>{
    let query = `SELECT usuario, pass FROM usuario WHERE usuario = ?;`
    dbConect.query(query,usuario, (err,res)=>{
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

// Hwusuario.createNewUsuario = (params, result)=>{
//     let query = 'INSERT INTO usuario SET ?;'
//     dbConect.query(query,[params], (err,res)=>{
//         if(err){
//             result (null,err);
//         }else{
//             result (null,res);
//         }
//     })
// }


module.exports = Hwlogin;