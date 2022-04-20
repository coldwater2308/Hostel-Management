const express = require('express');
const loginMiddleware= require('../middleware/loginMiddleware')
const router = express.Router();

const adminController = require('../controllers/adminController');
router.get('/:email',adminController.getAdmin);  
router.get('/staff',adminController.getStaff)
router.post('/addStudent',adminController.putStudent); 
router.post('/addStaff',adminController.putStaff); 
router.get('/student',adminController.getStudent);  
router.get('/staff',adminController.getStaff)

module.exports = router;