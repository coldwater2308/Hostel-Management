import axios from "axios";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react"; 

import { BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./screen/components/login/login";

import Screen from "./screen/components/home/home"
import { TextField } from "@mui/material";
function App() {   
    
    const login= async(token)=>{
        const user=  await axios.get('/api/auth',{headers: {
            "Content-type" : "application/json" ,
            "x-access-token": token
        }}) ;
        if(user.data && user.data.isLoggedIn===true){
            setIsAuth(true); 
           
        } 
        else
            setIsAuth(false);
    }; 
  
    const [isAuth,setIsAuth]= useState(false); 
    var token = localStorage.getItem("token");

    useEffect(() => { 
        

        console.log(token);
           




        if(token){ 
            console.log(token); 

            login(token); 
    
        } 
        else
            setIsAuth(false);

    
        
      }, []);


    return  (
        <BrowserRouter>
         
            {isAuth ? <Screen/> : <Login/>}
           
        </BrowserRouter>



 );
} 

export default App;
