import { GET_PRODUCT_DATA,SET_PRODUCT_DATA } from "./ProductConstants";


export const getMovieData=(data=[],action)=>{
    switch(action.type){
  case SET_PRODUCT_DATA:
    return [...action.payload];
    default:
        return data;
    }


}
