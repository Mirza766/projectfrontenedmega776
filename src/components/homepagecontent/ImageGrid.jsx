import React from 'react'
import "../stylingSheets/ImageGrid.css";
import { lazy } from 'react';
import { Link } from 'react-router-dom';
function ImageGrid() {
  return (
    <section className='max-w-7xl mx-auto Image-Container '>
        <div className='container1'>
            <div className='img-head-desc'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl  lg:text-5xl h-16 sm:h-19  text-center bg-linear-to-b from-blue-400 via-gray-400 to-cyan-400 bg-clip-text text-transparent font-bold'>Experience the Magic on the Big Screen</h2>
            <p className='text-base text-gray-300'>Step into the world of cinema — browse the latest blockbusters, fan favorites, and hidden gems.</p>
             </div>

             <div className='img-grid flex flex-col gap-4 '>
             
              
           <Link className='img-items item-1 hover:shadow-lg cursor-pointer  shadow-blue-400 backdrop-blur-lg duration-100 delay-100 transition-all rounded-lg border-gray-500/20 hover:border-gray-500/30' to='/story'>
                 <img src='/images/boston-public-library-b45fD241t-s-unsplash.jpg'  alt='<asonry Image 1'/>   
            </Link>
              
              

            
               
          <Link className='img-items item-2 img-items item-1 hover:shadow-lg cursor-pointer  shadow-blue-400 backdrop-blur-lg duration-100 delay-100 transition-all  rounded-lg
        border-gray-500/20 hover:border-gray-500/30' to='/story'>
                 <img src='/images/boston-public-library-plrJC7PQkKc-unsplash.jpg'  alt='<asonry Image 1'/>
          </Link>

               
                 
              
          <Link className='img-items item-3 img-items item-1 hover:shadow-lg cursor-pointer  shadow-blue-400 backdrop-blur-lg duration-100 delay-100 transition-all  rounded-lg
        border-gray-500/20 hover:border-gray-500/30' to='/story'>
                 <img src='/images/jeet-dhanoa-tGHkC5ntUGc-unsplash.jpg'  alt='<asonry Image 1'/>    
            </Link>
            
               

               <Link className='img-items item-4 img-items item-1 hover:shadow-lg cursor-pointer  shadow-blue-400 backdrop-blur-lg duration-100 delay-100 transition-all  rounded-lg
        border-gray-500/20 hover:border-gray-500/30' to='/story'>       
                 <img src='/images/jenya-shportyak-PKU-DYHHi54-unsplash.jpg'  alt='<asonry Image 1'/>
               </Link>

                <Link className='img-items item-5 img-items item-1 hover:shadow-lg cursor-pointer  shadow-blue-400 backdrop-blur-lg duration-100 delay-100 transition-all  rounded-lg
        border-gray-500/20 hover:border-gray-500/30' to='/story'>  
                 <img src='/images/6604188.jpg'  alt='<asonry Image 1'/>
               </Link>

                <Link className='img-items item-6 img-items item-1 hover:shadow-lg cursor-pointer  shadow-blue-400 backdrop-blur-lg duration-100 delay-100 transition-all  rounded-lg
        border-gray-500/20 hover:border-gray-500/30' to='/story'>       
                <img src='/images/sung-jin-cho--Er7Hzoe-Pk-unsplash.jpg'  alt='<asonry Image 1'/>     
               </Link>

               <Link className='img-items item-7 img-items item-1 hover:shadow-lg cursor-pointer  shadow-blue-400 backdrop-blur-lg duration-100 delay-100 transition-all  rounded-lg
        border-gray-500/20 hover:border-gray-500/30' to='/story'>
              
                 <img src='/images/avg.jpg'  alt='<asonry Image 1'/>
             
               </Link>
             </div>
         

        </div>
    </section>
  )
}

export default ImageGrid


