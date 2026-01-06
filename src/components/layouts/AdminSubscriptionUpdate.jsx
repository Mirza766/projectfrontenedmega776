import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { BadgeQuestionMarkIcon, PlaySquare } from 'lucide-react';
import { 
  TextField,
  FormControl,
  InputLabel,
  Select,
  FormHelperText, 
  Button, 
  Paper, 
  Typography, 
  MenuItem, 
  Box, 
  Divider,
  CircularProgress,
  InputAdornment
} from '@mui/material';
import { Save, User, MapPin, Phone, Mail, CreditCard, Clock, Film, ChevronLeft, MessageCircle } from 'lucide-react';
import { useAuth } from '../../AuthContext/AuthContext';
import { useState } from 'react';
const AdminSubscriptionUpdate= ({ userData, isLoading}) => {
  const { control,reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: userData || {
      fullName: '',
      email: '',
      phoneNumber: '',
      price:'',
      planName:'',       
    }
  });
const {AuthorizationToken}=useAuth();

const navigate=useNavigate();
const params=useParams();
  const onSubmit = async(data) =>{


try{
    
const response=await fetch(
  `https://megaprojectmoviebookingapp-1.onrender.com/api/admin/subscriptions/update/${params.id}`,
  {
    method:'PATCH',
    headers:{
      "Content-Type": "application/json",
      Authorization:AuthorizationToken,
    },
    body:JSON.stringify(data),
  }
 
)
if(response.ok){
 toast.success("Subscription Updated SuccessFully");
 navigate('/admin/subscription')

}
else{
   toast.error("Not Updated");
}

  }
  catch(error){
   console.error("Error While Updating Data")
  }

  } 
  const getSingleContactData = async () => {
    try {
      const response = await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/admin/subscriptions/${params.id}`, {
        method: 'GET',
        headers: { Authorization: AuthorizationToken },
      });
      
      const data = await response.json();

      if (response.ok) {
       
        reset({
          name: data.name || '',
          email: data.email || '',
          phoneNumber: data.phoneNumber || '',
          price:data.price || '',
          planName:data.planName || '',
         
        });
      }
    } catch (error) {
      toast.error("Error fetching Subscription data");
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleContactData();
  }, [params.id, reset]);




  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Paper 
        elevation={0}
        sx={{ 
          p: { xs: 3, md: 5 }, 
          backgroundColor: '#0f172a', 
          color: '#f1f5f9',
          borderRadius: '24px',
          border: '1px solid #1e293b',
          width: '100%',
          maxWidth: '550px', 
        }}
      >
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" fontWeight="800" sx={{ mb: 1, letterSpacing: '-0.5px' }}>
            Edit Profile
          </Typography>
          <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.6 }}>
            Update the user's personal details, contact information, and system preferences below.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
            
            <Typography variant="caption" sx={{ color: '#3b82f6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Personal Details
            </Typography>

            <Controller
              name="name"
              control={control}
              rules={{ required: "Full name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Full Name"
                  variant="filled"
                  error={!!errors.fullname}
                  helperText={errors.fullname?.message}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><User size={20} color="#3b82f6" /></InputAdornment>,
                  }}
                  sx={inputStyles}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  variant="filled"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Mail size={20} color="#3b82f6" /></InputAdornment>,
                  }}
                  sx={inputStyles}
                />
              )}
            />

            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Phone Number"
                  variant="filled"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Phone size={20} color="#3b82f6" /></InputAdornment>,
                  }}
                  sx={inputStyles}
                />
              )}
            />



 <Controller
              name="price"
              control={control}
              rules={{ required: "Please select a payment method" }}
              render={({ field }) => (
                <TextField 
                  {...field} 
                  select 
                  fullWidth 
                  label="Price" 
                  variant="filled" 
                  error={!!errors.payment}
                  helperText={errors.payment?.message}
                  sx={inputStyles}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><CreditCard size={20} color="#3b82f6" /></InputAdornment>,
                  }}
                >
                    <MenuItem value="" disabled>Select Price</MenuItem>
                       <MenuItem value='£80'>£80</MenuItem>
                        <MenuItem value='£180'>£180</MenuItem>
                        <MenuItem value='£380'>£380</MenuItem>
                       
                </TextField>
              )}
            />

             <Controller
              name="planName"
              control={control}
              rules={{ required: "Please select Plan Name" }}
              render={({ field }) => (
                <TextField 
                  {...field} 
                  select 
                  fullWidth 
                  label="Plan Name" 
                  variant="filled" 
                  error={!!errors.payment}
                  helperText={errors.payment?.message}
                  sx={inputStyles}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><PlaySquare size={20} color="#3b82f6" /></InputAdornment>,
                  }}
                >
                    <MenuItem value="" disabled>Select Plan</MenuItem>
                       <MenuItem value='Basic Pass'>Basic Pass</MenuItem>
                        <MenuItem value='Premium Pass'>Premium Pass</MenuItem>
                        <MenuItem value='VIP Experience'>VIP Experience</MenuItem>
                       
                </TextField>
              )}
            />

            <Divider sx={{ borderColor: '#1e293b', my: 1 }} />

           

          
            
           

            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button 
                type="submit" 
                variant="contained" 
                disabled={isLoading}
                fullWidth
                startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <Save size={20} />}
                sx={{ 
                  bgcolor: '#3b82f6', 
                  py: 1.8,
                  borderRadius: '14px',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  boxShadow: '0 8px 20px -6px rgba(59, 130, 246, 0.5)',
                  '&:hover': { bgcolor: '#2563eb', boxShadow: '0 10px 25px -4px rgba(59, 130, 246, 0.6)' } 
                }}
              >
                {isLoading ? "Saving..." : "Update Subscription"}
              </Button>
              
              <Button 
                variant="text" 
                fullWidth
                startIcon={<ChevronLeft size={18} />}
                sx={{ 
                  color: '#94a3b8', 
                  fontWeight: '600', 
                  textTransform: 'none',
                  '&:hover': { color: '#f1f5f9', bgcolor: 'transparent' } 
                }}
              >
              <Link to='/admin/subscription'>
               Back to Subscription List
              </Link>
               
              </Button>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

const inputStyles = {
  '& .MuiFilledInput-root': {
    backgroundColor: '#1e293b', 
    borderRadius: '14px',
    color: 'white',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:before, &:after': { display: 'none' },
    '&:hover': { backgroundColor: '#334155' },
    '&.Mui-focused': { 
      backgroundColor: '#0f172a', 
      border: '1px solid #3b82f6',
      boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.15)'
    },
    '& .MuiInputAdornment-root': {
       marginTop: '0px !important',
       marginRight: '12px'
    }
  },
  '& .MuiInputLabel-root': { 
    color: '#64748b', 
    fontWeight: 500,
    marginLeft: '32px',
    '&.Mui-focused, &.MuiFormLabel-filled': {
        marginLeft: '0px', 
    }
  },
  '& .MuiInputLabel-root.Mui-focused': { color: '#3b82f6' },
  '& .MuiSelect-icon': { color: '#64748b' },
  '& .Mui-disabled': { opacity: 0.5, WebkitTextFillColor: '#94a3b8' }
};

export default AdminSubscriptionUpdate;