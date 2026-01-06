import React, { Children } from 'react'
import ReactDOM from 'react-dom'


function NavContentMenu({handleCloseNavContent,children,closeNavContent}) {
  return ReactDOM.createPortal(
    <>
   
    <div className='sidebarMenuCont' onClick={closeNavContent}>
        <div className='sidebarmastercont'>
      {children}
     
        </div>
    </div>
     </>,document.querySelector('.portal-root')
  )
}

export default NavContentMenu