import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext';

function GetOrderConfirmedData() {
    const { cartData } = useAuth();

   
    if (!cartData || cartData.length === 0) {
        return <div className="text-white text-center p-10">No orders found.</div>;
    }

    return (
        <div className='text-white p-4 mt-15'>
            <h2 className="font-bold text-md sm:text-xl md:text-2xl lg:text-4xl lg:h-14 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text mb-7 text-center">Your Order History</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {cartData.map((order) => (
                   
                    <div key={order._id || order.createdAt} className='border border-slate-700 bg-slate-800/50 p-4 rounded-xl'>
                        <div className="flex justify-between border-b border-slate-600 pb-2 mb-4 text-sm text-gray-400">
                            <span>Order ID: {order._id}</span>
                            <span>Total: ${order.finalTotal?.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            {order.items.map((item) => (
                                <div key={item._id} className='flex items-center gap-4 bg-slate-700/30 p-2 rounded-lg'>
                                    <img 
                                        className='object-cover h-20 w-20 rounded-lg border border-slate-500' 
                                        src={item.poster_url} 
                                        alt={item.title}
                                    />
                                    <div className="grow">
                                        <p className="font-semibold text-lg">{item.title}</p>
                                        <div className="flex gap-4 text-sm text-gray-300">
                                            <p>Price: <span className="text-green-400">${item.price}</span></p>
                                            <p>Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="text-right font-bold text-blue-400">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GetOrderConfirmedData;