import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

import { useAuth } from '../../AuthContext/AuthContext';
function ProtectedRoute() {
  
  const {isLoggedIn}=useAuth();
  
    return isLoggedIn? <Outlet/>: <Navigate to='/login'/>
}

export default ProtectedRoute