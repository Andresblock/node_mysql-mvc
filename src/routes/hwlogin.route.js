const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/hwlogin.controller')

// Definicion de las rutas:
router.post('/',LoginController.getUsuario)


module.exports = router