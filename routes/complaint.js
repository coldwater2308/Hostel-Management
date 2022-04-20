const express = require("express");
const router = express.Router(); 
const complaintRoutes= require("../controllers/complaints");
router.get('/complaints',complaintRoutes.getComplaints)
router.get('/complaints/:complaintId',complaintRoutes.getComplaint)
router.get('/user/:userId',complaintRoutes.getUserComplaints)
router.post('/create',complaintRoutes.createComplaint)
router.patch('/update/:complaintId',complaintRoutes.updateComplaint)
router.patch('/vpvote/',complaintRoutes.upvote)
router.delete('/delete/:complaintId',complaintRoutes.deleteComplaint)
module.exports= router;