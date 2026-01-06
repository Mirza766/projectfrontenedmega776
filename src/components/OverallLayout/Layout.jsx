import React from 'react'
import Header from '../homepagecontent/Header'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Footer from '../homepagecontent/Footer'


function Layout() {


  return (
    <>
    <Header/>
     <Suspense fallback={<h1>Loading.....</h1>}>
    <Outlet/>
</Suspense> 
    <Footer/>
    </>
  )
}

export default Layout