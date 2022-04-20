import React, { useEffect, useState } from 'react' 
import "./complaints.css"
import { Backdrop, Button, Card, CardActions, CardContent, CardMedia, Fade, IconButton, Modal, Snackbar, StepButton, tableBodyClasses, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from 'axios';
import { Add } from '@material-ui/icons'; 
import "./complaintModel.css"
export default function ComplaintsPage() {  
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24, 
        p: 4,
      };   
const getComplaints = async()=>{


try { 
    const c= await axios.get('/api/complaint/complaints');
    if(c&&c.data.message=="Success"){
        setcomplaint(c.data.data);
        console.log(c.data.data);
    }
  
    
} catch (error) {
   console.log(error) ;
}


}
useEffect(async() => {
   await getComplaints();
}, [])



async function handleSubmit(){
 
    try {
        const complaint = await axios.post('/api/complaint/create',{

     userId : id,
     type: type,
     body:body,
     title:title



        }
        )
        if(complaint){
            console.log("success "+ complaint.data.data ); 
            await getComplaints();
            handleClose();
        }
        
    } catch (error) {
        console.log(error)
    }


}


 const [id, setid] = useState("119cs034")
 const [type, settype] = useState("hostel room")
 const [title, settitle] = useState("")
 const [body, setbody] = useState("")
 const [complaint, setcomplaint] = useState([]);
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
  return (
    <div>
    <h1>Complaints</h1>
    <div class="complaint-container"> 
      

   <div class="complaints"> 


{complaint.map((value)=> (

<div className='complaint'>
  <Card  className = "complaint-card" sx={{ maxWidth: 800 }}>
    <h4 className='type'>Type : {value.type}</h4>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {value.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {value.complainBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Vote</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>


))}










    <IconButton >
    <Button
    className="add-complaint" onClick={handleOpen}> <Add/>
    </Button>
   
    {/* <button </button>  */}
    </IconButton>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      > 
        <Fade in={open}> 
        <div >
          <Box sx={style}>
          <h1>Add a Complaint</h1>
   <div class="create-container">


<div class="create-complaints">

<input type="text"  name="title" placeholder="Title" class="text" id="complaint-title" onChange={(value)=>settitle(value)}></input> 
<textarea name="complaint" id="complaint-body"  placeholder="Complaint" class="text area" onChange={(value)=>setbody(value)}></textarea>

<input type="file"  class="" id="complaint-inmageimages"></input>



<button onClick={handleSubmit} class="submit" > Submit</button>
</div>




   </div>

   
            

            

          </Box> 
          </div>
        </Fade>
      </Modal>
</div>
   </div>


</div>  
  )
}
