const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose= require("mongoose");
const User= require("../models/user");
exports.register= async(req,res,next)=>{

const { username,password,email,name,dob} = req.body;
try { 
    
     const  user = await User.findOne({email :email});
     if(user)
        return res.status(203).json({
         message : "User already exists"
     }) ;

    
 
    const result = await User.create({ 
        
        
        username : username,
        password: password,
        email:email,
        dob:Date(dob),
        name:name


 })  ; 

 if(result){  

     console.log(result); 

     const payload={
        id : result._id,
        username : result.username    


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
const {username,password}= req.body;

try { 
  console.log(username )
 const user =  await User.findOne({username: username }) ; 


  if(user){ 
     
    if(await user.matchPassword(password)){
        const payload={
            id : user._id,
            username : user.username,
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
        



      


     }
    else { 
        console.log("Wrong Password");
    res.status(400).json({error: "Wrong password"});
    
  }
  } 
  else { 
      console.log("wrong Email")
      res.status(400).json({error : "Wrong Username"});
      
  }







    
} catch (error)
{
   return res.status(200).json(error); 
}




}



exports.updatePassword= async(req,res,next)=>{
    const {username, oldPassword , newPassword} =req.body;
    try { 

        const user = await User.findOne({username :username})
           if(user){
            if(await user.matchPassword(oldPassword)){ 

                const update = User.findOneAndUpdate({username :username}, {
                    password : newPassword
                }) 
                if(update){
                    return res.status(200).json({
                        message : "Success"
                    })
                }


            } 
            else 
            return res.status(200).json({
                message:"Password Incorrect"
            })



           }
 

        
    } catch (error) { 
        return res.status(203).json({
            message:'Failed'
        })
      
    }
    
    
    
    
    
    
    }

    