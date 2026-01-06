import React from 'react'
import ReactDOM from 'react-dom'


function SideBarMenuModel({children, handleCloseSideBarButton,closeSideBar}) {
  return ReactDOM.createPortal(
    <>
    <div className='sidebarMenuCont' onClick={closeSideBar} >
        <div className='absolute z-2000 left-0 top-15  animate-in slide-in-from-left duration-700 delay-200 flex flex-col space-y-2 bg-slate-950/30 rounded-r-lg
        border-gray-500/20 hover:border-gray-500/30  border h-full hover:shadow-lg shadow-blue-500 backdrop-blur-lg' onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
    </>,
    document.querySelector('.portal-root')
  )
}

export default SideBarMenuModel