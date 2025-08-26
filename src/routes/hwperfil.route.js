const express = require('express')
const router = express.Router()
const PerfilController = require('../controllers/hwperfil.controller')

// Definicion de las rutas:

router.get('/',PerfilController.getPerfilList)
router.post('/',PerfilController.createNewPerfil)
router.get('/:id',PerfilController.getPerfilById)

module.exports = router