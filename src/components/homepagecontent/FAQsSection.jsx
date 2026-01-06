import React from 'react'
import { ChevronDown, Indent } from 'lucide-react'
import { useState } from 'react'



const faqs = [
    {
      question: "Can I choose my own seats?",
      answer:
        "Yes! Our smart seat selection lets you view available seats in real time and pick the perfect spot before booking.",
    },
    {
      question: "How do I book movie tickets?",
      answer:
        "Simply select your movie, choose a showtime, pick your seats, and confirm your booking in just a few clicks.",
    },
    {
      question: "Can I book tickets in advance?",
      answer:
        "Absolutely. You can pre-book tickets for upcoming movies as soon as bookings are open.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Cancellation and changes depend on the theater’s policy. Eligible bookings can be canceled directly from your dashboard.",
    },
     {
      question: "What payment methods are supported?",
      answer:
        "We support multiple secure payment options including cards, digital wallets, and online banking.",
    },
  ];
function FAQsSection() {

const [openMenu,setOpenMenu]=useState()
const toggleFAQ=(index)=>{
    setOpenMenu(openMenu===index?null:index);
}



  return (
    <section id="faqs" className=' mt-19  flex flex-col space-y-6 items-center justify-center max-w-7xl mx-auto p-4'>
        <h2 className='font-bold bg-linear-to-b from-blue-400 to-cyan-400 text-2xl md:text-3xl mb-12 text-center bg-clip-text text-transparent'>Got Questions? We’ve Got Answers</h2>
 <div className=' flex flex-col space-y-6 relative w-full max-w-3xl bg-white/5 backdrop-blur-xl rounded-2xl p-4  border border-white/10 shadow-2xl shadow-blue-500/30 '>
    {
faqs.map((faq,index)=>(
    <div key={index} className=' w-full max-w-4xl xl:max-w-5xl text-left bg-linear-to-r from-gray-900/10 to-slate-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/5 hover:border-white/10 hover:bg-white/5'>
     <button className='flex flex-row justify-between w-full cursor-pointer' onClick={()=>toggleFAQ(index)}>
        <div className=' text-base  font-semibold md:font-bold md:text-xl  bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>
        {faq.question}
        </div>
        <ChevronDown className={` text-white text-xl transition-transform duration-700 delay-100  ${openMenu===index?"rotate-180":"rotate-0"}`}/>
     </button>
     {
        openMenu===index && (
            <div className='block mt-3  pb-4 text-gray-400 transition-all duration-300'>
               {faq.answer}
            </div>
        )
    }
    </div>
    
))
    }

</div>


    </section>
  )
}

export default FAQsSection