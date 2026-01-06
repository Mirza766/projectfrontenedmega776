import { SET_MOVIE,SET_TIME,TOGGLE_SEAT,CONFIRM_BOOKING, SET_DATE } from "./BookingConstants"


export const setMovie=(movieID)=>{
return {
    type:SET_MOVIE,
    payload:movieID
}
}

export const setTime=(time)=>{
    return{
        type:SET_TIME,
        payload:time
    }
}

export const setDate=(date)=>{
    return{
        type:SET_DATE,
        payload:date
    }
}


export const toggleSeat=(seat)=>{
    return{
        type:TOGGLE_SEAT,
        payload:seat
    }
}

export const confirmBooking=(bookingData)=>{
    return {
        type:CONFIRM_BOOKING,
        payload:bookingData
    }
}