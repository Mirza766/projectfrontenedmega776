import { Phone, Users2 } from 'lucide-react';
import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Github,LinkedinIcon,Twitter } from 'lucide-react';
import { useDispatch,useSelector } from 'react-redux';
import { addTimelineData,editTimelineData,emptyTimelineData } from '../../redux/Timeline/TimeLineActions';
import { TimeLineData } from '../../redux/Timeline/TimeLineReducer';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { setBookedSlots } from '../../redux/Timeline/TimeLineActions';

const timeline = [
  {
    id: 1,
    name: "Mirza",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=256&q=80",
    email: "saifmirza1803@gmail.com",
    phone: '03325411210',
    days: [
      {
        Tue: ["8:00 AM - 9:00 AM",
          "9: 00 A.M - 10:00 A.M"
        ]
      }
    ],
  },
  {
    id: 2,
    name: "Ahmad",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    email: "ahmad.dev@example.com",
    phone: '03001234567',
    days: [
      {
        Mon: ["9:00 A.M - 10:00 A.M",
          "10 A.M - 11 A.M",
          "11 A.M -12 P.M"
        ]
      },
      {
        Thurs: ["4:00 PM - 5:00 PM",
          "5:00 P.M -6:00 P.M"
        ]
      }
    ],
  },
  {
    id: 3,
    name: "Furqan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    email: "furqan.code@example.com",
    phone: '03219876543',
    days: [
      {
        Tues: ["10:00 AM - 11:00 AM",
          "11:00 A.M - 12:00 P.M",
          "12:00 A.M - 1:00 P.M"
         ]
      },
      {
         Frid:["3:00 P.M - 4:00 P.M"]
      }
    ],
  },
  {
    id: 4,
    name: "Raza",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    email: "raza.uiux@example.com",
    phone: '03335558888',
    days: [
      {
        Mon: ["9:00 A.M - 10:00 A.M",
          "10:00 A.M - 11:00 A.M"
        ]
      },
      {
        Wed: ["1:00 P.M - 2:00 P.M",
          "2:00 P.M -3:00 P.M"
        ]
      }
    ],
  },
  {
    id: 5,
    name: "Irtaza",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80",
    email: "irtaza.qa@example.com",
    phone: '03124447777',
    days: [
      {
        Thurs: ["3:00 PM - 4:00 PM"]
      }
    ],
  },
  {
    id: 6,
    name: "Abdul Rehman",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&w=256&q=80",
    email: "abdul.rehman@example.com",
    phone: '03456669999',
    days: [
      {
        Tue: ["11:00 A.M - 12:00 P.M",
          "12:00 P.M - 1:00 P.M"
        ]
      }
    ],
  }
];





function TimelineConnectPage() {


  const {user,getCallBookingData}=useAuth();

  const {AuthorizationToken}=useAuth();
  const { reset, formState, register, setError, handleSubmit,control } = useForm({
    defaultValues: {
      
      SelectedSlot:'',
    },
    mode: "onChange",
  });
 const { errors,isSubmitting,isSubmitSuccessful} = formState;


  const {BookedSlots,PersonData}=useSelector((state)=>state.TimeLineData);

const [openMenu,setOpenMenu]=useState(false)
const [confirmedData,setConfirmedData]=useState();
const [bookedSlot,setBookedSlot]=useState();

    const {id}=useParams();
console.log(user)
const selectedTimeline = timeline.find(
  (time) => time.id === Number(id)
);

const dispatch=useDispatch();

const lastUser = PersonData && PersonData.length > 0 ? PersonData[PersonData.length - 1] : null;
  const lastBookedSlot = BookedSlots && BookedSlots.length > 0 ? BookedSlots[BookedSlots.length - 1] : null;


// useEffect(() => {
//     console.log("Updated Redux Store:", PersonData);
//   }, [PersonData]);


const onSubmit=async(data)=>{
  if (!data || data === "Select a TimeSlot") {
      alert("Please select a valid time slot");
      return;
    }

if (!data.SelectedSlot) return;
   await new Promise((resolve)=>setTimeout(resolve,1000));
const bookingData = {
    userId:user._id,
    client:user.fullname,
    agentName: selectedTimeline.name,
    email: selectedTimeline.email,
    phone: selectedTimeline.phone,
    SelectedSlot: data.SelectedSlot 
  };

  try {
    const response = await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/bookcall/callbooking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData)
    });

  
  const res_data=await response.json();

    if (response.ok) {
      const slotRes = await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/bookSlots/slotbooking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ SelectedSlot: data.SelectedSlot })


      })
    
    
    if(slotRes){
    const slotResult = await slotRes.json();
    dispatch(addTimelineData(bookingData));
    getCallBookingData();
    setConfirmedData(bookingData);
        toast.success("Appointment Confirmed!");
        reset();
    }
  }
  else{
     toast(res_data.msg ? res_data.msg : "Seat Already Booked");
  }
 } catch (error) {
     toast.error("Booking failed");
  }
}

