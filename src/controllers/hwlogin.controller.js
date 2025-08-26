const CatalogoModel = require('../models/hwlogin.model')

// Consultar si el usuario existe:

exports.getUsuario = (req, res) =>{
    
    let usuario = req.params.usuario
    CatalogoModel.getUsuario(usuario, (err, usuario)=>{
        if(err)
            res.send(err)
        
        res.send(usuario)
    })
}
