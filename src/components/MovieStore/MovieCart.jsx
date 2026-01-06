
import React from 'react'
import "../stylingSheets/MovieCart.css";
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '../../AuthContext/AuthContext';
import { removeDataFromCart } from '../../redux/CartData/CartDataActions';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function MovieCart() {
  const dispatch = useDispatch();
  const { user, getCartData } = useAuth();
  const MovieCartData = useSelector((state) => state.getCartData);

  const saveCartToDb = async () => {
    try {
      const orderData = {
        name: user.fullname,
        email: user.email,
        userId: user._id,
        items: MovieCartData,
      }
      const response = await fetch('https://megaprojectmoviebookingapp-1.onrender.com/api/cart/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(orderData)
      });
      const result = await response.json();
      if (response.ok) {
        await getCartData();
        toast.success(`Order successful! ID: ${result._id}`);
        dispatch(removeDataFromCart());
      } else {
        toast.error(result.msg ? result.msg : "No Items Selected");
      }
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }


  const TotalLength = MovieCartData.length;
  const subtotal = MovieCartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = MovieCartData.reduce((sum, item) => {
    return item.quantity >= 3 ? sum + (item.price * item.quantity * 0.1) : sum;
  }, 0);
  const tax = ((subtotal - discount) * 0.02);
  const finalTotal = subtotal - discount + tax;

  return (
    <section className='max-w-7xl mx-auto mt-20 px-4 mb-20'>
      <div className='flex flex-col items-center'>
        <h2 className='text-center mb-4 bg-linear-to-r from-blue-400 to-cyan-400 text-transparent font-bold bg-clip-text text-3xl md:text-5xl'>
          Your Movie Cart
        </h2>
        <p className='text-gray-300 font-medium text-lg mb-10'>
          You have <span className='text-blue-400 font-bold'>{TotalLength} items</span> ready for checkout.
        </p>

        <div className='w-full flex flex-col lg:flex-row gap-10 items-start'>
          
          <div className='w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {MovieCartData?.map((movie) => (
              <div key={movie.id} className='flex bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group'>
           
                <div className='w-1/3 overflow-hidden'>
                  <img 
                    src={movie.poster_url} 
                    alt={movie.title} 
                    className='h-full w-full object-cover  transition-transform duration-500'
                  />
                </div>
                
          
                <div className='w-2/3 p-4 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-white font-bold text-lg truncate'>{movie.title}</h3>
                    <div className='flex gap-2 mt-1'>
                      <span className='text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30'>
                        {movie.language}
                      </span>
                      <span className='text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full border border-red-500/30'>
                        {movie.duration_minutes} min
                      </span>
                    </div>
                  </div>

                  <div className='mt-4 flex justify-between items-end'>
                    <div>
                      <p className='text-gray-400 text-xs'>Qty: {movie.quantity}</p>
                      <p className='text-green-400 font-bold text-xl'>${movie.price}</p>
                    </div>
                    <p className='text-gray-500 text-xs mb-1'>{movie.release_year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className='w-full lg:w-1/3 sticky top-24'>
            <div className='bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl'>
              <h2 className='text-xl font-bold text-white mb-6 border-b border-white/10 pb-4'>Price Summary</h2>
              
              <div className='space-y-4'>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Sub Total</span>
                  <span className='text-white'>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Discount (10% for 3+)</span>
                  <span className='text-green-500'>-${discount.toFixed(2)}</span>
                </div>

                <div className='flex justify-between'>
                  <span className='text-gray-400'>Estimated Tax (2%)</span>
                  <span className='text-rose-500'>+${tax.toFixed(2)}</span>
                </div>

                <div className='pt-4 border-t border-white/10 flex justify-between items-center'>
                  <span className='text-lg font-bold text-white'>Final Total</span>
                  <span className='text-2xl font-bold text-blue-400'>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className='mt-8 flex flex-col gap-3'>
                <button 
                  onClick={saveCartToDb}
                  className="w-full py-4 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all shadow-lg active:scale-95"
                >
                  Proceed to Checkout
                </button>
                <Link to='/getorderconfirm' className='w-full'>
                  <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-gray-300 font-semibold rounded-xl border border-white/10 transition-all">
                    See Your Orders
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MovieCart;