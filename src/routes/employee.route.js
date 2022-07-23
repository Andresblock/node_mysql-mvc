const express = require('express')
const router = express.Router()
const EmployeeController = require('../controllers/employee.controller')

// Definicion de las rutas:

router.get('/',EmployeeController.getEmployeeList)
router.post('/',EmployeeController.createNewEmployee)
router.get('/:id',EmployeeController.getEmployeeById)

module.exports = router