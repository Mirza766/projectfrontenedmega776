import React from 'react'

import { useRouteError } from 'react-router-dom'

function ErrorBoundary() {
  const error=useRouteError();
  console.log("Error is: ",error);
  
    return (
    <div style={{padding:"2rem", textAlign:'center'}}>
        <h1>Something Went Wrong</h1>
        <p className='text-blue-500 font-bold text-4xl'>{error.statusText || error.message}</p>
       <a href='/'>Go to Home Page</a>
    </div>
  )
}

export default ErrorBoundary