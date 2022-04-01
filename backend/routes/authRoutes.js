const express = require("express");
const router = express.Router();
const loginMiddleware= require('../middleware/loginMiddleware');

router.get('/',loginMiddleware,async(req,res,next)=>{

res.json({
    message:"Success",
    isLoggedIn: true
})


}); 
module.exports=router;