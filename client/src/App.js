import axios from "axios";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./screen/components/login/login";

import Screen from "./screen/components/home/home";
import { TextField } from "@mui/material";
import Admin from "./screen/admin/admin";
export const userContext= createContext();
function App() {
  const [isAdmin, setisAdmin] = useState(undefined); 
  const [user, setUser] = useState(undefined) 
  
  const login = async (token) => {
    const user = await axios.get("/api/auth", {
      headers: {
        "Content-type": "application/json",
        "x-access-token": token,
      },
    });
    if (user.data && user.data.isLoggedIn === true) { 
        console.log(user.data.userType)
      setIsAuth(true);
        setUser(user.data.userType)
    } else setIsAuth(false);
  };

  const [isAuth, setIsAuth] = useState(false);
  var token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      login(token);
    } else setIsAuth(false);
  }, [token]);

  function Check() {
  
    if (isAuth && user==="admin")
      return ( 
        <>
          <Route path="/" element={<Navigate to="/admin" />} />{" "}
          <Route path="/admin/*" element={<Admin />} />{" "}
          <Route path="/*" element={<h1> Error </h1>} />
        </>
      );
    else if (isAuth && user ) {
      
      return (
        <>
          <Route path="/*" element={<Screen />} />{" "}
        </>
      );
    } else {
      return (
        <>
          <Route path="/*" element={<Login isAdmin={false} />} />
          <Route path="/admin/*" element={<Login isAdmin={true} />} />
        </>
      );
    }
  }

  return (
    <BrowserRouter> 
    <userContext.Provider value={[user]} >
      <Routes> {Check()} </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
