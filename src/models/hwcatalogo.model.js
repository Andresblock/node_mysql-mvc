const dbConect = require('../../config/db.config')

let Hwcatalogo = (catalogo) =>{
    this.nombre = catalogo.nombre;
    this.caja = catalogo.apellido;
    this.anio = catalogo.edad;
    this.link = catalogo.edad;
}

// Lista de carros:

Hwcatalogo.getAllCatalogo = (result) =>{
    let query = `SELECT * FROM hw_catalogo;`
    dbConect.query(query,(err,res)=>{
        if(err){
            console.log('A ocurrido un error: ',err);
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

Hwcatalogo.getCatalogoId = (id,result)=>{
    let query = `SELECT * FROM hw_catalogo WHERE id_pieza = ?;`
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

Hwcatalogo.createNewCatalogo = (params, result)=>{
    let query = 'INSERT INTO hw_catalogo SET ?;'
    dbConect.query(query,[params], (err,res)=>{
        if(err){
            result (null,err);
        }else{
            result (null,res);
        }
    })
}


module.exports = Hwcatalogo;