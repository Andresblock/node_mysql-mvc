const express = require('express')
const router = express.Router()
const CatalogoController = require('../controllers/hwcatalogo.controller')

// Definicion de las rutas:

router.get('/',CatalogoController.getCatologoList)
router.post('/',CatalogoController.createNewCatalogo)
router.get('/:id',CatalogoController.getCatalogoById)

module.exports = router