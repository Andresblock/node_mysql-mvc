const express = require('express');
const app = express();

// Definicion de parametros de la aplicacion
let port = process.env.PORT || 3000

// Configuarion de middleware para captura de datos:
app.use(express.urlencoded({extended: false}))

// Parse de los datos a formato JSON:
app.use(express.json())

// Adicion de las rutas:
const employee = require('./src/routes/employee.route')

// Ruta para empleados:
app.use('/api/v1/employee',employee)


app.get('/', (req,res)=>{
    res.send({Status:200, Message: 'Prueba del api'})
})

app.listen(port, ()=>{
    console.log('Aplicacion en el puerto: ',port)
})
