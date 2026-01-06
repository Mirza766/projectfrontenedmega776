import React from 'react'
import { useCallback } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { Table,TableBody,TableHead,TableCell,TableContainer,TableRow,Paper,Button, Typography } from '@mui/material'

import { LoginFormData } from '../../redux/Login/LoginReducers';
import { deleteLoginData,emptyLoginData } from '../../redux/Login/LogininActions';



const LoginCard=React.memo(({user,onDelete})=>{

console.log('Rendering Login Card',user.id )
    return (

         <TableRow>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.password}</TableCell>
                    <TableCell>
                        <Button variant='contained' color='error' size="small" onClick={()=>onDelete(user.id)} >Delete</Button>
                    </TableCell>
                </TableRow>
       
)
})



function LoginPageDataRetrieval() {
  const dispatch=useDispatch();
  const loggedInUsers=useSelector((state)=>state.LoginFormData);

const DeleteData=useCallback((id)=>dispatch(deleteLoginData(id)),[dispatch]);

    return (
        <>
        
    <TableContainer component={Paper} sx={{maxWidth:"1440px", margin:"auto",mt:6, textAlign:'center',width:'90%', alignContent:'center'}}>
        <Typography variant='h3' sx={{fontWeight:700,marginBottom:3}}>Login Form Data</Typography>
        <Table>
           <TableHead>
            <TableRow>
                <TableCell><b>User ID</b></TableCell>
                <TableCell><b>Email</b></TableCell>
                <TableCell><b>Password</b></TableCell> 
            </TableRow>
           </TableHead>
           <TableBody>
           {
            loggedInUsers.map((user)=>(
                <LoginCard key={user.id} user={user} onDelete={DeleteData} />
            ))
           }
           </TableBody>
        </Table>
        <Button onClick={()=>dispatch(emptyLoginData())} variant='contained' color='error' sx={{mt:4}}>Empty All Records</Button>
    </TableContainer>
    </>
  )
}

export default LoginPageDataRetrieval