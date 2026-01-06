import { SET_BOOKED_SLOTS,ADD_TIMELINE_DATA,DELETE_TIMELINE_DATA,EMPTY_TIMELINE_DATA,EDIT_TIMELINE_DATA} from "./TimeLineConstants"



export const addTimelineData=(data)=>{
return{
type:ADD_TIMELINE_DATA,
payload:data, 
   }   
}


export const deleteTimelineData=(data)=>{
    return{
        type:DELETE_TIMELINE_DATA,
        payload:data,
    }
}

export const setBookedSlots = (data) => {
    return {
        type: SET_BOOKED_SLOTS,
        payload: data,
    };
};
export const emptyTimelineData=(data)=>{
    return{
        type:EMPTY_TIMELINE_DATA,
        payload:data,
    }
}

export const editTimelineData=(data,id)=>{
   return{
     type:EDIT_TIMELINE_DATA,
     payload:data,
    } 
}



