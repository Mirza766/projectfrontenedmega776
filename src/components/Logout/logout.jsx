import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useAuth } from '../../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
function Logout() {


    const navigate=useNavigate();
const {logoutUser}=useAuth()

useEffect(()=>{
   logoutUser();
   navigate('/signup')
},[logoutUser])

  return (
    <div>logout</div>
  )
}

export default Logout