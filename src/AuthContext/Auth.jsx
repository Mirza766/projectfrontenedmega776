import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState();
    const [bookingUser,setBookingUser]=useState([]);
    const [contactUser,setContactUser]=useState([]);
    const [bookedCallData,setBookedCallData]=useState();
    const [subscData,setSubscData]=useState();
    const [cartData,setCartData]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const [Feedback,setFeedback]=useState();
    const storetokeninLocal = (token) => {
        setToken(token);
        return localStorage.setItem('token', token);
    };
    const AuthorizationToken=`Bearer ${token}`;

    let isLoggedIn = !!token;

    const logoutUser = () => {
        setToken('');
        setUser(null);
        return localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        if (!token) {
         setIsLoading(false);
            return;
        }
        try {
            setIsLoading(true)
            const response = await fetch('https://megaprojectmoviebookingapp-1.onrender.com/api/auth/user', {
                method: 'GET',
                headers: { Authorization:AuthorizationToken},
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }finally{
            setIsLoading(false);
        }
    };

const ContactData=async()=>{
       if (!token) return;
        try {
            const response = await fetch('https://megaprojectmoviebookingapp-1.onrender.com/api/form/getcontact', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setContactUser(data);
               
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
}

const getCartData=async()=>{
       if (!token) return;
        try {
            const response = await fetch('https://megaprojectmoviebookingapp-1.onrender.com/api/cart/getorder', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setCartData(data);
            
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
}

const getCallBookingData=async()=>{
       if (!token) return;
        try {
            const response = await fetch('https://megaprojectmoviebookingapp-1.onrender.com/api/bookcall/getbookedcall', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setBookedCallData(data);
               
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
}

 const getAllFeedbacksData = async () => {
  
    try {
     
      const response = await fetch('https://megaprojectmoviebookingapp-1.onrender.com/api/feedback/getfeedback', {
        method: 'GET',
        headers: { Authorization: AuthorizationToken },
      });

      if (response.ok) {
        const res_data = await response.json();
        const finalData = Array.isArray(res_data) ? res_data : (res_data.users || res_data.msg || []);
        setFeedback(finalData);
  
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
   
    }
  };


    const bookingData=async()=>{
         if (!token) return;
        try {
            const response = await fetch('https://megaprojectmoviebookingapp-1.onrender.com/api/book/getbooking', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setBookingUser(data);
                
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
    }


        const SubscriptionData=async()=>{
         if (!token) return;
        try {
            const response = await fetch('https://megaprojectmoviebookingapp-1.onrender.com/api/subscription/getsubscription', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setSubscData(data);
               
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
    }

    useEffect(() => { 
        getCartData();
         ContactData();
        userAuthentication();
        bookingData();
        getCallBookingData();
        SubscriptionData();
        getAllFeedbacksData();
    }, [token]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storetokeninLocal, logoutUser, user,bookingUser,getCartData, 
        bookingData, 
        ContactData,contactUser,cartData,getCallBookingData,bookedCallData,subscData,SubscriptionData,AuthorizationToken,isLoading,Feedback,getAllFeedbacksData}}>
            {children}
        </AuthContext.Provider>
    );
};
