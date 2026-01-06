import { Checkbox } from '@mui/material'
import { LockKeyholeIcon,ArrowRight, LockKeyholeOpenIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
function TermsAndCondition() {
const navigate=useNavigate();
const [agree,setAgree]=useState(false);
const [check,setCheck]=useState(() => {
    const saved = localStorage.getItem('termsAccepted');
    return saved === 'true'});


const handleSubmit=(e)=>{
e.preventDefault();
setAgree(true);
setTimeout(() => navigate('/'), 1000);
}

useEffect(()=>{
  localStorage.setItem('termsAccepted',check);
},[check])


  return (
    <section className='flex flex-col px-5 items-center justify-center mt-20 max-w-7xl mx-auto'>
     <div className=' border w-[560]px sm:w-xl md:w-2xl lg:w-4xl   border-white/5 rounded-xl flex flex-col items-center justify-center '> 
     <div className='border-b w-full rounded-t-lg bg-slate-800/70 border-slate-800 py-2 px-4'>   
        <h2 className='text-white  bg-clip-text sm:text-2xl md:text-3xl  font-bold items-center flex justify-center'>Terms And Conditions</h2>
       </div> 
       <div className='pt-6 flex w-full bg-white flex-col justify-center items-center '>
        {
            check?
            (
             <LockKeyholeOpenIcon className='text-amber-400' size={70} />
            )
            :
            (
            <LockKeyholeIcon className='text-amber-400' size={70}/>
            )
        }
        
        <p className='font-bold mt-2 text-slate-900 text-2xl sm:text-3xl md:text-4xl '>Welcome to CineWave</p>
        </div>
       <div className='pt-8 p-5 bg-white w-full items-left gap-2 flex flex-col border-b rounded-b-xl'>
        <div>
            <h2 className='font-bold mt-2 text-slate-900 text-xl '>1. Acceptance of Terms</h2>
            <p className='text-slate-700'>By accessing or using this application, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use the app. We reserve the right to update or modify these terms at any time. Continued use of the app indicates acceptance of the revised terms.</p>
       </div>

          <div>
            <h2 className='font-bold mt-2 text-slate-900 text-xl '>2. Use of App</h2>
            <p className='text-slate-700'>The app is intended for personal and lawful use only. Users must not misuse the app by attempting unauthorized access, disrupting services, or violating applicable laws. You are responsible for maintaining the confidentiality of your account information. Any misuse may result in suspension or termination of access.</p>
       </div>
         <div>
            <h2 className='font-bold mt-2 text-slate-900 text-xl '>3. Distribution</h2>
            <p className='text-slate-700'>All content, features, and services available in the app are protected by intellectual property laws. Users are not permitted to copy, modify, distribute, or resell any part of the app without prior written consent. Unauthorized distribution may lead to legal action. Limited permissions may be granted only where explicitly stated.</p>
       </div>
      
            <ul className="mt-2 list-disc list-inside text-slate-900">
  <li className="font-slate-900 list-none font-bold text-xl ">
    1. Ticket Purchase
  </li>

  <li className="text-slate-700">
    Tickets are subject to availability and confirmation of payment.
  </li>

  <li className="text-slate-700">
    Prices shown include applicable taxes unless stated otherwise.
  </li>

  <li className="text-slate-700">
    Tickets purchased through the app are valid only for the selected event, date, and time.
  </li>

  <li className="text-slate-700">
    Once purchased, tickets cannot be modified unless permitted by the event organizer.
  </li>
</ul>
<form onSubmit={handleSubmit} >
<div className='flex flex-row mt-4 gap-2 '>
<input type='checkbox' checked={check} onChange={(e)=>setCheck(e.target.checked)} className='border-2 border-slate-800'/>
<p className='text-bold text-md font-bold'>I Agree the terms and Conditions</p>
</div>   
<div className='text-center justify-center flex'>
 <button type='submit' disabled={!check} className={`text-center justify-center ${!check?"opacity-50 cursor-not-allowed":""} group mt-6 flex items-center gap-1 w-full  sm:w-auto rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 cursor-pointer transition-all duration-300`}>
                    <span>Agree and Continue</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   
                   </button>
                   </div>
                      </form>
       </div>
     </div>
    </section>
  )
}

export default TermsAndCondition