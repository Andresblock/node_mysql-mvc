const UsuairoModel = require('../models/hwusuario.model')

// Consultar la lista de perfiles:

exports.getUsuarioList = (req, res) =>{

    UsuairoModel.getAllUsuario((err, Perfil)=>{

        if(err)
            res.send(err)
        
        res.send(Perfil)
        
    })
}

// Consulta perfil por id:

exports.getUusarioById = (req, res) =>{
    
    let id = req.params.id
    UsuairoModel.getPerfilById(id, (err, Perfil)=>{
        if(err)
            res.send(err)
        
        res.send(Perfil)
    })
}

// Creacion de registro de perfil:

exports.createNewUsuario = (req,res)=>{
    let parametros = req.body
    UsuairoModel.createNewUsuario(parametros,(err, dato)=>{
        if(err)
            res.send(err)
        
        res.send({Status:200,Message: 'Registro creado correctamente.', Id: dato.insertId})
    })
}