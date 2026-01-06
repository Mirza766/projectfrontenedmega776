import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'


function NavBarMenuModal({closeMenuButton,children,handleCloseMenuButton}) {
  // useEffect(()=>{
  //    document.body.style.overflowY='hidden'
  //    return ()=>{
  //  document.body.style.overflowY='scroll'
  //    }
  // },[])
  
    return ReactDOM.createPortal(
    <>
    <div className='fixed inset-0 w-full max-w-7xl mx-auto h-full flex justify-end bg-transparent z-1500 cursor-pointer' onClick={closeMenuButton}>
        
          {children}
        
    
    </div>
    </>,
     document.querySelector('.portal-root')
  )
}

export default NavBarMenuModal