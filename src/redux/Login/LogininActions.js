import { ADD_LOGIN_DATA,DELETE_LOGIN_DATA,EMPTY_LOGIN_DATA} from "./LoginConstants"

export const addLoginData=(data)=>{
    return{
        type:ADD_LOGIN_DATA,
        payload:data,
    }
}

export const emptyLoginData=()=>{
    return{
        type:EMPTY_LOGIN_DATA,

    }
}


export const deleteLoginData=(data)=>{
    return{
        type:DELETE_LOGIN_DATA,
        payload:data
    }
}
