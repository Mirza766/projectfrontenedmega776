import React from "react";
import { useForm } from "react-hook-form";
import "../stylingSheets/ContactUs.css";
import {useDispatch,useSelector} from 'react-redux';
import { Controller } from "react-hook-form";
import { TextField,FormControl,InputLabel,MenuItem,Select,FormHelperText, TextareaAutosize } from "@mui/material";
import { addContactUsData } from "../../redux/ContactUs/ContactUsActions";
import { ArrowRight } from "lucide-react";
import ContactUsRetrieveData from "../FormDataRetrieval/ContactUsRetrieveData";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import { useState } from "react";

const selectSx = {
  "& .MuiInputBase-input": { 
    color: "#ffffff", 
  },
  input: { color: "#9CA3AF" },
  label: { color: "#93C5FD" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#ffffff" },
    "&:hover fieldset": { borderColor: "#34D399" },
    "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
  },
  "& .MuiFormHelperText-root": { color: "#F87171" },
  "& .MuiInputLabel-root.MuiInputLabel-shrink": { color: "#34D399", fontWeight: 400 },
};

function ContactUs() {

const ContactUsUsers=useSelector((state)=>state.ContactUsFormData);
const User=ContactUsUsers[ContactUsUsers.length-1];
  
const {user,ContactData}=useAuth();
  const { reset,setValue, formState, register, setError, handleSubmit,control } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      queryType: "",
      message: "",
    },
    mode: "onChange",
  });
const [userData,setUserData]=useState(true);
const dispatch=useDispatch();


    if(userData && user){
setValue("fullName",user.fullname);
setValue("email",user.email);
setValue("phoneNumber",user.phoneNumber);

setUserData(false);
}


  const { errors,isSubmitting,isSubmitSuccessful} = formState;

  const onSubmission = async(data) => {
      const SubmittedDataArray=dispatch(addContactUsData(data));
    
    reset()
   
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto mt-25">
      <div className="flex flex-col justify-center items-center text-center  gap-6 space-y-7 lg:flex-row px-4">
      <div className="flex flex-col justify-center items-center text-center md:text-left w-full lg:w-1/2 gap-3 md:gap-4 lg:gap-5 ">
      <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font font-semibold leading-tight duration-700 delay-100 text-left  slide-in-from-left  mb-2 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text">We’d Love to Hear From You</h2>
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 text-2xl sm:text-2xl  xl:text-4xl font font-semibold leading-tight ">
      <p className="leading-tight duration-700 delay-200 slide-in-from-left bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">"Your ideas + our expertise = something extraordinary!"</p>
      <p className="leading-tight duration-700 delay-300 slide-in-from-left bg-linear-to-r from-blue-400 via-blue-200 to-cyan-300 text-transparent bg-clip-text">"Ready to get in touch? Let’s start the conversation today!"</p>
      <Link className='text-lg border border-slate-300 transition-colors delay-100 duration-300 hover:bg-green-400/20 bg-green-300/20 font-semibold flex justify-center items-center border-b-green-300 text-emerald-400 p-2 rounded-full' to='/contactusdata'>
                     Finalize Your Query
                     </Link>
      </div>
      </div>
      <div className="w-full flex flex-col lg:w-1/2 items-center justify-center text-center  order-2 ">
      
        <h2 className="font-bold text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-7 text-center">Get in Touch</h2>
      
      <div className= "relative w-full max-w-xl bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10">
        <form className=" w-full  text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10" onSubmit={handleSubmit(onSubmission)}>
          <Controller
         name='fullName'
         control={control}
         rules={{required:'Full Name is required'}}
         render={({field,fieldState})=>(
            <TextField
            {...field}
            label='Full Name'
            fullWidth
            margin='normal'
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
             sx={selectSx}
            />
         )}       
         />


          <Controller
                   name='email'
                   control={control}
                   rules={{required:'Email is Required is required',pattern:{
                      value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          
                   }
              }}
                 render={({field,fieldState})=>(
                  <TextField
                  {...field}
                  fullWidth
                  margin='normal'
                  label='Email'
                  
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                   sx={selectSx}
                  />
                 )}
              />


          <Controller
                 name='phoneNumber'
                 control={control}
                 rules={{required:'Phone Number is required'}}
               render={({field,fieldState})=>(
                <TextField
                {...field}
                fullWidth
                margin='normal'
                label='Phone Number'
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                 sx={selectSx}
                />
               )}
            />

  <Controller
  name='queryType'
 
  control={control}
  rules={{required:'Please Select Query Type'}}
  render={({field,fieldState})=>(
    <FormControl fullWidth margin='normal' error={!!fieldState.error} sx={selectSx}>
    <InputLabel>Query Type</InputLabel>
    <Select 
    {...field}
    label='Query Type' sx={selectSx}>
      <MenuItem value='Booking Issue'>Booking Issue</MenuItem>
      <MenuItem value='Payment/Refund'>Payment/Refund</MenuItem>
      <MenuItem value='PromoCode'>PromoCode</MenuItem>
      <MenuItem value='Technical Issue '>Technical Issue</MenuItem>
      <MenuItem value='General Inguiry'>General Inquiry</MenuItem>
    </Select>
    <FormHelperText>{fieldState.error?.message}</FormHelperText>
   
    </FormControl>
  )}
  />
  
   <Controller
                 name='message'
                 control={control}
                 rules={{
                  required:'Message is required',
                  minLength: {
                  value: 15,
                  message: "Message Should be of Length 15",
                  },
                }
                }
               render={({ field, fieldState }) => (
    <TextField
      {...field}
      label="Message"
      multiline
      minRows={4}
      fullWidth
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
      sx={selectSx}
    />
               )}
        />
        <div className="flex items-center justify-center w-full">
 <button type='submit' className={` text-white mt-4 mb-2 group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300 cursor-pointer {isBooked ? "bg-red-900 text-gray-400" : "bg-slate-800 text-blue-400"}`}>          
                    <span> {isSubmitting? 'Loading....':'Submit'}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   </button>
                </div>
      
   {
    isSubmitSuccessful?(
<div className='inline-flex items-center px-2 sm:px-4 lg:px-5 space-x-2 max-w-1xl rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all animate-in  slide-in-from-top duration-700 delay-300  mb-4 sm:mb-6 lg:mb-8'>
                  
                  <span className='text-sm text-blue-400'> {
      isSubmitSuccessful && <p>Thank you! "{User.fullName}" Your request has been submitted for the complain "{User.queryType}".
Our support team will get back to you within 1–3 hours on your given contact "{User.phoneNumber}".</p>
    }</span>
   </div>
    ):(
      null
    )
}

        </form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ContactUs;
