const express = require('express');
const app = express();
const cors = require('cors');

// Definicion de parametros de la aplicacion
let port = process.env.PORT || 3000

// Configuarion de middleware para captura de datos:
app.use(express.urlencoded({extended: false}))
app.use(cors());

// Parse de los datos a formato JSON:
app.use(express.json())

// Adicion de las rutas:
const usuario = require('./src/routes/hwusuario.route')
const catalogo = require('./src/routes/hwcatalogo.route')
const login = require('./src/routes/hwlogin.route')
const collection = require('./src/routes/hwcollection.route')

// Rutas:
app.use('/api/v1/usuario',usuario)
app.use('/api/v1/catalogo',catalogo)
app.use('/api/v1/loginhw',login)
app.use('/api/v1/coleccion',collection)


app.get('/', (req,res)=>{
    res.send({Status:200, Message: 'Prueba de app'})
})

app.listen(port, ()=>{
    console.log('Aplicacion en el puerto: ',port)
})
