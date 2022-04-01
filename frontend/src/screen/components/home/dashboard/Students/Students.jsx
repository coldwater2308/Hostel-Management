import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./students.css"
export default function Students() {  

const [student, setStudent] = useState([]);

const getStudents= async()=>{

    try {
        const students = await axios.get("/api/student");
        if(students){
              console.log(students.data.data)
              setStudent(students.data.data);
              
        }
        
    } catch (error) {
        console.log(error);
    }

}

useEffect(() => { 


 getStudents(); 



}, [])




  return (
    <div class="students-list"> 


    
    <div class="students">
      <table>
        <thead> 
         
            <tr >
                
               
                <th>Id</th>
                <th>Name</th>
                <th>Hostel</th>
                <th>Room</th>
                <th>Status</th>
                <th>Action</th>
        
            </tr>
       
        </thead> 
        <tbody>





             {
                student.map(s=>(
                    <tr>

<td>{s._id}</td>
<td>{s.name}</td>
<td>{s.hostelName}</td>
<td>{s.roomNo}</td>
<td>Available</td>
<td><Button class="students-allot">Reallot</Button></td>
</tr>
                ))
            } 
           
            
            

          
        </tbody>






      </table>

    </div>

    </div>
    
  )
}
