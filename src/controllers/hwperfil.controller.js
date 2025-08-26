const PerfilModel = require('../models/hwperfil.model')

// Consultar la lista de perfiles:

exports.getPerfilList = (req, res) =>{

    PerfilModel.getAllPerfil((err, Perfil)=>{

        if(err)
            res.send(err)
        
        res.send(Perfil)
        
    })
}

// Consulta perfil por id:

exports.getPerfilById = (req, res) =>{
    
    let id = req.params.id
    PerfilModel.getPerfilById(id, (err, Perfil)=>{
        if(err)
            res.send(err)
        
        res.send(Perfil)
    })
}

// Creacion de registro de perfil:

exports.createNewPerfil = (req,res)=>{
    let parametros = req.body
    PerfilModel.createNewPerfil(parametros,(err, dato)=>{
        if(err)
            res.send(err)
        
        res.send({Status:200,Message: 'Registro creado correctamente.', Id: dato.insertId})
    })
}