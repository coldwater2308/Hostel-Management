import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import './viewhostels.css'
function ViewHostels() {   
 const params =useParams();
   const navigate = useNavigate();
        let name =[];
    const [x, setx] = useState([])
    const token = localStorage.getItem("token");
        async function hostelapi(){ 
         
            
         
          try { 
    
            const result = await axios.get('/api/hostel/',{headers: {
                "Content-type" : "application/json" ,
                "x-access-token": token
            }}); 
            if(result.data.message=="Success"){
               
              console.log(result.data.data)
              for(let i=0;i<result.data.data.length;i++){
                  name.push(result.data.data[i]);
               
              }
              setx(name);  
                 
                console.log(name);
                
            
            }
            
            else 
            console.log(result.data.message);
              
          } catch (error) {
              console.log(error);
          }
    
    
        }
    
    useEffect(() => { 
      let isMounted = true;   
    hostelapi();  
    
    return () => { isMounted = false };
    },[token]) 


    
  return ( 




    <div class="hostel-list">


{ (x.length==0)?<CircularProgress/> :  x.map((value,index)=> 
            <div class="hostel" >


    <div class="child" onClick={()=>navigate('/admin/hostel/'+params.gender +'/' + value.name )}>
    { index + " " +value.name}    
    </div>


    

        
</div> 
) 



}  
<div class="hostel">


<div class="child">
 + Add Hostel
</div>




        
</div>






    </div>



//  <div style={{width:"100%"}}>
// <div style={{ display:"grid",gridAutoColumns: "50px"
//     }}>
//  { (x.length==0)?<CircularProgress/> :  x.map((value,index)=>
 
 


// <div style={{height: "200px",width:"200px", textAlign: "center",  backgroundImage: "linear-gradient(45deg, rgb(10, 250, 238), rgb(94, 94, 241))"}}> 
// <button onClick={()=>navigate('/admin/hostel/'+params.gender +'/' + value.name )}>{index + ". "+ value.name }</button>
 
// </div> 



 
 
 
 
// )

//   } 
//   </div>



  );
}

export default ViewHostels;