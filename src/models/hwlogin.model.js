const dbConect = require('../../config/db.config')
const jwt = require('jsonwebtoken');

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
                const user = { usuario, pass }; 
                const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });  
                result (null,{Status: 200 , usuario: res.usuario, token: token});
            }
        }
        
    })

    

}

module.exports = Hwlogin;