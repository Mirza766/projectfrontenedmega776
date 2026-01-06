import React, { useState } from 'react'
import { ArrowLeft, ArrowRight,ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom';
import FeedbackForm from './FeedbackDataEntery';
import FeedbackFormDataRetrival from '../FormDataRetrieval/FeedbackFormDataRetrival';
import FeedbackFormAnalyticsSection from './FeedbackAnalyticsSection';
import TeamMembers from './TeamMembers';

function Feedback() {

const [feedbackMenu,setFeedbackMenu]=useState(false);

  return (
    <div 
     id='feed'
      className="
        text-white mt-20 p-8 
        grid gap-8 
        grid-cols-1 
        lg:grid-cols-[2fr_1fr]
        max-w-7xl
        mx-auto
      "
    >
      <div className='relative w-full    bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10 flex flex-col justify-center'>
     
        <h2 className='text-3xl sm:text-3xl text-center md:text-2xl lg:text-2xl xl:text-3xl font font-semibold leading-tight duration-700 delay-100 slide-in-from-top bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text mb-7'>Wants To Give Your Feedback</h2>
        <div className='flex items-center justify-center'>
          <button className='flex justify-center items-center space-x-3 flex-row  w-fit text-center mb-5  py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold bg-linear-to-b from-blue-500 to-cyan-500 cursor-pointer' onClick={()=>setFeedbackMenu((prev)=>!prev)}>
                    {
                        feedbackMenu?(
                              <>
                              <span>Back</span>
                              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                             </>
                           
                           
                        ):(
                         <>
                     <span>Feedback</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                     </>
                        )
                    }
                    
                   </button>
                   </div>
                       {  
                   feedbackMenu?(
                    <div className='flex justify-center'>
                    <div className='w-full max-w-lg'>
                     <FeedbackForm/>
                    </div>
                    </div>
                   ):(
                      null
                   )    
                   }


                   </div>
 
      <div>
       <FeedbackFormAnalyticsSection/>
      </div>
      <div className="lg:col-span-2">
        <FeedbackFormDataRetrival/>
      </div>
      <div className="lg:col-span-2">
       <TeamMembers/>
      </div>
    </div>
  )
}

export default Feedback


