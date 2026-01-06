import React from "react";
import {v4 as uuidv4} from 'uuid';

import { SET_MOVIE,TOGGLE_SEAT,CONFIRM_BOOKING, SET_TIME, SET_DATE } from "./BookingConstants";
const initialState={
    movies:[
  {id:1, title:'Inception', showtimes:{
     "2025-11-09_3:00 PM": ["A1", "A2"],
        "2025-11-09_6:00 PM": [],
  }},
  {id:2, title:'Interstellar',showtimes:{}},
  {
  id:3, title:'The Dark Knight', showtimes:{} 
  }
    ],
    selectedMovie:null,
    selectedSeats:[],
    bookingDetails:[],
    selectedDate:'',
    selectedTime:'',

}


const MovieBooking=(state=initialState,action)=>{
    switch(action.type){
        case SET_MOVIE:
            return{
                ...state,
                selectedMovie:state.movies.find((movie)=>
                movie.id===Number(action.payload)),
                selectedSeats:[]
            }
        case SET_TIME:
            return {...state,selectedTime:action.payload,selectedSeats:[]}
        case SET_DATE:
            return {...state,selectedDate:action.payload,selectedSeats:[]}
        case TOGGLE_SEAT:
                const seat=action.payload;
                const selected=state.selectedSeats.includes(seat)?
                state.selectedSeats.filter((s)=>s!==action.payload):[...state.selectedSeats,seat];
                return {...state,selectedSeats:selected}

        case CONFIRM_BOOKING:
            if (!state.selectedMovie || !state.selectedDate || !state.selectedTime) return state
           const showKey=`${state.selectedDate}_${state.selectedTime}`
           const movieIdx=state.movies.findIndex((movie)=>movie.id===state.selectedMovie.id)
           const movie=state.movies[movieIdx];
           const showBooked=movie.showtimes[showKey] || [];
           const updatedShowtimes={
            ...movie.showtimes,
            [showKey]:[...showBooked,...state.selectedSeats]
           };
           const updatedMovie={...movie,showtimes:updatedShowtimes};
           const updatedMovies=[
            ...state.movies.slice(0,movieIdx),
            updatedMovie,
            ...state.movies.slice(movieIdx+1)
           ]

            return{
                ...state,
                movies:updatedMovies,
                selectedMovie:updatedMovie,
                bookingDetails:[
                    ...state.bookingDetails,
                    {
                        id:uuidv4(),
                        ...action.payload,
                        movie:updatedMovie.title,
                        date:state.selectedDate,
                        time:state.selectedTime,
                        seats:state.selectedSeats,
                        timestamp:Date.now()
                    },
                ],
                selectedSeats:[],
            };
            default:
                return state

    }
};

export default MovieBooking