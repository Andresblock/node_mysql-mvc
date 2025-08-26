const CatalogoModel = require('../models/hwcatalogo.model')

// Consultar el catalogo:

exports.getCatologoList = (req, res) =>{

    CatalogoModel.getAllCatalogo((err, catalogo)=>{

        if(err)
            res.send(err)
        
        res.send(catalogo)
        
    })
}

// Consulta catalogo por id:

exports.getCatalogoById = (req, res) =>{
    
    let id = req.params.id
    CatalogoModel.getCatalogoById(id, (err, catalogo)=>{
        if(err)
            res.send(err)
        
        res.send(catalogo)
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