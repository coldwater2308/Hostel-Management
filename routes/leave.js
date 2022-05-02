const express = require("express");
const leaveController = require("../controllers/leave");
// const  feeController = require("../controllers/feeController");
// const fileUpload = require("../middleware/fileUpload");
const router = express.Router();
router.get('/leaveRequests',leaveController.getLeaves)
router.get('/leaves/:username',leaveController.getMyLeaves)
router.post('/create',leaveController.createLeave)
router.patch('/update/:leaveId',leaveController.updateLeave)
router.patch('/markStatus/:leaveId',leaveController.patchMarkStatus)
router.get('/delete/leaveId',leaveController.deleteComplaint)
module.exports= router;