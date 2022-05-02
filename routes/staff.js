const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staff')

router.get('/getstaff/:userid',staffController.getStaff);

router.patch('/update/:id',staffController.updateStaff);
router.get('/',staffController.getStaffs);  
router.get('/check/:email',staffController.checkStaff);
module.exports = router;