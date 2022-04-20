import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"
function Home() { 
    const navigate=useNavigate();
  return (
    <div className='home'>

<div className='staff' onClick={()=>{navigate("/admin/staff")}}> Total Staff Added : 5656</div>
<div className='student' onClick={()=>{navigate("/admin/students")}}>Total Staff Added : 5656</div>

    </div>
  )
}

export default Home