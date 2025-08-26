const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/hwlogin.controller')

// Definicion de las rutas:

router.post('/:usuario',LoginController.getUsuario)


module.exports = router