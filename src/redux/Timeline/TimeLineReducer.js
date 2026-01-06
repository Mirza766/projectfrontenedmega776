import { SET_BOOKED_SLOTS,ADD_TIMELINE_DATA,DELETE_TIMELINE_DATA,EMPTY_TIMELINE_DATA,EDIT_TIMELINE_DATA} from "./TimeLineConstants"
import {v4 as uuidv4} from "uuid"

const initialState={
    
        PersonData:[],   
    BookedSlots:[]
    }

export const TimeLineData=(state=initialState,action)=>{
    switch(action.type){
      case ADD_TIMELINE_DATA:
        return {...state,
            PersonData:[...state.PersonData,{id:uuidv4(),...action.payload}],
            BookedSlots:[...state.BookedSlots,action.payload.SelectedSlot]
        }
        case EMPTY_TIMELINE_DATA:
            return []
        case SET_BOOKED_SLOTS:
            return {
             ...state,
             BookedSlots: action.payload 
    };
        case DELETE_TIMELINE_DATA:
            return state.filter((data)=>(
                data.id!==action.payload
            ))
        case EDIT_TIMELINE_DATA:
            return state.map((data)=>(
                data.id===action.payload.id?{...data,...action.payload}:data
            ))
        default:
        return state
    }
}

