const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/hwusuario.controller')

// Definicion de las rutas:

router.get('/',UsuarioController.getUsuarioList)
router.post('/',UsuarioController.createNewUsuario)
router.get('/:id',UsuarioController.getUusarioById)

module.exports = router