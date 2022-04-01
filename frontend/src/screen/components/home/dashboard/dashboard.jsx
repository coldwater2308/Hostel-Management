import React, { useEffect, useState } from "react";

import Rooms from "../../rooms";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import User from "./User/user";
import EditUser from "./User/EditUser/editUser";
import Hostels from "./Hostels/hostels"; 
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Fees from "./Fees/fees";
import Complaints from "./Complaints/complaints";
import Students from "./Students/Students";
function Dashboard (){

return( 
    <div>
<Routes>

<Route path="/" element={<Navigate to="/hostel" />} />

<Route
        path="/hostel/*"
        element={<Hostels/>}
    /> 
    <Route
        path="/fees/*"
        element={<Fees/>}
    /> 
    <Route
        path="users/*"
        element={<User/>}
    /> 
        <Route
        path="students/*"
        element={<Students/>}
    /> 
       <Route
        path="complaints/*"
        element={<Complaints/>}
    /> 



</Routes>
</div>


);

}
// }  

// function Students(){ 
//     const [student, setstudent] = useState([]); 
//     var x =[];
//     useEffect(async() => {
//         try {
//             const students = await axios.get('/api/student');
//             if(students){ 
              

//                 setstudent(students.data.data);
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }, []);  
//     // var ss= student.map((value)=><h1>{value.name}</h1>);
// console.log( student);
    

//     return (

//         <div>

// {/* {ss} */}

// {student.length==0 ? <CircularProgress/> : student.map((value,index)=> <h1 key = {index}>{value.name}</h1>)}
//         </div>


//     );



// }



export default Dashboard; 



