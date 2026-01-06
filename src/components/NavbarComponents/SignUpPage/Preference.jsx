import React from 'react'
import {useFormContext,Controller} from 'react-hook-form'
import {Checkbox,FormControlLabel, InputLabel, Select, MenuItem, FormControl, FormHelperText, FormLabel, FormGroup} from '@mui/material'
import '../../stylingSheets/SignUp.css';

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

const Preference=React.memo(function Preference() {

  const {control}=useFormContext();


  return (
    <div className='signUpPreference'> 
     <div className='text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 '> 
      <h2 className='text-blue-400 text-base font-semibold'>Step 3: Preferences</h2>
  <Controller
  name='favourateGenre'
  control={control}
  rules={{required:'Please Select a Genre'}}
 
  render={({field,fieldState})=>(
    <FormControl fullWidth margin='normal' error={!!fieldState.error}  sx={selectSx}>
    <InputLabel>Favourate Genre</InputLabel>
    <Select 
    {...field}
    label='Favourate Genre'>
      <MenuItem value='Comedy'>Comedy</MenuItem>
      <MenuItem value='Thriller'>Thriller</MenuItem>
      <MenuItem value='Horror'>Horror</MenuItem>
      <MenuItem value='Drama'>Drama</MenuItem>
      <MenuItem value='Animation'>Animation</MenuItem>
    </Select>
    <FormHelperText>{fieldState.error?.message}</FormHelperText>
    
    </FormControl>
  )}
  />

    <Controller
  name='city'
  control={control}
  rules={{required:'Please Select Location/City'}}
  
  render={({field,fieldState})=>(
    <FormControl fullWidth margin='normal' error={!!fieldState.error} sx={selectSx}>
    <InputLabel>Location</InputLabel>
    <Select 
    {...field}
    label='Location'>
      <MenuItem value='Lahore'>Lahore</MenuItem>
      <MenuItem value='Karachi'>Karachi</MenuItem>
      <MenuItem value='Islamabad'>Islamabad</MenuItem>
      <MenuItem value='Rawalpindi'>Rawalpindi</MenuItem>
      <MenuItem value='Gujranwala'>Gujranwala</MenuItem>
    </Select>
    <FormHelperText>{fieldState.error?.message}</FormHelperText>
                 
    </FormControl>
  )}
  />

  <Controller
  name='timeSlot'
  control={control}
  rules={{required:'Please Select Time Slot'}}
  render={({field,fieldState})=>(
    <FormControl fullWidth margin='normal' error={!!fieldState.error} sx={selectSx}>
    <InputLabel>TimeSlot</InputLabel>
    <Select 
    {...field}
    label='Location'>
      <MenuItem value='Movie Shows'>Movie Shows</MenuItem>
      <MenuItem value='Afternoon Shows'>Afternoon Shows</MenuItem>
      <MenuItem value='Evening Shows'>Evening Shows</MenuItem>
      <MenuItem value=':Late Night Shows'>:Late Night Shows</MenuItem>
    </Select>
    <FormHelperText>{fieldState.error?.message}</FormHelperText>
   
    </FormControl>
  )}
  />

  <Controller
  name='payment'
  control={control}
  rules={{required:'Please Select Payment Method'}}
  render={({field,fieldState})=>(
    <FormControl fullWidth margin='normal' error={!!fieldState.error} sx={selectSx}>
        
    <InputLabel>Payment Method</InputLabel>
    <Select 
    {...field}
    label='paymentMethod'>
      <MenuItem value='Jazz Cash'>Jazz Cash</MenuItem>
      <MenuItem value='EasyPaisa'>EasyPaisa</MenuItem>
      <MenuItem value='Debit/Credit Card'>Debit/Credit Card</MenuItem>
      <MenuItem value='Cash on Counter'>Cash on Counter</MenuItem>
    </Select>
    <FormHelperText>{fieldState.error?.message}</FormHelperText>          
    </FormControl>
  )}
  />

  <Controller
name='notifications'
control={control}
render={({field})=>(
<FormControl component='fieldset'>
<FormLabel sx={{color:'#f7f7f7', marginTop:3,fontSize: '18px'}}  >Notification Preferences</FormLabel>
<FormGroup>
  <FormControlLabel
  sx={{color:"#93C5FD"}}
   control={<Checkbox
   checked={field.value.includes('email')}
   onChange={(e)=>{
    const checked=e.target.checked;
    field.onChange(
      checked?[...field.value,'email']
      :field.value.filter((v)=>v!=='email')
     );
   }}
 />
   }
   label='Email Alerts'
  />
  <FormControlLabel
  sx={{color:"#93C5FD"}}
   control={<Checkbox
   checked={field.value.includes('sms')}
   onChange={(e)=>{
    const checked=e.target.checked;
    field.onChange(
      checked?[...field.value,'sms']
      :field.value.filter((v)=>v!=='sms')
     );
   }}
 />
   }
   label='SMS Reminder'
  />
  <FormControlLabel
  sx={{color:"#93C5FD"}}
   control={<Checkbox
   checked={field.value.includes('push')}
   onChange={(e)=>{
    const checked=e.target.checked;
    field.onChange(
      checked?[...field.value,'push']
      :field.value.filter((v)=>v!=='push')
     );
   }}
 />
   }
   label='Push Notications'
  />
  
</FormGroup>
</FormControl>
)}
/>

     </div>


    </div>
  )
}
)

export default Preference