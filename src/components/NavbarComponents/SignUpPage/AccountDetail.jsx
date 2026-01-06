import React from 'react'
import {useFormContext,Controller} from 'react-hook-form'
import {Button,Checkbox,TextField,FormControlLabel, FormLabel} from '@mui/material'
import '../../stylingSheets/SignUp.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const AccountDetail=React.memo(function AccountDetail() {

const {control,watch}=useFormContext();
const password=watch('password');

    return (

    <div className='text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 '>
        <h2 className=' text-blue-400 text-base font-semibold'>Step 1: Account Details</h2>
         <div className='  detail-form'>
         <Controller
         name='fullname'
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
             sx={{
          input: { color: "#9CA3AF" },
          label: { color: "#93C5FD" },
          "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffffff",        
      },
      "&:hover fieldset": {
        borderColor: "#34D399",         
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1E40AF",         
      },
    },
    "& .MuiFormHelperText-root": {
      color: "#F87171",                 
    },
    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
      color: "#34D399",
      fontWeight: 400,
                        
    },
            }}
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
         sx={{
          input: { color: "#9CA3AF" },
          label: { color: "#93C5FD" },
          "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffffff",        
      },
      "&:hover fieldset": {
        borderColor: "#34D399",         
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1E40AF",         
      },
    },
    "& .MuiFormHelperText-root": {
      color: "#F87171",                 
    },
    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
      color: "#34D399",
      fontWeight: 400,
                        
    },

            }}
        />
       )}
    />

<Controller
         name='email'
         control={control}
         rules={{required:'Email is Required is required',pattern:{
            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,

         },
         validate:{
            emailAvailable:async(fieldValue)=>{
               const response=await fetch('/db/db.json');
               const data=await response.json();
               const users=data.users || [];
               const exists=users.some((user)=>user.email===fieldValue);
               return !exists || "Email Already Exists"
            }
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
         sx={{
          input: { color: "#9CA3AF" },
          label: { color: "#93C5FD" },
          "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffffff",        
      },
      "&:hover fieldset": {
        borderColor: "#34D399",         
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1E40AF",         
      },
    },
    "& .MuiFormHelperText-root": {
      color: "#F87171",                 
    },
    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
      color: "#34D399",
      fontWeight: 400,
                        
    },

            }}
        />
       )}
    />


     <Controller
         name='password'
         control={control}
         rules={{required:'Password is required',minLength:{
           value:8,
           message:'Password Must be atleast 8 characters'
        }  
    }}
       render={({field,fieldState})=>(
        <TextField
        {...field}
        fullWidth
        margin='normal'
        label='Password'
        type='password'
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
         sx={{
          input: { color: "#9CA3AF" },
          label: { color: "#93C5FD" },
          "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffffff",        
      },
      "&:hover fieldset": {
        borderColor: "#34D399",         
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1E40AF",         
      },
    },
    "& .MuiFormHelperText-root": {
      color: "#F87171",                 
    },
    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
      color: "#34D399",
      fontWeight: 400,
                        
    },

            }}
        />
       )}
    />
     <Controller
         name='confirmPassword'
         control={control}
         rules={{required:'Password is required',minLength:{
           value:8,
           message:'Password Must be atleast 8 characters'
        },
        validate:(value)=>
           value===password || 'Passwords Donot Match'
        
    }}
       render={({field,fieldState})=>(
        <TextField
        {...field}
        fullWidth
        margin='normal'
        label='Confirm Password'
        type='password'
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
         sx={{
          input: { color: "#9CA3AF" },
          label: { color: "#93C5FD"},
          "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffffff",        
      },
      "&:hover fieldset": {
        borderColor: "#34D399",         
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1E40AF",         
      },
    },
    "& .MuiFormHelperText-root": {
      color: "#F87171",                 
    },
    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
      color: "#34D399",
      fontWeight: 400,
                        
    },

            }}
        />
       )}
    />



    <Controller
    name='dob'
    control={control}
    rules={{required:'Date of Birth is required'}}
    render={({field,fieldState})=>(
      <div className='date-picker-div'>
      <DatePicker placeholderText='Select Date'
        className='date-input text-blue-400'
      selected={field.value}
      onChange={(date)=>field.onChange(date)}
      dateFormat='dd/MM/yyy'
      showMonthDropdown
      showYearDropdown
      dropdownMode='select'
      />
      {fieldState.error && (
              <p className='date-error'>{fieldState.error.message}</p>
            )}
      </div>
    )}
    />
         </div>
    </div>
  )
}
)

export default AccountDetail