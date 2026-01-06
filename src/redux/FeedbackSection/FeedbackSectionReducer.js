import { ADD_FEEDBACK_DATA,EMPTY_FEEDBACK_DATA } from "./FeedbackSectionConstants";
import {v4 as uuidv4} from 'uuid'

const FeedbackData=(data=[],action)=>{
switch(action.type){
    case ADD_FEEDBACK_DATA:
       return [...data,{id:uuidv4(),...action.payload}]
    case EMPTY_FEEDBACK_DATA:
        return [];
    default:
        return data
  }
}

export default FeedbackData