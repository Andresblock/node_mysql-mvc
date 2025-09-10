// Definicion de la conexion a MySQL:
const mysql = require('mysql');
require('dotenv').config();

/* Definicion de parametros requeridos:
    Al igual que el puerto en el app.js, es una buena practica tomarlos por las variables de entorno,
    como se especifico en el punto anterior, esto se recomienda realizarlo en ambientes productivos
*/

const host= process.env.host;
const user= process.env.user;
const password= process.env.password;
const database= process.env.database;


// Definicion del metodo de conexion hacia la base de datos:

// const mysqlConn = mysql.createConnection({

//     host: host,
//     user: user,
//     password: password,
//     database: database
// });

// mysqlConn.connect(function (err){
//     if (err){
//         console.log(err);
//         return;
//     }else{
//         console.log('Conexion exitosa a la base de datos');
//     }
// });

// module.exports = mysqlConn;

// Definicion de un pool de conexiones:

const pool = mysql.createPool({
  connectionLimit: 10, // número máximo de conexiones simultáneas
  host: host,
  user: user,
  password: password,
  database: database
});

module.exports = pool;