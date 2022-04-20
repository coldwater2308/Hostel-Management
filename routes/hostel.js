const express = require('express');
const loginMiddleware= require('../middleware/loginMiddleware')
const router = express.Router();

const hostelController = require('../controllers/hostel');

router.post('/create',hostelController.createHostel); 
router.get('/',hostelController.getAllHostels); 
router.get('/:hostelName',hostelController.getHostel);  
router.patch('/update/:hostelName',hostelController.updateHostel)

module.exports = router;