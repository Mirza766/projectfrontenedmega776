import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

function OverviewModel({handleCloseButtonOverview,children,closeOverviewModal}) {

useEffect(()=>{
    document.body.style.overflowY='hidden'
    return ()=>{
        document.body.style.overflowY='scroll'
    }
},[])

    return ReactDOM.createPortal(
        <>
    <div className='portal-root-css px-2 text-sm bg-slate-400-blur bg-linear-to-r from-blue-400 via-blue-200 to-cyan-300 text-transparent bg-clip-text ' onClick={closeOverviewModal}>
       <div className='portal-root-inner-div p-2 sm:p-3 md:p-4 border rounded-lg sm:border-2 border-blue-400  not-first  max-w-xl lg:w-3xl w-full'>
      {children}

       </div>    
    </div>
    </>,
    document.querySelector('.portal-root')
  )
}

export default OverviewModel