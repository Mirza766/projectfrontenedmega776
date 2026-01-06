import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'react-datepicker/dist/react-datepicker.css';
import {createBrowserRouter,  createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy } from 'react'
import 'remixicon/fonts/remixicon.css';
import FeedbackForm from './components/homepagecontent/FeedbackDataEntery';
import StoryPage from './components/homepagecontent/StoryPage';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import TimeLine from './components/homepagecontent/TimeLine';
import TimelineConnectPage from './components/homepagecontent/TimelineConnectPage';
import TermsAndCondition from './components/homepagecontent/TermsAndCondition';
const SearchMovie=lazy(()=>import('./components/SearchMovie/SearchMovie'))
const HomeContent=lazy(()=>import('./components/homepagecontent/HomeContent'))
const Layout=lazy(()=>import('./components/OverallLayout/Layout'))
const AboutUs=lazy(()=>import('./components/NavbarComponents/AboutUs'))
const ContactUs=lazy(()=>import('./components/NavbarComponents/ContactUs'))
const SignUpPage=lazy(()=>import('./components/NavbarComponents/SignUpPage/SignUpPage'))
const Login=lazy(()=>import('./components/NavbarComponents/Login'))
const ContactUsRetrieveData=lazy(()=>import('./components/FormDataRetrieval/ContactUsRetrieveData'));
const EditData=lazy(()=>import('./components/FormDataRetrieval/EditData'))
const SignUpPageDataRetrievel=lazy(()=>import('./components/FormDataRetrieval/SignUpPageDataRetrievel'))
const LoginPageDataRetrieval=lazy(()=>import('./components/FormDataRetrieval/LoginPageDataRetrieval'))
const MovieStore=lazy(()=>import('./components/MovieStore/MovieStore'))
const MovieCart=lazy(()=>import('./components/MovieStore/MovieCart'))
const SubscriptionPage=lazy(()=>import('./components/Subscription/SubscriptionPageDataEntry'))
const SubscriptionDataRetrieval=lazy(()=>import('./components/FormDataRetrieval/SubscriptionPageDataRetrieval'))
const BookingPage=lazy(()=>import('./components/Booking/BookingPage'));
const BookingDataRetrival=lazy(()=>import('./components/FormDataRetrieval/BookingDataRetrival'))
const Feedback=lazy(()=>import('./components/homepagecontent/Feedback'))
import ProtectedRoute from './components/routes/ProtectedRoute';
import Logout from './components/Logout/logout';
import GetOrderConfirmedData from './components/MovieStore/GetOrderConfirmedData';
import CallBookingData from './components/FormDataRetrieval/CallBookingData';
import ContactUsDatabase from './components/FormDataRetrieval/ContactUsDatabase';
import GetSubscriptionDatabase from './components/FormDataRetrieval/getSubscriptionDatabase';
import 'react-toastify/dist/ReactToastify.css';
import Error404 from './components/homepagecontent/Error404';
import AdminLayout from './components/layouts/AdminLayout';
import AdminUsers from './components/layouts/AdminUsers';
import AdminContacts from './components/layouts/AdminContacts';
import AdminCallBookings from './components/layouts/AdminCallBookings';
import AdminOrders from './components/layouts/AdminOrders';
import AdminUpdate from './components/layouts/AdminUpdate';
import AdminContactEditForm from './components/layouts/AdminContactUpdate';
import AdminTickets from './components/layouts/AdminTickets';
import AdminTicketsData from './components/layouts/AdminTicketsData';
import AdminCallBookingData from './components/layouts/AdminCallBookingData';
import AdminOrdersUpdate from './components/layouts/AdminOrdersUpdate';
import AdminSubscriptions from './components/layouts/AdminSubscription';
import AdminSubscriptionUpdate from './components/layouts/AdminSubscriptionUpdate';

function App() {


const queryclient=new QueryClient();
  const router=createBrowserRouter(
    createRoutesFromElements(
      <> 
   <Route element={<Layout/>} errorElement={<ErrorBoundary/>}>
    <Route path='/signup' element={<SignUpPage/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/login' element={<Login/>} errorElement={<ErrorBoundary/>}/>



     <Route element={<ProtectedRoute/>}>
 <Route path='/' element={<HomeContent/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/about' element={<AboutUs/> } errorElement={<ErrorBoundary/>}/>
    <Route path='/contact' element={<ContactUs/>} errorElement={<ErrorBoundary/>}/>
     
     <Route path='/contactusdata' element={<ContactUsRetrieveData/>}/>
     <Route path='/contactusedit/:id' element={<EditData/>} errorElement={<ErrorBoundary/>}/>
     <Route path='/signUpPage' element={<SignUpPageDataRetrievel/>}/>
     <Route path='/loginPage' element={<LoginPageDataRetrieval/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/search-movie' element={<SearchMovie/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/buy-movie' element={<MovieStore/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/cartData' element={<MovieCart/>} errorElement={<ErrorBoundary/>}/>
   <Route path='/subscpage' element={<SubscriptionPage/>} errorElement={<ErrorBoundary/>}/>
   <Route path='bookmovie' element={<BookingPage/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/dataentrycont' element={<SubscriptionDataRetrieval/>} errorElement={<ErrorBoundary/>}/>
   <Route path='/bookDataRetrieve' element={<BookingDataRetrival/>} errorElement={<ErrorBoundary/>}/>
   <Route path='/feedback' element={<Feedback/>} errorElement={<ErrorBoundary/>}/>
  <Route path='/feedbackdataenter' element={<FeedbackForm/>}/>
  <Route path='/timeline' element={<TimeLine/>}/>
   <Route path='/story' element={<StoryPage/>}/>
  <Route path='/connectpage/:id' element={<TimelineConnectPage/>}/>
  <Route path='/termandcond' element={<TermsAndCondition/>}/>
  <Route path='/logout' element={<Logout/>}/>
  <Route path='/getorderconfirm' element={<GetOrderConfirmedData/>}/>
  <Route path='/getcallbooking' element={<CallBookingData/>}/> 
  <Route path='/contactDatabase' element={<ContactUsDatabase/>}/>
   <Route path='/getSubsc' element={<GetSubscriptionDatabase/>}/>
   <Route path='*' element={<Error404/>}/>
   <Route path='/admin' element={<AdminLayout/>}>
   <Route path='users' element={<AdminUsers/>}/>
   <Route path='contacts' element={<AdminContacts/>}/>
   <Route path='tickets' element={<AdminTickets/>}/>
   <Route path='callbookings' element={<AdminCallBookings/>}/>
   <Route path='orders' element={<AdminOrders/>}/>
   <Route path='subscription' element={<AdminSubscriptions/>}/>  
   <Route path='users/:id/edit' element={<AdminUpdate/>}/>
   <Route path='contacts/:id/edit' element={<AdminContactEditForm/>}/>
   <Route path='tickets/:id/edit' element={<AdminTicketsData/>}/>
   <Route path='callbookings/:id/edit' element={<AdminCallBookingData/>}/>
    <Route path='orders/:id/edit' element={<AdminOrdersUpdate/>}/>
    <Route path='subscriptions/:id/edit' element={<AdminSubscriptionUpdate/>}/>
   </Route>
  
    </Route>
    </Route>
   
      </>
    )
  )



  return (
    <QueryClientProvider client={queryclient}>

   <RouterProvider  router={router}/>
    </QueryClientProvider>
  )
}

// function wait(time){
//   return new Promise(resolve=>{
//     setTimeout(resolve,time)
//   })
// }

export default App
