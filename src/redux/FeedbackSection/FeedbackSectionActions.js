import { ADD_FEEDBACK_DATA,EMPTY_FEEDBACK_DATA } from "./FeedbackSectionConstants";

export const addFeedbackData=(data)=>{
    return{
        type:ADD_FEEDBACK_DATA,
        payload:data,
    }
}
export const emptyFeedbackData=()=>{
    return{
        type:EMPTY_FEEDBACK_DATA,
                   
    }
}