const dbConect = require('../../config/db.config')

let Hwcollection = (collection) =>{
    this.id_coleccion = collection.id_coleccion;
    this.id_usuario = collection.id_usuario;
    this.id_foto = collection.id_foto;
    this.cantidad = collection.cantidad;
    this.activo = collection.passactivo 
}


Hwcollection.getAllcollection = (result) =>{
    let query = `SELECT 
	                cl.id_coleccion,
	                cl.id_usuario,
	                fp.url,
	                fp.nombre,
	                fp.anio,
	                fp.color,
	                cl.cantidad
                FROM coleccion cl
                LEFT JOIN foto_pieza fp
                    ON cl.id_foto = fp.id_foto;`
    dbConect.query(query,(err,res)=>{
        if(err){
            console.log('A ocurrido un error: ',err);
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

Hwcollection.getcollectionById = (id,result)=>{
    let query = `SELECT 
	                cl.id_coleccion,
	                cl.id_usuario,
	                fp.url,
	                fp.nombre,
	                fp.anio,
	                fp.color,
	                cl.cantidad
                FROM coleccion cl
                LEFT JOIN foto_pieza fp
                    ON cl.id_foto = fp.id_foto
                WHERE cl.id_usuario = ?;`
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

Hwcollection.createNewcollection = (params, result)=>{
    let query = 'INSERT INTO coleccion SET ?;'
    dbConect.query(query,[params], (err,res)=>{
        if(err){
            result (null,err);
        }else{
            result (null,res);
        }
    })
}

module.exports = Hwcollection;