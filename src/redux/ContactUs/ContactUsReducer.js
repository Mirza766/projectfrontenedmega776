import { editContactUsData } from "./ContactUsActions";
import { ADD_CONTACTUS_DATA,DELETE_CONTACTUS_DATA,EMPTY_CONTACTUS_DATA,EDIT_CONTACTUS_DATA } from "./ContactUsConstants"
import {v4 as uuidv4} from "uuid"

export const ContactUsFormData=(data=[],action)=>{
    switch(action.type){
        case ADD_CONTACTUS_DATA:
        return [...data,{id:uuidv4(),...action.payload}]

        case EMPTY_CONTACTUS_DATA:
        return []

        case EDIT_CONTACTUS_DATA:
        return data.map((formData)=>(
            formData.id===action.payload.id?{...formData,...action.payload}:formData 
        ))

        case DELETE_CONTACTUS_DATA:
            return data.filter((formData)=>(
                formData.id!==action.payload
            ))

        default:
            return data;
    }
       
}

