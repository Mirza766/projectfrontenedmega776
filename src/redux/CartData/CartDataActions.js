import { ADD_CART_DATA,DELETE_CART_DATA,REMOVE_CART_DATA } from "./CartDataConstants";


export const addDataToCart=(data)=>{
    return {
        type:ADD_CART_DATA,
        payload:data
    }
}

export const removeDataFromCart=()=>{
    return{
        type:REMOVE_CART_DATA
    }
}

export const deleteDataFromCart=(data)=>{
    return{
        type:DELETE_CART_DATA,
        payload:data,
    }
}

