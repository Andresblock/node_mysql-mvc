const express = require('express');
require('dotenv').config();
const app = express();

// Definicion de parametros de la aplicacion
let port = process.env.PORT

// Configuarion de middleware para captura de datos:
app.use(express.urlencoded({extended: false}))

// Parse de los datos a formato JSON:
app.use(express.json())

// Adicion de las rutas:
const perfil = require('./src/routes/hwperfil.route')
const catalogo = require('./src/routes/hwcatalogo.route')

// Ruta para perfiles:
app.use('/api/v1/perfil',perfil)
// Ruta para catalogo:
app.use('/api/v1/catalogo',catalogo)


app.get('/', (req,res)=>{
    res.send({Status:200, Message: 'Prueba del api'})
})

app.listen(port, ()=>{
    console.log('Aplicacion en el puerto: ',port)
})
