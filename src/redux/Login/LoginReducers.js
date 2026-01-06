import { data } from "react-router-dom";
import { ADD_LOGIN_DATA,DELETE_LOGIN_DATA,EMPTY_LOGIN_DATA } from "./LoginConstants";
import {nanoid} from '@reduxjs/toolkit'


export const LoginFormData=(data=[],action)=>{
switch(action.type){
    case ADD_LOGIN_DATA:
        return [...data,{id:nanoid(),...action.payload}];

    case EMPTY_LOGIN_DATA:
        return []
    case DELETE_LOGIN_DATA:
      return data.filter((user)=>user.id!==action.payload)
    default:
    return data
    }
  

}

