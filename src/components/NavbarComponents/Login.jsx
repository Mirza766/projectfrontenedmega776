
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { useAuth } from '../../AuthContext/AuthContext';
import { useDispatch } from 'react-redux';
import { addLoginData } from '../../redux/Login/LogininActions';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, Film } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const { storetokeninLocal } = useAuth();
  const dispatch = useDispatch();

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: { email: '', password: '' }
  });
  const { isSubmitting } = formState;

  const onSubmission = async (data) => {
    try {
      const response = await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const res_data = await response.json();
       
      if (response.ok) {
        storetokeninLocal(res_data.token);
        reset();
        navigate('/');
      } else {
        toast(res_data.msg ? res_data.msg : "Invalid Credentials");
      }
      dispatch(addLoginData(data));
    } catch (error) {
      console.log('Error is: ', error.message);
    }
  };

  return (
    <div className=" mt-15 min-h-screen w-full flex items-center justify-center bg-slate-950 px-4">
   
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-slate-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-[450px] z-10">
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
        
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-2xl bg-blue-600/10 text-blue-500 mb-4">
              <Film size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
            <p className="text-slate-400 mt-2">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmission)} className="space-y-5">
           
            <div className="relative">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email format"
                  }
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    sx={muiStyles}
                  />
                )}
              />
            </div>

           
            <div className="relative">
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    sx={muiStyles}
                  />
                )}
              />
            </div>

           
            <div className="pt-2">
              <Button
                fullWidth
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                sx={{
                  py: 1.5,
                  borderRadius: '12px',
                  backgroundColor: '#2563eb',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#1d4ed8' },
                  boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.2)'
                }}
              >
                {isSubmitting ? 'Authenticating...' : 'Sign In'}
              </Button>
            </div>
          </form>

       
          <div className="mt-8 pt-6 border-t border-slate-800 text-center space-y-3">
            <p className="text-slate-400 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:text-blue-400 font-medium transition-colors">
                Create one
              </Link>
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
}


const muiStyles = {
  '& .MuiOutlinedInput-root': {
    color: '#f8fafc',
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    borderRadius: '12px',
    '& fieldset': { borderColor: '#334155' },
    '&:hover fieldset': { borderColor: '#475569' },
    '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
  },
  '& .MuiInputLabel-root': { color: '#94a3b8' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#3b82f6' },
  '& .MuiFormHelperText-root': { color: '#f87171' }
};

export default Login;