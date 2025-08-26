const express = require('express');
const app = express();

// Definicion de parametros de la aplicacion
let port = process.env.PORT || 3000

// Configuarion de middleware para captura de datos:
app.use(express.urlencoded({extended: false}))

// Parse de los datos a formato JSON:
app.use(express.json())

// Adicion de las rutas:
const usuario = require('./src/routes/hwusuario.route')
const catalogo = require('./src/routes/hwcatalogo.route')

// Ruta para perfiles:
app.use('/api/v1/usuario',usuario)
// Ruta para catalogo:
app.use('/api/v1/catalogo',catalogo)


app.get('/', (req,res)=>{
    res.send({Status:200, Message: 'Prueba del api'})
})

app.listen(port, ()=>{
    console.log('Aplicacion en el puerto: ',port)
})
