import React from 'react'
import {useFormContext,Controller, useForm} from 'react-hook-form'
import {Button,Checkbox,TextField,FormControlLabel, FormLabel} from '@mui/material'
import '../../stylingSheets/SignUp.css';
const Verification=React.memo(function Verification() {
  const {control}=useFormContext();

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

  return (
    <div className='Verification-master-container'>
    <div className='text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 '>
       <h2 className='text-blue-400 text-base font-semibold'>
       Step 2: Security and  Verification
       </h2>
       <div className='verific-form-detail'>
        <Controller
        name='secondPhoneNumber'
        control={control}
         rules={{required:'Secondary Phone Number is mandatory'}}
         render={({field,fieldState})=>(
          <TextField 
          {...field}
          label='Secondary Phone Number'
           fullWidth
            margin='normal'
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            sx={selectSx}
          />
         )}
        />

         <Controller
        name='otp'
        control={control}
         rules={{required:'OTP is mandatory',minLength:{
          value:5,
          message:"OTP Must Contain 5"
         }}}
         render={({field,fieldState})=>(
          <TextField 
          {...field}
          label='OTP'
           fullWidth
            margin='normal'
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            sx={selectSx}
          />
         )}
        />
     <Controller
     name='agree'
     control={control}
     render={({field})=>(
      <FormControlLabel 
      control={<Checkbox {...field} checked={field.value}/>}
      label='I agree to the terms'
      />
     )}
     />
       </div>
          
      </div>
    </div>
  )
}
)

export default Verification