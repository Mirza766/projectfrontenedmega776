import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { addFeedbackData } from "../../redux/FeedbackSection/FeedbackSectionActions";
import axios from "axios";
import { useAuth } from "../../AuthContext/AuthContext";
import {toast} from 'react-toastify'

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
const glassBgSx = {
           maxWidth:700,
        p: 5,
        textAlign:"center",
        borderRadius: 2,
        boxShadow: 3,
  background: 'linear-gradient(to right, rgba(17, 24, 39, 0.1), rgba(31, 41, 55, 0.1))',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
};


import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  Stack,
  FormHelperText,
  FormControl,
  InputLabel
} from "@mui/material";

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const { user, AuthorizationToken,getAllFeedbacksData  } = useAuth(); // Extract token
  
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      name: "",
      commentType: "",
      message: "",
    },
  });

  const [imageBase64, setImageBase64] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

  // Auto-fill user data
  const [userDataFilled, setUserDataFilled] = useState(false);
  useEffect(() => {
    if (user && !userDataFilled) {
      setValue("name", user.fullname);
      setUserDataFilled(true);
    }
  }, [user, setValue, userDataFilled]);

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const onSubmit = async (data) => {
    setStatus('uploading');
    setUploadProgress(0);

    // 1. Prepare FormData for Multer/Cloudinary
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('queryType', data.queryType); 
    formData.append('message', data.message);     
    
    if (file) {
      formData.append('image', file); // 'image' must match upload.single('image')
    }

    try {
 
      const response = await axios.post('https://megaprojectmoviebookingapp-1.onrender.com/api/feedback/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0;
          setUploadProgress(progress);
        },
      });

      if (response.status === 200) {
       console.log("Response",response.data);
       getAllFeedbacksData();
        dispatch(addFeedbackData(response.data.data));
        
        setStatus('success');
        toast.success("Feedback & Image uploaded successfully!");
        
     
        reset();
        setFile(null);
        setImageBase64("");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      setStatus('error');
      toast.error(error.response?.data?.msg || "Submission Failed");
    }
  };
  return (
    <Box 
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={glassBgSx}
    >
      <Typography variant="h4" mb={2}>
        Feedback
      </Typography>

      <Stack spacing={2}>
       
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Name"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={selectSx}
              fullWidth
            />
          )}
        />



         <Controller
          name='queryType'
          control={control}
          rules={{required: "Please select feedback type"}}
          render={({field,fieldState})=>(
            <FormControl fullWidth margin='normal' error={!!fieldState.error} sx={selectSx}>
            <InputLabel>Query Type</InputLabel>
            <Select 
            {...field}
            label='Query Type' sx={selectSx}>
              <MenuItem value="Positive">Positive</MenuItem>
        <MenuItem value="Negative">Negative</MenuItem>
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
           
            </FormControl>
          )}
          />
      

        <Controller
          name="message"
          control={control}
          rules={{ required: "Message is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Message"
              multiline
              rows={4}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={selectSx}
              fullWidth
            />
          )}
        />

      
        <Button variant="outlined" component="label" sx={selectSx}>
          Upload Image
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            sx={selectSx}
          />
        </Button>

    
     
        {imageBase64 && (
            <div>
          <Box
            component="img"
            display={"inline-block"}
            src={imageBase64}
            alt="Preview"
            sx={{ width: 120, borderRadius: 1, color:"white" }}
          />
          </div>
        )}
        {
            file && (
                <div className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text mb-7">
                    <p>File Name: {file.name}</p>
                    <p>File Size: {(file.size/1024).toFixed(2)}</p>
                    <p>Type: {file.type}</p>
                </div>
            )
        }

        {
        status==='uploading' && (
            <div className="w-full h-5 mb-10  bg-slate-800/20 border border-blue-500
             ">
                <div className="bg-[#34D399] h-full transition-all duration-300 "
  style={{ width: `${uploadProgress}%` }}>
                    <p>{uploadProgress}% upload</p>
                      
                </div>
            </div>
        )
        }
         {
            status==='success' && (
                <div className="text-center flex justify-center">

                <p className="  inline-flex items-center px-2 sm:px-4 lg:px-5 space-x-2 max-w-1xl rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all animate-in  slide-in-from-top duration-700 delay-300  mb-4 sm:mb-6 lg:mb-8">File Upload SuccessFull</p>
                </div>
            )
        }
        {
            status==='error' && (
                <p>Upload Failed. Please Try again</p>
            )
        }
      

        <Button type="submit" variant="contained" size="large">
          Submit Feedback
        </Button>
      </Stack>
    </Box>
  );
};

export default FeedbackForm;
