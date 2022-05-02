























const Admin = require("../models/admin");
const User = require("../models/user"); 
exports.getAdmin= async(req,res,next)=>{
    const email=req.params.email.toString();
try { 
    const admin= await Admin.findOne({email: email})
    if(admin){
        return res.status(200).json({
            message:"Success",
            data: admin
        });

    } 
    else{
        return res.status(203).json({
            message:"Failed"
        })
    }
} catch (error) {
    return res.status(203).json({
            message:"Failed"
        })
}




}
exports.getStudent= async(req,res,next)=>{
    try { 
        const student= await User.find({userType:"student"});
        if(student) 
        console.log(student);
            return res.status(200).json({ 
                message: "Success",
                data : student
            })
        
    } catch (error) {
        res.status(200).json(error);
    }
    
    
    
    
    } 

    exports.putStudent= async(req,res,next)=>{ 
        const id=req.body.id.toString();
        const name = req.body.name.toString();
        const password= req.body.password.toString();
        try { 
            const student= await User.create({
                userType: "student",
                _id:id,
                password:password,
                name: name
            })
            if(student) 
            console.log(student);
                return res.status(200).json({ 
                    message: "Success",
                    data : student
                })
            
        } catch (error) {
            res.status(200).json(error);
        }
        
        
        
        
        } 

        exports.putStaff= async(req,res,next)=>{ 
            const id=req.body.id.toString();
            const name = req.body.name.toString();
            const password= req.body.password.toString();
            try { 
                const staff= await User.create({
                    userType: "staff",
                    _id:id,
                    password:password,
                    name: name
                })
                if(staff) 
                
                    return res.status(200).json({ 
                        message: "Success",
                        data : staff
                    })
                
            } catch (error) {
                res.status(200).json(error);
            }
            
            
            
            
            } 
exports.getStaff= async(req,res,next)=>{
    try { 
        const staff= await User.find({userType:"staff"});
        if(staff) 
        console.log(staff);
            return res.status(200).json({ 
                message: "Success",
                data : staff
            })
        
    } catch (error) {
        res.status(200).json(error);
    }
    
    
    
    
    } 

 