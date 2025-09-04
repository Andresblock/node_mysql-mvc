const CollectionModel = require('../models/hwcollection.model')


exports.getCollectionList = (req, res) =>{

    CollectionModel.getAllCollection((err, Perfil)=>{

        if(err)
            res.send(err)
        
        res.send(Perfil)
        
    })
}


exports.getUusarioById = (req, res) =>{
    
    let id = req.params.id
    CollectionModel.getPerfilById(id, (err, Perfil)=>{
        if(err)
            res.send(err)
        
        res.send(Perfil)
    })
}


exports.createNewCollection = (req,res)=>{
    let parametros = req.body
    CollectionModel.createNewCollection(parametros,(err, dato)=>{
        if(err)
            res.send(err)
        
        res.send({Status:200,Message: 'Registro creado correctamente.', Id: dato.insertId})
    })
}