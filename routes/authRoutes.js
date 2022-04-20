const express = require("express");
const router = express.Router();
const loginMiddleware= require('../middleware/loginMiddleware');
const jsonwebtoken = require("jsonwebtoken");
router.get('/',async(req,res,next)=>{

    const token = req.headers['x-access-token']?.split(' ')[1];
  
    if(token){
     await  jsonwebtoken.verify(token ,process.env.JWT_SECRET,(error,decoded)=>{
        if(error)
         return  res.status(401).json({ 
           
            isLoggedIn : false , 
            message :"Failed to Authenticate"
          }) ;
      
       const isAdmin= decoded.username.toString().substring(0,5) === "ADMIN" ?true:false ;
       const isStudent= decoded.username.toString().substring(0,1)==="S" && decoded.username.toString().substring(0,2)!="SF"?true:false;
       const isStaff= decoded.username.toString().substring(0,2)==="SF"?true:false;

if(isAdmin&&!isStudent&&!isStaff)
return  res.json({
  userType : "admin",
   message:"Success",
   isLoggedIn: true
})
else if(isStudent&&!isStaff&&!isAdmin)

return  res.json({
  userType : "student",
   message:"Success",
   isLoggedIn: true
}) 
else if(isStaff&&!isAdmin&&!isStudent){ 
  
  return  res.json({
    userType : "staff",
     message:"Success",
     isLoggedIn: true
  })
}

              

        
        
    
    
      })
    } 
    else {
      return  res.status(401).json({message: "Incorrect Token" , isLoggedIn: false})
    }
    






}); 
module.exports=router;