import { ADD_CART_DATA,REMOVE_CART_DATA,DELETE_CART_DATA } from "./CartDataConstants";

export const getCartData=(data=[],action)=>{
switch(action.type){
    case ADD_CART_DATA:
        const existingItem=data.find((user)=>user.id===action.payload.id);
        if(existingItem){
            return data.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item);
        }
        else{
            return [...data,{...action.payload,quantity:1}]
        }
    case REMOVE_CART_DATA:
        return [];
    case DELETE_CART_DATA:
        const targetData=data.find((user)=>user.id===action.payload.id);
        if(targetData.quantity>1){
            return data.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity-1}:item)
        }
        else{
            return data.filter((item)=>item.id!==action.payload.id)
        }
        default:
            return data
  }
}