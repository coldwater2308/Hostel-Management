const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose= require("mongoose");
const User= require("../models/user");
exports.register= async(req,res,next)=>{

const { type,email,password} = req.body;
try { 
    
     const  user = await User.findOne({email : email});
     if(user)
        return res.status(203).json({
         message : "User already exists"
     }) ;

    
 
    const result = await User.create({
        userType : type,
        email : email,
        password: password


 })  ;
 if(result){  

     console.log(result); 

     const payload={
        id : result._id,
        email : result.email    


                  } ; 
    await jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {expiresIn:86400},
        (error,token)=>{
            if(error)
                return res.json({message:error});
            return res.json({
                message :"Success",
                token : "Bearer " + token
            });

        }
    )


    
    
    



 } 
 else {
    console.log("error during register"); 
    return  res.status(200).json({
        message : "Failed to Create"
    });
    

 }



    
} catch (error) { 
    
    res.status(200).json(error)
}



} 



exports.login= async(req,res,next)=>{
const {email,password,type}= req.body;

try { 

    const user= await User.findOne({email : email , userType: type}); 


  if(user){
    if(await user.matchPassword(password)){
        const payload={
            id : user._id,
            email : user.email    


                      } ;
        await jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn:86400},
            (error,token)=>{
                if(error)
                    return res.json({message:error});
                return res.json({
                    message :"Success",
                    token : "Bearer " + token
                });

            }
        )
        



        // res.json({message: user.email}) ; 


     }
    else { 
        console.log("Wrong Password");
    res.status(400).json({error: "wrong password"});
    
  }
  } 
  else { 
      console.log("wrong Email")
      res.status(400).json({error : "wrong email"});
      
  }







    
} catch (error)
{
   return res.status(200).json(error); 
}




}