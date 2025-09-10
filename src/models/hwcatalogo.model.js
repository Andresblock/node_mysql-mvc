const dbConect = require('../../config/db.config')

let Hwcatalogo = (catalogo) => {
    this.id_foto = catalogo.id_foto;
    this.url = catalogo.url;
    this.nombre = catalogo.nombre;
    this.anio = catalogo.anio;
}

// Lista de carros:

Hwcatalogo.getAllCatalogo = (result) =>{
    let query = `SELECT * FROM foto_pieza;`
    dbConect.query(query,(err,res)=>{
        if(err){
            console.log('A ocurrido un error: ',err);
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

Hwcatalogo.getCatalogoId = (id, result) => {
    let query = `SELECT * FROM foto_pieza WHERE id_foto = ?;`
    dbConect.query(query, id, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            if (res.length == 0) {
                let respuesta = { Status: 201, Message: "No se encontraron resultados." }
                result(null, respuesta);
            } else {
                result(null, res);
            }
        }
    })

}

Hwcatalogo.createNewCatalogo = (params, result) => {
    let query = 'INSERT INTO foto_pieza SET ?;'
    dbConect.query(query, [params], (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


module.exports = Hwcatalogo;