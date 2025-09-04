const LoginModel = require('../models/hwlogin.model')

// Consultar si el usuario existe:

exports.getUsuario = (req, res) =>{
    let usuario = req.body.usuario
    let pass = req.body.pass
    LoginModel.getUsuario([usuario,pass], (err, usr)=>{
        if(err)
            res.send(err)
        
        res.send(usr)
    })
}
