import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "../stylingSheets/ContactUsRetrieveData.css";
import { useAuth } from '../../AuthContext/AuthContext';


function BookingDataRetrival() {

const {bookingDetails}=useSelector((state)=>state.MovieBooking);
const {bookingUser}=useAuth();



    return (
       <div className='mt-20 max-w-7xl mx-auto'>
   
      <h2 className='font-bold bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 text-3xl sm:text-4xl text-transparent bg-clip-text md:text-5xl lg:text-6xl  mb-10 mt-10 text-center'>Booked Users Data Bank</h2>
    <div className='text-white px-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
    {
       bookingUser.map((book)=>{
        const TicketPrice=10*book.seats.length;
        return(
          <div key={book._id} className='relative w-full  bg-white/5 backdrop-blur-xl rounded-2xl p-2 sm:p-3  shadow-2xl hover:shadow-blue-400 transition-all delay-100 duration-300 border border-white/10 hover:-translate-y-2'>
      <div  className='w-full  text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10'>
        <p className='cont-retrieve-data-para'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Full Name: </span>{book.name}</p>
        <p className='cont-retrieve-data-para'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Movie: </span>{book.movie}</p> 
        <p className='cont-retrieve-data-para'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Email: </span>{book.email}</p>
        <p className='cont-retrieve-data-para'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Phone Number: </span>{book.phone}</p>
        <p className='cont-retrieve-data-para'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Seats: </span>{book.seats.join(' , ')}</p>
        <p className='cont-retrieve-data-para'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Time: </span>{book.time}</p>
         {/* <p className='cont-retrieve-data-para'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Timestamp: </span> {book.timestamp ? new Date(book.timestamp).toLocaleString() : "-"}{" "}</p> */}
         <p className='cont-retrieve-data-para'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Total Price: </span>${TicketPrice}</p>
        </div>
        </div>
        )
})}
        
   </div>
  </div>
  )
}

export default BookingDataRetrival