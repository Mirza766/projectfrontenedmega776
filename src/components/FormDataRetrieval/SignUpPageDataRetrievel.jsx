import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, Button, CardActions, Grid, Box, Typography, colors } from '@mui/material';
import { emptySignUpData,deleteSignUpData } from '../../redux/SignUp/SignUpActions';



const SignUpDataCart=React.memo(({user,onDelete})=>{
  console.log('Rendering Contact Card')
  return(
<Grid item xs={12} sm={6} lg={3} key={user.id}>
        <Card  sx={{boxShadow:4,borderRadius:3}}>
          <CardContent sx={{textAlign:'left'}}>
            <Typography variant='h6' gutterBottom>
              <b>User ID: </b>
              {user.id}
            </Typography>
            <Typography variant='body2'>
              <b>Full Name: </b>{user.fullname}
            </Typography>
             <Typography variant='body2'>
              <b>Email: </b>{user.email}
            </Typography>
             <Typography variant='body2'>
              <b>Date of Birth: </b>{user.dob}
            </Typography>
             <Typography variant='body2'>
              <b>City: </b>{user.city}
            </Typography>
             <Typography variant='body2'>
              <b>Phone Number: </b>{user.phoneNumber}
            </Typography>
            <Typography variant='body2'>
              <b>Payment: </b>{user.payment}
            </Typography>
            <Typography variant='body2'>
              <b>Phone Number: </b>{user.timeSlot}
            </Typography>
             <Typography variant='body2'>
              <b>Notifications: </b>
                
                    {user.notifications?.length > 0 
  ? user.notifications.join(' , ') 
  : "No new notifications"}
                    
            </Typography>
             <Button sx={{mt:2}}  fullWidth variant='contained'  onClick={()=>onDelete(user.id)}>Delete</Button>
          </CardContent>
        </Card>
          </Grid>
  )

})




function SignUpPageDataRetrievel() {

  const dispatch = useDispatch();
  const SignUpFormData = useSelector((state) => state.SignUpFormData);
  console.log(SignUpFormData);


const DeleteSignUp=useCallback((id)=>dispatch(deleteSignUpData(id)),[dispatch]);



  return (
    <>
    <Box  textAlign='center' sx={{ padding: 4,marginTop:5, color:'#162f72;', fontWeight:'900',}}>
      <Typography variant='h3' align='center'
      marginBottom={6} sx={{background: 'linear-gradient(to right, #60A5FA, #93C5FD, #67E8F9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}>
        Sign Up Users Data
      </Typography>
      <Grid  justifyContent={'center'}container spacing={3}>
        {
          SignUpFormData.map((user)=>(
          <SignUpDataCart key={user.id} user={user} onDelete={DeleteSignUp}/>
          ))
        }
      </Grid>
     <Button sx={{mt:4}}  variant='contained'  onClick={()=>dispatch(emptySignUpData())}>Empty List</Button>
    
    </Box>
    </>
  );
}

export default SignUpPageDataRetrievel;
