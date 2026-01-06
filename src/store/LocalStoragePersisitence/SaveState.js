import FeedbackForm from "../../components/homepagecontent/FeedbackDataEntery";
import MovieBooking from "../../redux/Booking/BookingReducers";
import { getCartData } from "../../redux/CartData/CartDataReducers";
import { ContactUsFormData } from "../../redux/ContactUs/ContactUsReducer"
import FeedbackData from "../../redux/FeedbackSection/FeedbackSectionReducer";
import { SignUpFormData } from "../../redux/SignUp/SignUpReducers";

export const saveState=(data)=>{
    try{
    const stateToSave={
        // ContactUsFormData:data.ContactUsFormData,
        // SignUpFormData:data.SignUpFormData,
        // LoginFormData:data.LoginFormData,
        // getCartData:data.getCartData,
        // MovieBooking:data.MovieBooking,
        // FeedbackData:data.FeedbackData
    };
    // localStorage.setItem("appData",JSON.stringify(stateToSave));

    }
    catch(err){
        console.error("Local Storage Error: ",err)
    }
}