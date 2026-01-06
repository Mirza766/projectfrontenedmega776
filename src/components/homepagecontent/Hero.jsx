import React from 'react'
import { useState} from 'react'
import { lazy } from 'react';
import { ArrowRight } from 'lucide-react';
const OverviewModel=lazy(()=>import('../../models/OverviewModel'));
const PricingModel=lazy(()=>import('../../models/PricingModel'));

function Hero() {


const [overview,setOverviewModal]=useState(false);
const [pricingmodel,setPricingModel]=useState(false);

const closeOverviewModal=()=>setOverviewModal(false);
const closePricingModal=()=>setPricingModel(false);

const handleCloseButtonOverview=(
    <button className='overview-button' onClick={closeOverviewModal}>Close</button>
)
const handleCloseButtonPricing=(
  <button  className='overview-button' onClick={closePricingModal}>Close</button>
)

const mainPricingModel = (
  <PricingModel 
    closePricingModal={closePricingModal} 
    handleCloseButtonPricing={handleCloseButtonPricing}
  >

    <div className=" overflow-hidden rounded-3xl w-full border border-slate-800 bg-slate-950/40 backdrop-blur-xl shadow-2xl max-w-full">
      
     
      <div className="lg:hidden flex flex-col divide-y divide-slate-800">
        {[
          { cat: "Now Showing", price: "800 – 1,200", desc: "Latest movies currently running in theaters.", feat: "Recliner seats, instant booking" },
          { cat: "Coming Soon", price: "1,000 – 1,500", desc: "Pre-book tickets for upcoming releases.", feat: "Early access, pre-release offers" },
          { cat: "Family & Kids", price: "2,800 (4 tix)", desc: "Family-friendly films perfect for all ages.", feat: "Child discounts, weekend offers" },
          { cat: "Private", price: "From 25,000", desc: "Reserve entire theater for private events.", feat: "Private screen, custom playlist" }
        ].map((item, i) => (
          <div key={i} className="p-2 space-y-2 bg-slate-900/20 active:bg-blue-500/10 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-blue-400 font-black uppercase tracking-tighter text-lg">{item.cat}</span>
              <div className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">
                <span className="text-xs font-mono font-bold text-cyan-400">{item.price}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-left leading-relaxed">{item.desc}</p>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 italic">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              {item.feat}
            </div>
          </div>
        ))}
      </div>

   
      <div className=" hidden lg:block w-full overflow-x-auto">
        <table className="w-full  text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/50 border-b border-slate-800">
              {["Category", "Description", "Ticket Price (PKR)", "Special Features"].map((header) => (
                <th key={header} className="px-3 py-2 text-xs font-black uppercase tracking-[0.2em] bg-linear-to-r from-blue-400 via-blue-200 to-cyan-300 text-transparent bg-clip-text whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {[
              { cat: "Now Showing", desc: "Discover the latest movies currently running in theaters near you.", price: "800 – 1,200", feat: "Regular & recliner seats, instant booking" },
              { cat: "Coming Soon", desc: "Stay ahead — preview and pre-book tickets for upcoming releases.", price: "1,000 – 1,500", feat: "Early access booking, pre-release offers" },
              { cat: "Family & Kids", desc: "Enjoy fun, family-friendly films perfect for all age groups.", price: "Pack: 2,800 (4 tix)", feat: "Child discounts, weekend offers" },
              { cat: "Private Screening", desc: "Reserve an entire theater for private screenings or special events.", price: "From 25,000", feat: "Custom playlist, private screen & snacks" }
            ].map((row, i) => (
              <tr key={i} className="group transition-all duration-300 hover:bg-blue-500/5 cursor-default">
                <td className="px-3 py-2">
                  <span className="text-base font-bold text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">{row.cat}</span>
                </td>
                <td className="px-3 py-2">
                  <p className="text-sm text-slate-400 leading-relaxed max-w-xs">{row.desc}</p>
                </td>
                <td className="px-3 py-2">
                  <div className="inline-block px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-blue-500/50 transition-all">
                     <span className="text-sm font-mono font-bold text-cyan-400 whitespace-nowrap">{row.price}</span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors italic">{row.feat}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Decorative Bottom Glow */}
      <div className="h-1 w-full bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </div>
  </PricingModel>
);



const mainOverviewModal=(
<OverviewModel closeOverviewModal={closeOverviewModal} handleCloseButtonOverview={handleCloseButtonOverview}>
    <div className='text-left'>
   <p className='overview-para'>
    <span className='overview-span'>CineWave</span> is a modern, customer-focused movie ticket booking platform that brings the magic of cinema closer to you. Founded with a vision to make movie-going seamless and exciting, CineWave allows users to explore films, view real-time showtimes, and book tickets effortlessly — all from one intuitive app.

Our platform connects movie enthusiasts with theaters across the country, offering a fast, secure, and reliable booking experience. With features like <span  className='overview-span'>smart seat selection, real-time movie schedules, and exclusive offers,</span> CineWave ensures you never miss a show you love.

At CineWave, we believe that booking a movie should be as fun as watching it. That’s why we combine technology, design, and data to deliver a personalized entertainment experience — anytime, anywhere.
   </p>
   </div>

</OverviewModel>)


  return (
    <div className='mt-17 lg:mt-22 w-full max-w-7xl mx-auto text-white p-2'>
      <div>

      <h2 className='h-18 font-bold text-center  text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-linear-to-r from bg-blue-400 via-blue-200  to-cyan-400 bg-clip-text text-transparent mb-3'>
        
“Experience the Future of Movie Booking”
      </h2>
      <p className='text-gray-400 px-3 text-base md:text-lg text-center'>A modern cinematic platform delivering seamless booking, smart insights, and personalized entertainment.</p>
      </div>
      <div className='relative gap-3 flex flex-col md:flex-row md:gap-3 lg:gap-5 px-2 py-2 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:py-6 lg:px-6'>
        
    <div className='w-full max-w-7xl mx-auto flex flex-col mt-5 px-3  rounded-xl backdrop-blur-xl shadow-2xl border border-white/10 bg-white/5  py-3 md:flex-row'>
      <div className='relative w-full bg-linear-to-r from-gray-900/20 to-gray-800/20 backdrop-blur-lg rounded-lg px-6 py-5'>
        <h2 className=' bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent  text-xl font-semibold items-center text-center mb-2'>
            App Features And Highlights
        </h2>
        <div className='flex flex-col gap-2 mb-3 text-gray-300'>
            <div>
           <div className='flex gap-2'>
             <img src="/images/music.png"className='master-img' alt="Now Showing"/>
              <p className='text-white'>Easy Movie Booking</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Book your favorite movie in just a few taps — fast, simple, and secure.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src='/images/star.png' className='master-img' alt="Real-Time Showtimes"/>
              <p className='text-white'>Real-Time Showtimes</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Get live movie schedules from nearby cinemas and pick the best slot for you.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/plus.png"className='master-img' alt="Smart Seat Selection"/>
              <p className='text-white'>Smart Seat Selection</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Choose your perfect seat with an interactive seat map for a personalized experience.
            </p>
           </div>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/data-visualization.png"className='master-img' alt="Exclusive Offers & Discounts"/>
              <p className='text-white'>Exclusive Offers & Discounts</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Enjoy special deals and cashback on your favorite movie tickets.
            </p>
           </div>
        </div>
        <div className=' mt-5 flex sm:flex sm:items-center sm:justify-center'>
         <button onClick={()=>setOverviewModal(true)} className='group flex items-center gap-1 w-full  sm:w-auto justify-center md:w-auto  rounded-lg text-sm sm:text-base md:text-center bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6

                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300 cursor-pointer '>
                      
                    <span>Overview</span>
                   
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   
                   </button>
                    {overview && mainOverviewModal}
                    </div>
        
      </div>
      </div>
       <div className=' w-full max-w-7xl mx-auto flex flex-col mt-5 px-3  rounded-xl backdrop-blur-xl shadow-2xl border border-white/10 bg-white/5  py-3 md:flex-row'>
      <div className='w-full bg-linear-to-r from-gray-900/20 to-gray-800/20 backdrop-blur-lg rounded-lg px-6 py-5'>
      
        <h2 className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent  text-xl font-semibold items-center text-center mb-2'>
            Movie Booking Categories
        </h2>
        <div className='flex flex-col gap-2 mb-3 text-gray-300'>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/game.png"className='master-img' alt="Now Showing"/>
              <p className='text-white'>Now Showing</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Discover the latest movies currently running in theaters near you.
            </p>
           </div>
           <div >
           <div className='img-and-head'>
             <img src='/images/smile.png' className='master-img' alt="Real-Time Showtimes"/>
              <p className='text-white'>Coming Soon</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Stay ahead — preview and pre-book tickets for upcoming releases.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/code.png"className='master-img' alt="Smart Seat Selection"/>
              <p className='text-white'>Family & Kids</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Enjoy fun, family-friendly films perfect for all age groups.
            </p>
           </div>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/data-visualization.png"className='master-img' alt="Exclusive Offers & Discounts"/>
              <p className='text-white'>Private Theater Booking</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
           Reserve an entire theater for private screenings or special events.
            </p>
           </div>
           
        </div>
       
        <div className=' mt-5 flex sm:flex sm:items-center sm:justify-center'>
         <button onClick={()=>setPricingModel(true)} className='group flex items-center gap-1 w-full  sm:w-auto justify-center md:w-auto  rounded-lg text-sm sm:text-base md:text-center bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6 cursor-pointer

                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300  '>
                      
                    <span>Pricing Model</span>
                   
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   
                   </button>
                     {pricingmodel && mainPricingModel}
                    </div>
      
      </div>
      </div>
      </div>
   </div>
  )
}

export default Hero