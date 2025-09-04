const CollectionModel = require('../models/hwcollection.model')


exports.getCollectionList = (req, res) =>{

    CollectionModel.getAllcollection((err, Collection)=>{

        if(err)
            res.send(err)
        
        res.send(Collection)
        
    })
}


exports.getCollectionById = (req, res) =>{
    
    let id = req.params.id
    CollectionModel.getcollectionById(id, (err, Collection)=>{
        if(err)
            res.send(err)
        
        res.send(Collection)
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