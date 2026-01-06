import React, { useEffect } from 'react'
import { getMovieData } from '../../redux/Product/ProductReducers'
import { useDispatch,useSelector } from 'react-redux'
import { productList } from '../../redux/Product/ProductActions'
import { addDataToCart,removeDataFromCart,deleteDataFromCart } from '../../redux/CartData/CartDataActions'
import Header from './Header'
import "../stylingSheets/MovieStore.css";
import BookingPage from '../Subscription/SubscriptionPageDataEntry'
function MovieStore() {


useEffect(()=>{
  dispatch(productList())
},[])


  const dispatch=useDispatch();


const MovieData=useSelector((state)=>state.getMovieData);


  return (

  <div className=' max-w-7xl mx-auto flex flex-col gap-8 mt-10 p-6 justify-center items-center'>
    <Header/>
    <h2 className='text-4xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font font-semibold leading-tight duration-700 delay-100 slide-in-from-left  mb-2 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Buy Your Favourate Movie</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14  rounded-full transition-all delay-200 duration-700  '>
    {MovieData?.map((movie)=>(
      <div key={movie.id} className=' w-full  text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-4 lg:p-2 border border-white/10 shadow-md hover:shadow-lg shadow-blue-400'>
      <div className=' flex flex-col justify-center  gap-3 border-2bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl border border-white/5 rounded-lg h-[660px] md:h-[580px] ' key={movie.id}>
       
      <img className=' w-full rounded-lg overflow-hidden object-cover' src={movie.poster_url}/>

      <div className='p-3 text-white '>
      <h3 className='font-semibold text-2xl text-blue-400'>{movie.title}</h3>
      <p className='text-base bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text '><b>Movie: </b>{movie.release_year}</p>
      <p className='text-base bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'><b>Price: </b>{movie.price}</p>
      </div>
      <div className=' mb-3 flex  flex-col md:flex-row md:px-1  md:text-sm px-6 gap-2'>

      <button className='flex justify-center items-center space-x-3 flex-row  text-center mb-5  py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg font-semibold bg-linear-to-b from-blue-500 to-cyan-500 cursor-pointer text-white w-full' onClick={()=>dispatch(addDataToCart(movie))}>Add to Cart</button>
      <button className='flex justify-center items-center space-x-3 flex-row  text-center mb-5  py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg font-semibold bg-linear-to-b from-blue-500 to-cyan-500 cursor-pointer text-white w-full' onClick={()=>dispatch(deleteDataFromCart(movie))}>Remove from Cart</button>
      </div>
      </div>
      </div>
     
    ))}
    </div>
   <button className='movieproduct-btns-inner' onClick={()=>dispatch(removeDataFromCart())}>Empty Cart</button>
  
  </div>
   
  )
}

export default MovieStore