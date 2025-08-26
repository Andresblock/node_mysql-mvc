const CatalogoModel = require('../models/hwcatalogo.model')

// Consultar el catalogo:

exports.getCatologoList = (req, res) =>{

    CatalogoModel.getAllCatalogo((err, Perfil)=>{

        if(err)
            res.send(err)
        
        res.send(Perfil)
        
    })
}

// Consulta catalogo por id:

exports.getCatalogoById = (req, res) =>{
    
    let id = req.params.id
    CatalogoModel.getCatalogoById(id, (err, Perfil)=>{
        if(err)
            res.send(err)
        
        res.send(Perfil)
    })
}

// Creacion de registro de pieza:

exports.createNewCatalogo = (req,res)=>{
    let parametros = req.body
    CatalogoModel.createNewCatalogo(parametros,(err, dato)=>{
        if(err)
            res.send(err)
        
        res.send({Status:200,Message: 'Registro creado correctamente.', Id: dato.insertId})
    })
}