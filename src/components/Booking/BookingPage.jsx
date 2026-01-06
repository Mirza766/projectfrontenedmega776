import React from "react";
import { Link } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Sparkles,ArrowRight,ArrowUpRight } from "lucide-react";
import {Button,Checkbox,TextField,FormControlLabel,FormControl,Select,MenuItem,Menu,InputLabel, FormLabel, FormHelperText,styled} from '@mui/material'
import { Controller } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setMovie,
  toggleSeat,
  confirmBooking,
  setTime,
  setDate,
} from "../../redux/Booking/BookingActions";
import { useForm } from "react-hook-form";
import "../stylingSheets/BookingPage.css";
import { useAuth } from "../../AuthContext/AuthContext";


const BookingPage = () => {

  const dispatch = useDispatch();
  const { movies, selectedMovie, selectedSeats, bookingDetails, selectedDate, selectedTime } =
    useSelector((state) => state.MovieBooking);


 
  const { register, handleSubmit,setValue, reset,control,formState} = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

const [userData,setUserData]=useState(true);
const {user,bookingData}=useAuth();
if(userData && user){
setValue("name",user.fullname);
setValue("email",user.email);
setValue("phone",user.phoneNumber);

setUserData(false);
}


  const {isSubmitSuccessful,isSubmitting}=formState;


  React.useEffect(() => {
  
  }, [bookingDetails]);

  const onSubmit = async(data) => {
    if (!selectedMovie || !selectedDate || !selectedTime || selectedSeats.length === 0) {
      alert("Please select movie, date, time, and at least one seat!");
      return;
    }

await new Promise((resolve)=>setTimeout(resolve,1000));
    const bookingPayload = {
      ...data, 
      movie: selectedMovie.title,   
    date: selectedDate,          
    time: selectedTime,          
    seats: selectedSeats,        
    };



try{
   const response=await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/book/booking`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify(bookingPayload)
     
    });

console.log(response);
if(response.ok){
  await bookingData();
}


}
catch(error){
  console.log('Error While Booking Data',error);
}






    dispatch(confirmBooking(bookingPayload));

   
    reset({ name: "", email: "", phone: "" });
  
  };

  const handleMovieChange = (e) => {
    dispatch(setMovie(Number(e.target.value)));
  };



 const handleDateChange = (selectedDate) => {
  dispatch(setDate(selectedDate ? selectedDate.format("YYYY-MM-DD") : ""));
  };

  const handleTimeChange = (e) => {
    dispatch(setTime(e.target.value));
  };

  const renderSeats = () => {
    if (!selectedMovie || !selectedDate || !selectedTime) {
      return <p className="renderSeatPara">Please select movie, date, and time to see seats.</p>;
    }

    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const showKey = `${selectedDate}_${selectedTime}`;
    const bookedSeats = selectedMovie.showtimes?.[showKey] || [];
    
    return (
      // <div className="grid grid-cols-[repeat(10,40px)] sm:gap-1 md:gap-1.5 lg:gap-2  justify-center gap-0.5    text-gray-300">
<div className="seat-grid">
        {rows.map((row) =>
          cols.map((col) => {
            const seatId = `${row}${col}`;
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);
            let seatClass = "seat";
            if (isBooked) seatClass +=" booked";
            else if (isSelected) seatClass +=" selected";

            return (
              <div
                key={seatId}
                className={seatClass}
                onClick={() => !isBooked && dispatch(toggleSeat(seatId))}
              >
                {seatId}
              </div>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto  mt-30 flex flex-col lg:flex-row space-y-6 items-center w-full justify-center  text-center">

<div className="px-2 flex flex-col w-full lg:w-1/2 min-h-screen justify-center items-center md:text-left">

      <h2 className=" text-3xl h-10 md:h-13 lg:h-16 font-semibold md:font-bold md:text-4xl lg:text-5xl  mb-8 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text">Movie Booking Page</h2>
      <div className="relative w-full max-w-xl bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10">

      <form  className="w-full  text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 " onSubmit={handleSubmit(onSubmit)}>
        <div className="form-grid">
        
          <Controller
          className=""
         name='name'
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
          label: { color: "#1E40AF" },
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
          label: { color: "#1E40AF" },
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
         name='phone'
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
          label: { color: "#1E40AF" },
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
  name="movie"
  control={control}
  rules={{ required: 'Movie Name is Required' }}
  defaultValue=""
  render={({ field, fieldState }) => (
    <FormControl
      fullWidth
      margin="normal"
      error={!!fieldState.error}
      sx={{
        "& .MuiInputLabel-root": { color: "#1E40AF" },
        "& .MuiInputLabel-root.Mui-focused": { color: "#34D399", fontWeight: 400 },
        "& .MuiSelect-select": { color: "#9CA3AF" }, 
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
        "& .MuiFormHelperText-root": { color: "#F87171" },
      }}
    >
      <InputLabel>Movie</InputLabel>
      <Select
        {...field}
        label="Movie"
        onChange={(e) => {
          field.onChange(e);
          handleMovieChange(e);
        }}
      >
        <MenuItem value="">-- Select Movie --</MenuItem>
        {movies.map((m) => (
          <MenuItem key={m.id} value={m.id}>
            {m.title}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{fieldState.error?.message}</FormHelperText>
    </FormControl>
  )}
/>

         


         
          
<Controller
  name="time"
  control={control}
  rules={{ required: "Time is Required" }}
  defaultValue=""
  render={({ field, fieldState }) => (
    <FormControl
      fullWidth
      margin="normal"
      error={!!fieldState.error}
      sx={{
        "& .MuiInputLabel-root": { color: "#1E40AF" },
        "& .MuiInputLabel-root.Mui-focused": { color: "#34D399", fontWeight: 400 },
        "& .MuiSelect-select": { color: "#9CA3AF" },
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
        "& .MuiFormHelperText-root": { color: "#F87171" },
      }}
    >
      <InputLabel>Time</InputLabel>
      <Select
        {...field}
        label="Time"
             onChange={(newValue) => {
  field.onChange(newValue);   
  handleTimeChange(newValue);
}} 
        value={field.value}                
      >
        <MenuItem value="">-- Select Time --</MenuItem>
        <MenuItem value="3:00 PM">3:00 P.M</MenuItem>
        <MenuItem value="6:00 PM">6:00 P.M</MenuItem>
        <MenuItem value="9:00 PM">9:00 P.M</MenuItem>
        <MenuItem value="10:30 PM">10:30 P.M</MenuItem>
      </Select>
      <FormHelperText>{fieldState.error?.message}</FormHelperText>
    </FormControl>
  )}
/>

 <Controller
  name="date"
  control={control}
  rules={{ required: "Date is required" }}
  defaultValue={null} 
  render={({ field, fieldState }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...field}
        label="Date"
        value={field.value}
        onChange={(newValue) => {
  field.onChange(newValue);   
  handleDateChange(newValue);
}}
        slotProps={{
          textField: {
            fullWidth: true,
            error: !!fieldState.error,
            helperText: fieldState.error?.message,
            sx: {
              input: { color: "#9CA3AF" },
              "& .MuiInputLabel-root": { color: "#1E40AF" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#34D399", fontWeight: 400 },
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
              "& .MuiFormHelperText-root": { color: "#F87171" },
            },
          },
        }}
      />
    </LocalizationProvider>
  )}
/>

       
          <div className=" booking-form-master">
            <h3 className="mt-7 mb-4 text-2xl text-blue-400 text-center text-bold bg-clip-text ">Select Seats</h3>
            {renderSeats()}
          </div>
        </div>

<div className="flex items-center justify-center w-full">
 <button type='submit' className=' text-white mt-4 mb-2 group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300 cursor-pointer  '>           
                    <span> {isSubmitting? 'Loading....':'Confirm Booking'}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   </button>
                   </div>
          {
isSubmitSuccessful?(
 <div className='animate-in slide-in-from-top duration-300 delay-200 inline-flex items-center px-2 sm:px-4 lg:px-5 space-x-2 max-w-1xl rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all  hover:scale-102 mb-4 sm:mb-6 lg:mb-8'>           
                  <span className='text-sm text-blue-400'> {
      isSubmitSuccessful && <p className="text-center md:text-left">Congratulations <span className="font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text ">"{bookingDetails[bookingDetails.length-1].name}"</span> you have booked seats "{bookingDetails[bookingDetails.length-1].seats.join(', ')}" for <span className="font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text ">"{bookingDetails[bookingDetails.length-1].movie}"</span>  on <span className="font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text ">"{bookingDetails[bookingDetails.length-1].date}"</span></p>
    }</span>
   </div>
):(
  null
)
}
      </form>
      </div>
    </div>
    <div className="flex flex-col order-2 w-full md:w-1/2 ">

            <h2 className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text text-4xl font-semibold">Book The Movies of your choice</h2>


   {
    isSubmitSuccessful?(
<div className='inline-flex items-center px-2 sm:px-4 lg:px-5 space-x-2 max-w-1xl rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all animate-in slide-in-from-top duration-700 delay-200  hover:scale-102 mb-4 sm:mb-6 lg:mb-8'>
                  
                  <span className='text-sm text-blue-400'> {
      isSubmitSuccessful && <p>Congratulations <span className="font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text ">"{bookingDetails[bookingDetails.length-1].name}"</span> you have booked seats<span className="font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text ">"{bookingDetails[bookingDetails.length-1].seats.join(', ')}" </span> for <span className="font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text ">"{bookingDetails[bookingDetails.length-1].movie}"</span>  on <span className="font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text ">"{bookingDetails[bookingDetails.length-1].date}"</span></p>
    }</span>
   </div>
    ):(
      null
    )
}

<div className=' mt-10 p-2 shadow-2xl shadow-blue-500'>

    <div
      className="   slider"
      style={{
        "--width": "150px",
        "--height": "200px",
        "--quantity":"10"
      }}
    >
      <div className="list">
        <div className="item border rounded-lg" style={{"--position":"1"}}><img  src="https://image.tmdb.org/t/p/w300/7JzOmJ1fIU43I3gLHYsY8UzNzjG.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"2"}}><img src="https://image.tmdb.org/t/p/w300/nv1sdEx7DBjguoEovgiOyuSpSxh.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"3"}}><img src="https://image.tmdb.org/t/p/w300/itAKcobTYGpYT8Phwjd8c9hleTo.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"4"}}><img src="https://image.tmdb.org/t/p/w300/zYIVygrrdD9lqmXdjuoyehnF1ae.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"5"}}><img src="https://image.tmdb.org/t/p/w300/a8jmJPs5eZBARmnuEEvZwbjwyz4.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"6"}}><img src="https://image.tmdb.org/t/p/w300/dgbLnnEJIGldXOMt6OWy3X1l0AC.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"7"}}><img src="https://image.tmdb.org/t/p/w300/c7n1fZuUMeEVspvzOrIUCz4XdCe.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"8"}}><img src="https://image.tmdb.org/t/p/w300/1D3y4by7gJ9X2eowG8NpBt0cPIj.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"9"}}><img src="https://image.tmdb.org/t/p/w300/qNeV8JtTdsfQCtYcwNCf33hldg8.jpg" /></div>
        <div className="item border rounded-lg" style={{"--position":"10"}}><img src="https://image.tmdb.org/t/p/w300/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" /></div>
       
      </div>
    </div>
    </div>
    
    <div className="mt-10 text-lg flex flex-row items-center justify-center text-blue-500 bg-linear-to-b from from-blue-500 via-white-300 to-cyan-500 text-semibold bg-clip-text
     ">
      <div className=" mt-6 bg-blue-300/10 hover:bg-blue-200/10 flex flex-row gap-2 border rounded-full border-gray/300 justify-center items-center p-2 group">
     <Link to='/bookDataRetrieve' className=" "  >Go to see the Global Booking Data</Link>
     <ArrowUpRight className='w-5 h-5 sm:w-5 sm:h-5 text-white  cursor-pointer group-hover:-translate-y-1 transition-transform duration-300'/>
     </div>
        
    </div>
    </div>
    </div>
  );
};

export default BookingPage;
