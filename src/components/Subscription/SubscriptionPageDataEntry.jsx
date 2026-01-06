import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import SubscriptionContext from '../context/SubscriptionContext';
import { useAuth } from '../../AuthContext/AuthContext';
import { TextField } from "@mui/material";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Star } from "lucide-react";
import "../stylingSheets/BookingPageDataEntry.css";

const selectSx = {
  input: { color: "#9CA3AF" },
  label: { color: "#93C5FD" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
    "&:hover fieldset": { borderColor: "#34D399" },
    "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
    backgroundColor: "rgba(255, 255, 255, 0.03)",
  },
  "& .MuiFormHelperText-root": { color: "#F87171" },
  "& .MuiInputLabel-root.MuiInputLabel-shrink": { color: "#34D399" },
};

function SubscriptionPage() {
  const { updateSubscription, addSubscription } = useContext(SubscriptionContext);
  const lastSubscription = addSubscription[addSubscription.length - 1];
  const { user,SubscriptionData } = useAuth();

  const { reset, setValue, handleSubmit, formState, control } = useForm({
    defaultValues: { name: '', phoneNumber: '', email: '' },
    mode: 'onChange'
  });

  const { isSubmitting, isSubmitSuccessful } = formState;


  useEffect(() => {
    if (user) {
      setValue("name", user.fullname || "");
      setValue("email", user.email || "");
      setValue("phoneNumber", user.phoneNumber || "");
    }
  }, [user, setValue]);

  const onSubmission = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (lastSubscription) {
       updateSubscription(lastSubscription.id, data);
 
      }
      
      reset();
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
   

  return (
    <div className='min-h-screen bg-slate-950 text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        
     
        <div className='space-y-8 animate-in fade-in slide-in-from-left duration-700'>
          <div>
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text'>
              Complete Your <br /> Subscription.
            </h1>
            <p className='text-gray-400 text-lg max-w-md'>
              Join our premium network and unlock exclusive movie insights, early access, and high-quality streaming perks.
            </p>
          </div>

          <div className='space-y-4'>
            {[
              { icon: <Zap size={20}/>, text: "Instant activation on all devices" },
              { icon: <ShieldCheck size={20}/>, text: "Secure 256-bit encrypted checkout" },
              { icon: <Star size={20}/>, text: "Ad-free experience & 4K streaming" }
            ].map((item, i) => (
              <div key={i} className='flex items-center gap-3 text-gray-300'>
                <div className='text-emerald-400 bg-emerald-400/10 p-2 rounded-full'>{item.icon}</div>
                <span className='font-medium'>{item.text}</span>
              </div>
            ))}
          </div>

      
          {lastSubscription && (
            <div className='bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md'>
              <p className='text-sm text-blue-400 font-bold uppercase tracking-widest mb-2'>Selected Plan</p>
              <div className='flex justify-between items-end'>
                <div>
                  <h3 className='text-2xl font-bold'>{lastSubscription.planName}</h3>
                  <p className='text-gray-500'>Billed monthly</p>
                </div>
                <div className='text-right'>
                  <span className='text-3xl font-bold text-white'>{lastSubscription.price}</span>
                  <span className='text-gray-500'>/mo</span>
                </div>
              </div>
            </div>
          )}
        </div>

     
        <div className='relative'>
         
          <div className='absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl' />
          
          <div className='relative bg-white/5 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl'>
            <h2 className='text-2xl font-bold mb-8 flex items-center gap-2'>
              <CheckCircle2 className='text-emerald-400' /> Billing Information
            </h2>

            {lastSubscription ? (
              <form className=' flex flex-col gap-5 space-y-6' onSubmit={handleSubmit(onSubmission)}>
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: 'Full Name is required' }}
                  render={({ field, fieldState }) => (
                    <TextField {...field} label='Full Name' fullWidth error={!!fieldState.error} helperText={fieldState.error?.message} sx={selectSx} />
                  )}
                />
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } }}
                  render={({ field, fieldState }) => (
                    <TextField {...field} label='Email' fullWidth error={!!fieldState.error} helperText={fieldState.error?.message} sx={selectSx} />
                  )}
                />
                <Controller
                  name='phoneNumber'
                  control={control}
                  rules={{ required: 'Phone Number is required' }}
                  render={({ field, fieldState }) => (
                    <TextField {...field} label='Phone Number' fullWidth error={!!fieldState.error} helperText={fieldState.error?.message} sx={selectSx} />
                  )}
                />

                <button type='submit' disabled={isSubmitting} className='w-full group flex items-center justify-center gap-2 rounded-xl bg-linear-to-b from-blue-600 to-blue-500 py-4 font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50'>
                  {isSubmitting ? 'Processing...' : 'Complete Subscription'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {isSubmitSuccessful && (
                  <div className='mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-center animate-in fade-in'>
                     Successfully Subscribed to <strong>{lastSubscription.planName}</strong>!
                  </div>
                )}
                <Link className='border border-slate-300 transition-colors delay-100 duration-300 hover:bg-green-400/20 bg-green-300/20 font-semibold flex justify-center items-center border-b-green-300 text-emerald-400 p-2 rounded-full' to='/dataentrycont'>
                Finalize Your Subscription
                </Link>
              </form>
            ) : (
              <div className='text-center py-20'>
                <p className='text-gray-500'>Please select a plan from our pricing page first.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;