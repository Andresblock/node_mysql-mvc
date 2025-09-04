const dbConect = require('../../config/db.config')

let Hwlogin = (usuario) =>{
    this.usuario = usuario.usuario;
    this.pass = usuario.pass;
}

Hwlogin.getUsuario = ([usuario,pass],result)=>{
    let query = `SELECT usuario, pass FROM usuario WHERE usuario = ? and pass = ?;`
    dbConect.query(query,[usuario, pass], (err,res)=>{
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
        console.log(`El query resultante es: ${query}`)
    })

}

module.exports = Hwlogin;