const fetchDisabledSlots = async () => {
  try {
    const response = await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/bookSlots/getbookedslot`, {
      headers: { Authorization: AuthorizationToken }
    });
    const data = await response.json();
    if (response.ok) {
       
       dispatch(setBookedSlots(data.bookedSlots || []));
    }
  } catch (err) {
    console.log("Error fetching slots", err);
  }
};


  useEffect(()=>{
   fetchDisabledSlots();
  },[dispatch,AuthorizationToken])



    return (
      
    <div className=' text-white flex flex-col  mt-25 max-w-7xl sm:max-w-4xl mx-auto px-4'>
      <h2 className='text-center text-3xl  mb-10 font-bold bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent  '>{selectedTimeline.name} Contact Info</h2>
      <div className='flex flex-col lg:flex-row lg:gap-4 gap-10 justify-center items-center  '>
        
       <div className='relative w-full sm:w-xl lg:w-1/2   '>
       
       <div className="absolute  inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/90 to-slate-900 pointer-events-none rounded-lg border border-white/5 hover:border-white/10" />  
            <div className=' flex flex-col p-2 items-center justify-center w-full  mx-auto'>
            
          {
            
                
                <div key={selectedTimeline.id} className='group w-full relative overflow-hidden  border-slate-800 border hover:border-blue-500/20 transition-all duration-500 rounded-lg '>
 
            <div className="absolute  inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/90 to-slate-900 pointer-events-none" />



                    <div className='flex p-6  items-center z-10 flex-col relative'>
                    <div className='relative mb-4'>
                        <div className='absolute inset-0 bg-blue-500 blur-md opacity-20 group-hover:opacity-50 border rounded-full '/>
                    <img src={selectedTimeline.image} alt={selectedTimeline.name} className='w-25 h-25 object-cover rounded-full border-4 border-slate-800  group-hover:border-blue-400  transition-colors duration-300 relative '/>
                    <div className='absolute z-20 bottom-0 right-1 bg-slate-800/80 border border-slate-950 rounded-full p-2'>
                    <Users2 size={16} />
                    </div>
                    </div>
                       
                    <div className='flex flex-col gap-0.5 items-center mb-5'>
                    <h2 className='text font-bold text-lg bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text transition-colors group-hover:text-blue-300 '>{selectedTimeline.name}</h2>
                       <p className='text-gray-400 text-sm'>{selectedTimeline.email}</p>
                       <div className='flex gap-1 mt-1 justify-center items-center'>
                        <div>
                        <Phone size={25} className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border transition-all duration-300 hover:scale-102 hover:shadow-md hover:shadow-blue-400'/>
                         </div>
                       <p className='text-gray-400 text-sm'>{selectedTimeline.phone}</p>
                      
                       </div>

                    </div>

                 
                       <div className='bg-white/5 p-2 border border-slate-950/10 rounded-xl cursor-pointer flex flex-row gap-2  hover:bg-white/10 hover:text-white delay-100 duration-300 transition-colors '>
                       <div>
                       
                        </div>
                        <div >
                         <span onClick={()=>setOpenMenu((prev)=>!prev)} className=' text-sm lg:text-lg font-bold flex justify-center text-center '  >{
                         openMenu?"Close Appointment":"Book Appointment"}</span>
                        
                        </div>
                        </div>

                        <div className='flex'>
                             <div className='mt-8 flex flex-row gap-2'>
                            <a  href='#'><Github size={30} className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border transition-all duration-300 hover:scale-102 hover:shadow-md hover:shadow-blue-400'/></a>
                            <a  href='#' className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border hover:scale-102 hover:shadow-md hover:shadow-blue-400'><LinkedinIcon size={18}/></a>
                            <a  href='#' className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border hover:scale-102 hover:shadow-md hover:shadow-blue-400'><Twitter size={18}/></a>
                        </div>
                        </div>
                  

                </div>
                </div>
          

           
          }
    </div>
    
    </div>
   <div className='bg-white/5 flex justify-center items-center border border-slate-400/20 rounded-lg p-4'>
    <div className='relative w-1/2 order-2 flex flex-col items-center justify-center'>
    <div className=''/>
    <h2 className='text-center text-3xl h-auto mb-10 font-bold bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Select a TimeSlot of your choice</h2>
{
       openMenu && (
     <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>      
  <select 
  className='border bg-white/5 hover:bg-white/10 border-slate-800/20 text-sm sm:text-sm md:text-base cursor-pointer lg:text-lg h-10 rounded-lg p-2'   aria-placeholder='Select a TimeSlot' 
  {...register("SelectedSlot", { required: "Please select a time slot" })} 
>
      <option value='' className='bg-black/20 text-blue-400'>Select a TimeSlot</option>
      {
       selectedTimeline.days.map((dayObject,index)=>{
        const [day,timeSlots]=Object.entries(dayObject)[0];

        return timeSlots.map((time,timeIndex)=>{

            const slotValue=`${day} - ${time}`;

            const isBooked=BookedSlots.includes(slotValue);

         return ( <option  key={timeIndex} disabled={isBooked} className={isBooked?"bg-red-900 cursor-not-allowed  text-blue-400 border border-slate-400 rounded-lg ":"bg-green-700  text-blue-400 border border-slate-400 rounded-lg cursor-pointer"} value={slotValue}>

            {day}: {time}
          </option>
         )
       })
 

        })}     
       
       </select>
        <button type='submit' className=' mt-7 group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300 cursor-pointer'>
           {
                      isSubmitting?(
                        <>
                        <Loader2 className='text-white animate-spin' size={20}/>
                        Loading...
                        </>
                      ):(
                        <>
                       <span>Confirm Booking</span>
                        </>
                      )
                    }        
        </button>
{confirmedData && (
  <div className='mt-6 inline-flex items-center px-2 sm:px-4 lg:px-5 space-x-2 max-w-1xl rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all animate-in slide-in-from-top duration-700 delay-300 mb-4 sm:mb-6 lg:mb-8'>
    <span className='text-sm text-blue-400 p-3'>
      <p>
        Your call has been booked with "<strong>{confirmedData?.agentName}</strong>" 
        whose contact is "{confirmedData?.phone}" 
        and email "{confirmedData?.email}" 
        on "<strong>{confirmedData?.SelectedSlot}</strong>"
      </p>
    </span>
  </div>
)}
          

        </form>
)}   
    </div>
    </div>
    </div>
    </div>
  )
}

export default TimelineConnectPage