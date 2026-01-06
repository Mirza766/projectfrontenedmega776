import { combineReducers } from "redux";
import { ContactUsFormData } from "../redux/ContactUs/ContactUsReducer";
import {SignUpFormData } from "../redux/SignUp/SignUpReducers";
import { LoginFormData } from "../redux/Login/LoginReducers";
import { getMovieData } from "../redux/Product/ProductReducers";
import { getCartData } from "../redux/CartData/CartDataReducers";
import MovieBooking from "../redux/Booking/BookingReducers";

import FeedbackData from "../redux/FeedbackSection/FeedbackSectionReducer";
import { TimeLineData } from "../redux/Timeline/TimeLineReducer";

export default combineReducers({
    ContactUsFormData,
    SignUpFormData,
    LoginFormData,
    getMovieData,
    getCartData,
    MovieBooking,
    FeedbackData,
    TimeLineData
    
})

