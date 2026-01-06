import { ADD_CONTACTUS_DATA,DELETE_CONTACTUS_DATA,EMPTY_CONTACTUS_DATA,EDIT_CONTACTUS_DATA } from "./ContactUsConstants"



export const addContactUsData=(data)=>{
return{
type:ADD_CONTACTUS_DATA,
payload:data, 
   }   
}


export const deleteContactUsData=(data)=>{
    return{
        type:DELETE_CONTACTUS_DATA,
        payload:data,
    }
}
export const emptyContactUsData=(data)=>{
    return{
        type:EMPTY_CONTACTUS_DATA,
        payload:data,
    }
}

export const editContactUsData=(data)=>{
   return{
     type:EDIT_CONTACTUS_DATA,
     payload:data,
    } 
}



