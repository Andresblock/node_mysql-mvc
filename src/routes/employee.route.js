const express = require('express')
const router = express.Router()
const EmployeeController = require('../controllers/employee.controller')

// Definicion de las rutas:

router.get('/',EmployeeController.getEmployeeList)
router.get('/:id',EmployeeController.getEmployeeById)

module.exports = router