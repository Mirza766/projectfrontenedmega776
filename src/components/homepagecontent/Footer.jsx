import React from 'react'
import "../stylingSheets/Footer.css";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <section className=' mt-20 flex flex-col justify-center mx-auto max-w-7xl '>
        <div className='footer-cont max-w-7xl border-t border-gray-400 md:space-x-40 lg:space-x-0  '>
            <div className='foot-left lg:mr-30'>
                <div className='foot-img-cont'>
            <div className='flex items-center  gap-2 foot-img-div'>
              
              <img className='cine-img' style={{height:'50px',
                width:'50px' 
              }} src='/logo.png' alt='foot-img'/>
               <h2 className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold text-xl'>CineWave</h2>
            </div>
            <div className='foot-left-cont'>
                <p className='inside-cont'>
   Dive into the world of movies like never before with seamless booking, premium plans, and exclusive cinematic waves of entertainment.
From the latest blockbusters to hidden gems — CineWave brings the silver screen closer to you, one click at a time!
</p>
            </div>
            </div>
            <div className='foot-logos'>
         
            </div>
             </div>
             <div className='grid grid-cols-2 lg:grid-cols-3 text-left gap-0  justify-between w-full'>
                <div className='foot-right'>  
                <div className='foot-right-heading'>
                    Pages
                </div>
                <div className='footer-links'>
                   <Link className='footer-links' to='/about'>About</Link>
                   <a href='#pricing' className='footer-links' to='/head-side'>Pricing</a>
                   <Link className='footer-links' to='/contact'>Contact</Link>
                </div>
             </div>

              <div className='foot-right'>  
                <div className='foot-right-heading'>
                    Help
                </div>
                <div className='footer-links'>
                   <Link to='/timeline' className='footer-links'>Customer Support</Link>
                   <Link to='/termandcond' className='footer-links'>Terms and Conditions</Link>
                   <Link className='footer-links' to='/feedback'>Feedback</Link>
                </div>
             </div>

              <div className='foot-right '>  
                <div className='foot-right-heading'>
                    Contact
                </div>
                <div className='footer-links'>
                   <Link to='/contact' className='footer-links' >Get in Touch</Link>
                   <a href='#faqs' className='footer-links'>Explore Questions</a>
                   <a href='#feed' className='footer-links' to='/contact'>Complains</a>
                </div>
             </div>
             </div>
        </div>
        <div className='bg-slate-900/50 text-gray-200 py-5 px-6 border-t  border-gray-300'>
        <div className='max-w-7xl mx-auto'>
         © 2025 CineWave. All rights reserved.
        </div>
        </div>
    </section>
  )
}

export default Footer