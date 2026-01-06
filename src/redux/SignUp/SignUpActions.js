import { ADD_SIGNUP_DATA,DELETE_SIGNUP_DATA,EMPTY_SIGNUP_DATA } from "./SignUpConstants"

export const addSignUpData=(data)=>{
    return{
        type:ADD_SIGNUP_DATA,
        payload:data,
    }
}

export const emptySignUpData=()=>{
    return{
        type:EMPTY_SIGNUP_DATA,

    }
}


export const deleteSignUpData=(data)=>{
    return{
        type:DELETE_SIGNUP_DATA,
        payload:data
    }
}
