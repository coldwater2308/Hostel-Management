const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');
const loginMiddleware = require('../middleware/loginMiddleware');

router.get('/:id',studentController.getStudent);
router.post('/create',studentController.putStudent);
router.patch('/update/:id',studentController.updateStudent);
router.get('/',studentController.getStudents);  
router.patch('/allot',studentController.allotStudent);

module.exports = router;