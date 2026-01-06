import React, { useCallback, useMemo } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'
import { ContactUsFormData } from '../../redux/ContactUs/ContactUsReducer'
import { editContactUsData,deleteContactUsData,emptyContactUsData } from '../../redux/ContactUs/ContactUsActions';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "../stylingSheets/ContactUsRetrieveData.css";
import { ArrowRight, Delete, DeleteIcon, Edit } from 'lucide-react';
import { useAuth} from '../../AuthContext/AuthContext';
import { toast } from 'react-toastify';

const ContactCard=React.memo(({user,onEdit,onDelete,onConfirm})=>{

return (
<div className='relative w-full  bg-white/5 backdrop-blur-xl rounded-2xl p-2 sm:p-3  shadow-2xl hover:shadow-blue-400 transition-all delay-100 duration-300 border border-white/10 hover:-translate-y-2 '>
  <div className=' w-full  text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 ' >
        <p  className='text-gray-200'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>User ID: </span>{user.id}</p>
        <p className='text-gray-200'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Full Name: </span>{user.fullName}</p>
        <p className='text-gray-200'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Email: </span>{user.email}</p>
        <p className='text-gray-200'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Query type: </span>{user.queryType}</p>
        <p className='text-gray-200'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Phone Number: </span>{user.phoneNumber}</p>
        <p className='text-gray-200'><span className='font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Message: </span>{user.message}</p>
        <div className='flex flex-row gap-2 items-center justify-center mt-4'>

             <button className='group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 cursor-pointer transition-all duration-300' onClick={()=>onEdit(user.id)}>
                    <span>Edit</span>
                    <Edit className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   </button>

                     <button className='group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 cursor-pointer transition-all duration-300' onClick={()=>onDelete(user.id)}>
                    <span>Delete</span>
                    <Delete className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   </button>
        </div>
        <div className='flex justify-center w-full'>

          <button className='group mt-3 flex items-center  gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                   sm:px-8 sm:py-4 py-3 hover:scale-102 cursor-pointer transition-all duration-300' onClick={()=>onConfirm(user.id)}>
            Confirm Booking
          </button>
        </div>
        </div>
        </div>
)

})


function ContactUsRetrieveData() {


const {contactUser,ContactData}=useAuth();

const dispatch=useDispatch();
const navigate=useNavigate();
const ContactUsUsers=useSelector((state)=>state.ContactUsFormData);


const ClearData=useCallback((id)=>dispatch(deleteContactUsData(id)),[dispatch])

const onEdit=useCallback((id)=>navigate(`/contactusedit/${id}`),[navigate])

const confirmContact=useCallback(async(id)=>{

    try{
      await new Promise((resolve)=>setTimeout(resolve,1000));
     const matchedRecord = ContactUsUsers.find((contact) => contact.id === id);
  
    const response=await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/form/contact`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify(matchedRecord)
    });
    if(response.ok){
      toast.success("Query Submitted SuccessFully")
      ClearData(matchedRecord.id);
      await ContactData();
    }
    else{
      toast.error("Query Submission Denied")
    }
  
}
 catch(error){
      console.error("Sync Error:", error.message);
    }
  },[ContactUsUsers]);

    return (
   <div className='cont-retrieve-masterclass'>
   
      <h2 className="font-bold bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 text-3xl sm:text-4xl text-transparent bg-clip-text md:text-5xl lg:text-6xl  mb-10 mt-7 text-center">Contact Us Users Global Data</h2>
 
    <div className='text-white px-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
   
     {
      ContactUsUsers.map((user)=>(
        <ContactCard key={user.id} user={user} onEdit={onEdit} onDelete={ClearData} onConfirm={confirmContact}/>
      ))
     }
        </div>
   </div>
  )
}

export default ContactUsRetrieveData