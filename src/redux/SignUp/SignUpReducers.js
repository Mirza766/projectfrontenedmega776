import { data } from "react-router-dom";
import { ADD_SIGNUP_DATA,DELETE_SIGNUP_DATA,EMPTY_SIGNUP_DATA } from "./SignUpConstants";
import {nanoid} from '@reduxjs/toolkit'


export const SignUpFormData=(data=[],action)=>{
switch(action.type){
    case ADD_SIGNUP_DATA:
        return [...data,{id:nanoid(),...action.payload,dob:new Date(action.payload.dob).toISOString()}];

    case EMPTY_SIGNUP_DATA:
        return []
    case DELETE_SIGNUP_DATA:
      return data.filter((user)=>user.id!==action.payload)
    default:
    return data
    }
  

}

