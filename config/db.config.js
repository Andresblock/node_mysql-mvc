// Definicion de la conexion a MySQL:
const mysql = require('mysql');

/* Definicion de parametros requeridos:
    Al igual que el puerto en el app.js, es una buena practica tomarlos por las variables de entorno,
    como se especifico en el punto anterior, esto se recomienda realizarlo en ambientes productivos
*/

const host= 'mysql-hwcollector.alwaysdata.net';
const user= '400380_admin';
const password= 'Ab12052022';
const database= 'hwcollector_db';
    
// Definicion del metodo de conexion hacia la base de datos:

const mysqlConn = mysql.createConnection({

    host: host,
    user: user,
    password: password,
    database: database
});

mysqlConn.connect(function (err){
    if (err){
        console.log(err);
        return;
    }else{
        console.log('Conexion exitosa a la base de datos');
    }
});

module.exports = mysqlConn;