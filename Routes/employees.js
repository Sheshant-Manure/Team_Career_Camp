const express =require('express');
const router = express.Router();
const employeesController = require('../Controllers/employees_controller');

// Routes- 127.0.0.1:8000/employees will be handled below 
router.post('/create-account', employeesController.createAccount); // This action is sent to the controller when url request is 127.0.0.1:8000/employees/create-account
router.post('/sign-in', employeesController.signIn); 
router.get('/sign-in', employeesController.signInGetRequest); 
router.get('/sign-out', employeesController.signOut)

module.exports = router;