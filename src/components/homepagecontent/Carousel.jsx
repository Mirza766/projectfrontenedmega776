import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
function Carousel() {
  return (
    <div className='text-white mt-25 flex flex-col'>
     <div className=' mb-6 flex flex-col space-y-2 sm:space-y-3 md:space-y-4 justify-center items-center'>
         <h2 className='text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font font-semibold leading-tight duration-700 delay-100 slide-in-from-bottom  block bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Wants to Give Your Feedback</h2>
         <div className='flex flex-row gap-4 w-full px-4 justify-center'>
           <button className='group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                    sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300  '>
                <Link to='/feedback'>
                    <span>Give Feedback</span>
                 </Link>
                 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                </button>

                  <button className='group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                    sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300  '>
                <Link to='/timeline'>
                    <span>Timeline</span>
                 </Link>
                 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                </button>
                </div>
     </div>
   
    <div className=' mt-5 p-2'>
    <div
      className="   slider"
      style={{
        "--width": "200px",
        "--height": "300px",
        "--quantity":"10"
      }}
    >
      <div className="list">
        <div className="item border rounded-lg" style={{"--position":"1"}}><img  src="https://image.tmdb.org/t/p/w300/7JzOmJ1fIU43I3gLHYsY8UzNzjG.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"2"}}><img src="https://image.tmdb.org/t/p/w300/nv1sdEx7DBjguoEovgiOyuSpSxh.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"3"}}><img src="https://image.tmdb.org/t/p/w300/itAKcobTYGpYT8Phwjd8c9hleTo.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"4"}}><img src="https://image.tmdb.org/t/p/w300/zYIVygrrdD9lqmXdjuoyehnF1ae.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"5"}}><img src="https://image.tmdb.org/t/p/w300/a8jmJPs5eZBARmnuEEvZwbjwyz4.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"6"}}><img src="https://image.tmdb.org/t/p/w300/dgbLnnEJIGldXOMt6OWy3X1l0AC.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"7"}}><img src="https://image.tmdb.org/t/p/w300/c7n1fZuUMeEVspvzOrIUCz4XdCe.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"8"}}><img src="https://image.tmdb.org/t/p/w300/1D3y4by7gJ9X2eowG8NpBt0cPIj.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"9"}}><img src="https://image.tmdb.org/t/p/w300/qNeV8JtTdsfQCtYcwNCf33hldg8.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"10"}}><img src="https://image.tmdb.org/t/p/w300/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" /></div>
       
      </div>
    </div>
    </div>
     </div>
  )
}

export default Carousel