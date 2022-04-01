import React, { useEffect, useState } from 'react' ;


import "./hostels.css";
import { NavLink, Route, Routes } from 'react-router-dom';
import Rooms from '../../../rooms';
import ViewHostels from './viewHostels/viewhostels';


 function Hostels() { 






  return ( 
  <div>  
 




<Routes>
<Route  
        path="/"
        element={<Hostel/>}>
  


        </Route> 
        <Route  
        path="/:gender"
        element={<ViewHostels/>}>
  


        </Route> 
        <Route
        path="/:gender/:hostelName"
        element={<Rooms/>}/> 

{/* 
        <Route
        path="/rooms"
        element={<Rooms/>}/> */}




</Routes>

  

  </div>
    
  );
}
export default Hostels;
 
function Hostel(){



return (



<div className='hostels'>
<NavLink to= "/admin/hostel/boys">
<div id='boys' > 
<span className='icon'> </span>
<span className='title'>Boys Hostel</span>
</div>
</NavLink>
<NavLink to= "/admin/hostel/girls">
<div id='girls' > 
<span className='icon'> </span>
<span className='title'>Girls Hostel</span>
</div> 

</NavLink>
</div>



);


}