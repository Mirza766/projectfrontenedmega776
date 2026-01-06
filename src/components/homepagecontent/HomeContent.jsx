import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageGrid from './ImageGrid';
import { ArrowRight, Sparkles,Play } from 'lucide-react';
import { cardData,cardDataImg,floatingCards } from './CardSampleData';
import { lazy } from 'react';
import Hero from './Hero';
import Carousel from './Carousel';
import Testimonials from './Testimonials';
import FAQsSection from './FAQsSection';
const SubscriptionContent=lazy(()=>import('./SubscriptionContent'))


function HomeContent() {
    const [mousePosition,setMousePosition]=useState({x:0,y:0});
    const [activeTab,setActiveTab]=useState('TheConjuring')

useEffect(()=>{
    function handlemouseMove(e){
        setMousePosition({x:e.clientX, y:e.clientY});
    }
    window.addEventListener('mousemove',handlemouseMove);
    return ()=>window.removeEventListener('mousemove',handlemouseMove);

},[])

const currentFloatingCard=floatingCards[activeTab]
  return (
    <>
   <section className='relative text-white flex items-center justify-center
    pt-18 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-10 lg:mt-20'>
        <div className='absolute inset-0 opacity-30' style={{
            background:`radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,rgba(59,130,246,0.15),transparent 40%)`
        }}/>
         <div className='absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse '/>
        <div className='absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'/>
        <div className='max-w-7xl mx-auto text-center relative w-full'>
            <div className='max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-12 lg:gap-14 items-center relative'>
              <div>
                <div className='inline-flex items-center px-4 sm:px-6 lg:px-8 space-x-2 rounded-full bg-blue-500/10 border border-blue-500/20 transition-all duration-300 hover:scale-102 mb-4 sm:mb-6 lg:mb-8'>
                  <Sparkles className='w-4 h-4 text-blue-500'/>
                  <span className='text-sm text-blue-400'>Introducing Modern Booking App</span>
                </div>
                <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font font-semibold leading-tight duration-700 delay-100 slide-in-from-bottom mb-2 '>
                  <span className='block bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent'>Book Your Movie in seconds</span>
                  <span className='block bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>AnyWhere, AnyTime</span>
                  <span className='block bg-linear-to-r from-white via-blue-200 to-cyan-100 text-transparent bg-clip-text'>
                    Its Showtime</span>
                </h2>
                <p className='text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200'>Experience effortless movie booking with real-time schedules and instant confirmation.
                Your next show is just a tap away—anywhere, anytime.</p>
                <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300'>
                
                   <button className='group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 cursor-pointer transition-all duration-300  '>
                      <Link to='/search-movie'>
                    <span>Search Movie</span>
                    </Link>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   
                   </button>
                   
                    
                   <button className='flex gap-1 font-semibold items-center justify-center group w-full sm:w-auto px-6 sm:px-8 py-3 bg-white/5 sm:py-4 rounded-lg duration-300 transition-all space-x-2 border border-white/5 hover:bg-white/10 backdrop-blur-sm text-sm cursor-pointer '>
                    
                    <div className='p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors'>
                    <Play className=' w-4 h-4 sm:w-5 sm:h-5 fill-white '/>
                   </div>
                   <Link to='/bookmovie'>
                   <span>Book Ticket</span>
                   </Link>
                   </button>
                   

                   
                   <button className='group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300  '>
                    <Link to='/buy-movie'>
                    <span>Buy Movies</span>
                    </Link>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   </button>
                   {/* </Link> */}

                </div>
              </div>
              <div className='relative order-2 w-full'>
                <div className='relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10'>
                <div className='bg-linear-to-r from-gray-900/20 to-gray-800/20 border rounded-xl overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border-white/5 backdrop-blur-sm'>
                   <div className='flex justify-between items-center  px-3 sm:px-4 md:px-5 py-2 sm:py-3 border-b border-white/10 backdrop-blur-sm'>
                   <p className='font-semibold text-lg text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-blue-200 to-blue-400'>Top Three Movies of the Month</p>

                   <div className='flex flex-row '>
         <img src="https://image.tmdb.org/t/p/w300/qNeV8JtTdsfQCtYcwNCf33hldg8.jpg" className=" w-10 h-10 rounded-full object-cover -ml-1.5" />
         <img src="https://image.tmdb.org/t/p/w300/5aH4DGD9FIwLYhJwbTr7LwaRCSi.jpg" className=" w-10 h-10 rounded-full object-cover -ml-1.5 " />
         <img src="https://image.tmdb.org/t/p/w300/unnGwqWmMAuszJnleyuqZ70MtrT.jpg" className=" w-10 h-10 rounded-full object-cover -ml-1.5" />
        
               </div>
            </div>
            <div className='p-3 sm:p-4 relative h-full'>
                <div className='flex space-x-1 sm:space-x-2 mb-3 overflow-x-auto'>
                    <button
                    onClick={()=>setActiveTab('TheConjuring')}
                    className={`px-3 py-2 backdrop-blur-sm text-xs rounded-t-lg border ${activeTab==="TheConjuring"? "bg-blue-500/30 border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10" } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                    The Conjuring
                    </button>
                    <button
                    onClick={()=>setActiveTab('EchoesofJustice')}
                    className={`px-3 py-2 backdrop-blur-sm text-xs rounded-t-lg border ${activeTab==="EchoesofJustice"? "bg-blue-500/30 border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10" } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                    Echoes of Justice
                    </button>
                    <button
                    onClick={()=>setActiveTab('Titanic')}
                    className={`px-3 py-2 backdrop-blur-sm text-xs rounded-t-lg border ${activeTab==="Titanic"? "bg-blue-500/30 border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10" } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                    Titanic
                    </button>
                </div>
                <div className='flex flex-row gap-2'>
                <div className='w-1/2 items-center justify-center border border-slate-800 
                hover:border-slate-700 shadow-xl hover:shadow-2xl shadow-blue-800/50 rounded-lg'>

                    <img src={cardDataImg[activeTab]} className=' items-center justify-center h-40 sm:h-60 md:h-70 lg:h-70 w-full rounded-lg object-cover  '/>
                </div>
                 <div className='w-1/2 relative overflow-hidden h-60'>
    <p className=' text-gray-400'>
      {
        cardData[activeTab]
      }
      </p>
       
      </div>
      </div>
            </div>                   
                   </div>
                    <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${floatingCards[activeTab].bgColor} backdrop-blur-xl rounded-lg p-4 border-white/20 shadow-2xl`}>
<div className='flex items-center space-x-2 mb-2'>
<div className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}>
    {floatingCards[activeTab].icon}</div>
<span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>{currentFloatingCard.title}</span>
</div>
<div className={`text-sm text-left font-medium ${currentFloatingCard.contentColor}`}>{currentFloatingCard.content}</div>
           </div>
                </div>
              </div>
            </div>
        </div>
    </section>
   <Hero/>
   <SubscriptionContent/>
   <ImageGrid/>
   <Carousel/>
   <FAQsSection/>
   <Testimonials/>
   
    </>
  )
}

export default HomeContent

