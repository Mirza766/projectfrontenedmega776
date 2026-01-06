import React from 'react'
import "../stylingSheets/Subscription.css";
import SubscriptionContext from '../context/SubscriptionContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Basic Pass",
    price: "£80",
    img:'/images/Featured icon (1).png',
    description: "“Your Ticket to the Big Screen”",
    features: [
      "Book up to 2 tickets per month",
      "Access to Standard",
      "Early-bird showtimes available",
      "Watch trailers & explore movie details",
      "No hidden fees — just pay as you go",
      "Validity of 10 Years Continiously",
    ],
    mostPopular: false,
  },
  {
    name: "Premium Pass",
    price: "£180",
    img:'/images/Featured icon.png',
    description: "Cinema Without Limit",
    features: [
      "Book unlimited tickets every month",
      "100GB storage",
      "Choose Premium & Recliner Seats",
      "10% off on snacks & drinks",
      "Priority access to new releases",
      "Enjoy exclusive member-only screenings",
      "Cancel anytime — no commitment needed",
      "Advanced security",
    ],
    mostPopular: true,
  },
  {
    name: "VIP Experience",
    price: "£380",
    img:'/images/Featured icon (1).png',
    description: "The Ultimate Movie Night",
    features: [
      "Book unlimited tickets every month",
      "Choose Premium & Recliner Seats",
      "10% off on snacks & drinks",
      "Priority access to new releases",
      "Enjoy exclusive member-only screenings",
      "Cancel anytime — no commitment needed",
    ],
    mostPopular: false,
  },
];


function SubscriptionContent() {
    
// const {user}=useAuth();
const navigate=useNavigate();



  const {AddSubscription}=useContext(SubscriptionContext);

const handleSubscriber=(planName, price)=>{
    AddSubscription({planName,price});
    navigate('/subscpage');
}


  return (
    <>
    <section id='pricing' className='mt-2 lg:mt-6 py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
      <div className='max-w-7xl text-white mx-auto mb-12 '>

         <div className='flex flex-col gap-1.5 justify-center items-center md:text-left text-center mb-5'>
         <h2 className='font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl bg-linear-to-r from bg-blue-400 via-blue-200  to-cyan-400 bg-clip-text text-transparent mb-3'>Choose Your Perfect Movie Experience</h2>
         <h2 className=' mb-10 text-4xl h-12 font-bold bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent  '>Pricing Plans</h2>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6'>
            {
               plans.map((plan,key)=>(
                  <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${plan.mostPopular?"border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-104": "border-slate-800 hover:border-slate-700"}`}>
               <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg" />
               {
                  plan.mostPopular && (
                     <div className='absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10 animate-in leading-tight  transition-all hover:scale-102'>
                      <div className=' flex flex-row justify-center gap-1 items animate-in slide-in-from-top duration-700 delay-300 linear-full sapce-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm '>

                        <Star className='w-3 h-3 sm:w-4 sm:h-4  fill-white'/>
                        <span className='text-white'>Most Popular</span>

                     </div>
                     </div>
                  )
               }
               <div className='text-center mb-6 sm:mb-8'>
                  <div className='flex gap-2 items-center justify-center'>
                  <h3 className='text-gray-400 text-xl sm:text-2xl font-bold mb-2'>{plan.name}</h3>
                   <img className='-mt-1 rounded-md h-6 w-6' src={plan.img}/>
                  </div>
                  <p className='text-gray-400 text-xs sm:text-sm font-semibold mb-2'>{plan.description}</p>
                  <div className='flex items-baseline justify-center'>
                  <span className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent '>${plan.price}</span>
                  <span className='text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base'>/month</span>
                  </div>
               </div>


               <ul className='space-y-3 sm:space-y-4 mb-6 sm:mb-8 '>
               {
                  plan.features.map((feature,featureKey)=>(
                     <li className='flex items-start sapce-x-2 sm:space-x-3'
                     key={featureKey}>
                     <div className='w-4 h-4 sm:w-5 sm:h-5 text-white  rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5'>
                      <img className='' src='/images/Frame.png'/>
                     </div>
                     <span className=' text-white'>{feature}</span>
                     </li>
                  ))
               }
               </ul>
              
               <button className={`flex justify-center items-center space-x-3 flex-row w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold ${plan.mostPopular? 'bg-linear-to-b from from-blue-500 to-cyan-500 cursor-pointer':
               'bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer'} `}  onClick={()=>handleSubscriber(plan.name,plan.price)}>
                 <span>Subscribe Now</span>   
                  <ArrowUpRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform duration-300'/>
                     </button>
                    
                 
                  </div>                
               ))
            }
              
         </div>
            <div className='mt-8 sm:mt-12 text-center'>
          <p className='text-gray-400 text-xl'>Need a custom plan? 
            <Link to="/contact" className='text-blue-400 hover:text-blue-300'> Contact our sales team</Link></p>
        </div>
      </div>

    </section>
    </>
  )
} 

export default SubscriptionContent