const dbConect = require('../../config/db.config')

let Hwusuario = (usuario) =>{
    this.id_usuario = usuario.id_usuario;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.usuario = usuario.usuario;
    this.pass = usuario.pass;
    this.tipo = usuario.tipo;
    this.fe_creacion = usuario.fe_creacion;
    this.estado = usuario.estado;
}

// Lista de perfiles:

Hwusuario.getAllUsuario = (result) =>{
    let query = `SELECT * FROM usuario;`
    dbConect.query(query,(err,res)=>{
        if(err){
            console.log('A ocurrido un error: ',err);
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

Hwusuario.getUsuarioById = (id,result)=>{
    let query = `SELECT * FROM usuario WHERE id_usuario = ?;`
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

Hwusuario.createNewUsuario = (params, result)=>{
    let query = 'INSERT INTO usuario SET ?;'
    dbConect.query(query,[params], (err,res)=>{
        if(err){
            result (null,err);
        }else{
            result (null,res);
        }
    })
}


module.exports = Hwusuario;