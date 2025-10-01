const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');


// Definicion de parametros de la aplicacion
let port = process.env.PORT || 3000

// Configuarion de middleware para captura de datos:
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// Verificacion de token:

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']; // Obtiene el token de la cabecera
    
    if (!token) {
        return res.status(403).json({ message: 'Se requiere un token para autenticación' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token no válido' });
        }
        req.user = decoded; // Almacena el payload del token en la solicitud
        next();
    });
};


// Parse de los datos a formato JSON:
app.use(express.json())

// Adicion de las rutas:
const usuario = require('./src/routes/hwusuario.route')
const catalogo = require('./src/routes/hwcatalogo.route')
const login = require('./src/routes/hwlogin.route')
const collection = require('./src/routes/hwcollection.route')

// Rutas:
app.use('/api/v1/usuario', usuario)
app.use('/api/v1/catalogo',verifyToken, catalogo)
app.use('/api/v1/loginhw', login)
app.use('/api/v1/coleccion',verifyToken,collection)


app.get('/', (req, res) => {
    res.send({ Status: 200, Message: 'Prueba de app' })
})

app.listen(port, () => {
    console.log('Aplicacion en el puerto: ', port)
})
