import React, { useState } from 'react'
import {useForm,FormProvider} from 'react-hook-form'
import {Button} from '@mui/material'
import '../../stylingSheets/SignUp.css';
import { addSignUpData } from '../../../redux/SignUp/SignUpActions';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { lazy } from 'react';
import { useAuth } from '../../../AuthContext/AuthContext';
import {  CheckCircle2, Clapperboard, Ticket, Zap } from 'lucide-react';
import { ArrowRight,ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const AccountDetail=lazy(()=>import('./AccountDetail'))
const Verification=lazy(()=>import('./Verification'))
const Preference=lazy(()=>import('./Preference'))

function SignUpPage() {
const navigate=useNavigate();

const {storetokeninLocal}=useAuth();  
const dispatch=useDispatch();

const features = [
  { icon: <Clapperboard className="w-5 h-5" />, title: "Unlimited Access", desc: "Browse thousands of movies and shows." },
  { icon: <Ticket className="w-5 h-5" />, title: "Easy Booking", desc: "Reserve your seats in seconds." },
  { icon: <Zap className="w-5 h-5" />, title: "Instant Alerts", desc: "Get notified about new releases first." },
];


const methods=useForm({mode:'onChange',
  defaultValues: {
    fullname: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    secondPhoneNumber:'',
    otp:'',
    dob: null,
    agree:false,
    favourateGenre:'',
    city:'',
    timeSlot:'',
    payment:'',
    notifications:''
  }
});
const {handleSubmit,trigger,reset,formState}=methods;
const {isSubmitting,isSubmitSuccessful}=formState;
const [step,setStep]=useState(1);
const totalSteps=3;
const progress=(step/totalSteps)*100;





const onSubmission=async(data)=>{
  try{

    const response=await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/auth/register`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify(data)
    });
console.log(response);
 const res_data = await response.json();
    // await new Promise((resolve)=>setTimeout(resolve,2000));
 if(response.ok){
 
  storetokeninLocal(res_data.token);
    reset();
navigate('/')
    
 }
  else{
    toast.error(res_data.msg ? res_data.msg : "Email Already Exists");
  }

    console.log(data);
    dispatch(addSignUpData({...data,dob:new Date(data.dob).toISOString()}));

  }
  catch(error){
    console.log("Error While Signining up")
  }
 
}

const prevStep=()=>setStep((prev)=>prev-1);
const nextStep=async()=>
  {
    const valid=await trigger();
    if(valid){
      setStep((prev)=>prev+1)
    }
  };


  return (
    <div className=' mt-10 sm:mt-14 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2'>
    
     <div className='p-6 lg:flex flex-col justify-center items-center sm:px-10 space-y-8 pr-12'>
          <div>
            <h1 className='text-5xl font-extrabold text-white mb-4 leading-tight'>
              Experience the <span className='text-blue-500'>Future</span> of Cinema.
            </h1>
            <p className='text-slate-400 text-lg'>
              Join our community of movie enthusiasts and unlock exclusive features tailored just for you.
            </p>
          </div>

          <div className='space-y-6'>
            {features.map((f, i) => (
              <div key={i} className='flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors'>
                <div className='p-2 bg-blue-500/10 rounded-lg text-blue-500'>{f.icon}</div>
                <div>
                  <h4 className='font-semibold text-white'>{f.title}</h4>
                  <p className='text-sm text-slate-500'>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        
        </div>
    

    <div className='signUp-master px-4'>
    <div className=' relative w-full max-w-xl bg-white/5 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/10 '>
      <h2 className=' text-2xl sm:text-3xl md:text-4xl sm:h-10 md:h-15 font-bold bg-linear-to-r from-blue-300 to-cyan-300 text-transparent items-center justify-center flex mb-5 bg-clip-text'>Ready to sign up here</h2>
    <div className='w-full'>


<div className='w-full mb-6'>
  <div className='flex justify-between mb-2 text-xs text-blue-300'>
    <span className={step >= 1 ? "text-blue-400 " : ""}>Account</span>
    <span className={step >= 2 ? "text-blue-400" : ""}>Verification</span>
    <span className={step >= 3 ? "text-blue-400" : ""}>Preferences</span>
   
  </div>

  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-in-out"
      style={{ width: `${progress}%` }}
    />
  </div>

</div>
<div className="flex justify-between items-center mb-4">
  {[1,2,3].map((s) => (
    <div
      key={s}
      className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold
        ${step >= s ? "bg-blue-500 text-white" : "bg-white/10 text-gray-400"}`}
    >
      {s}
    </div>
  ))}
</div>




     <FormProvider {...methods} >

     
        <form onSubmit={handleSubmit(onSubmission)}>
          {step===1 && <AccountDetail/> }
          {step===2 && <Verification/>}
          {step===3 && <Preference/>}


           <div className='signUpButtons flex flex-row w-full items-center justify-center text-center'>
           {step> 1 && (
            <div className='flex items-center justify-center w-full md:w-1/2'>
             <button className='group flex items-center cursor-pointer gap-1 w-full   justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300' onClick={prevStep} type='button'>
                       <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300"/>
                    <span>Back</span>
                   </button>
                   </div>
           )}

           { step<3 && (
           <div className='flex items-center justify-center w-full md:w-1/2 order-2'>
            <button className='group flex items-center cursor-pointer gap-1 w-full   justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300  '  onClick={nextStep} type='button'>
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   </button>
                   </div>
           )               
           }
           {
            step===3 && (  
             <div className='flex items-center justify-center w-full md:w-1/2 order-2'>
               <Button className='signup-btn-div' fullWidth variant='contained' type='submit'>{isSubmitting?'Loading':'Submit'}</Button>  
                
               </div>
            )
           }    
           
           </div>  
           
                     {
isSubmitSuccessful?(
 <div className='animate-in slide-in-from-top duration-300 delay-200 flex flex-row items-center text-center justify-center md:text-left px-2 sm:px-4 lg:px-5 space-x-2 max-w-1xl rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all  hover:scale-102 mb-4 sm:mb-6 lg:mb-8'>           
      <span className='text-sm text-blue-400'> {
      isSubmitSuccessful && <p className="text-center md:text-left md:justify-left">Congratulations You have Signed Up Successfully.</p>
    }</span>
   </div>
):(
  null
)
}

        </form>  
        </FormProvider>  
    </div>
  </div>
  </div>
   </div>
  )
}

export default SignUpPage