const express = require('express')
const router = express.Router()
const CollectionController = require('../controllers/hwcollection.controller')

// Definicion de las rutas:

router.get('/',CollectionController.getCollectionList)
router.post('/',CollectionController.createNewCollection)
router.get('/:id',CollectionController.getUusarioById)

module.exports = router