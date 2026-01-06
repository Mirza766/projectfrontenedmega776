import React, { Children, useEffect, useMemo, useState } from "react";
import SubscriptionContext from "./SubscriptionContext";

const SubscriptionContextProvider=({children})=>{

const [addSubscription,setAddSubscription]=useState(()=>{
    const saved=localStorage.getItem('subscription');
    return saved?JSON.parse(saved):[];
});

useEffect(()=>{
 localStorage.setItem('subscription',JSON.stringify(addSubscription));
},[addSubscription]);

const AddSubscription=(updater)=>{
    setAddSubscription((prev)=>{
        if (typeof updater==='function'){
          return updater(prev);
}
 return  [...prev,{id:Date.now(),...updater}]
})
}

const DeleteSubscription=(id)=>{
    setAddSubscription((prev)=>prev.filter((subscriber)=>subscriber.id!==id))
}

const updateSubscription=(id,newData)=>{
    setAddSubscription((prev)=>prev.map((subsc)=>
    subsc.id===id?{...subsc,...newData}:subsc));
}
const value=useMemo(()=>({
    addSubscription,AddSubscription,DeleteSubscription,updateSubscription
}),[addSubscription,AddSubscription,DeleteSubscription,updateSubscription])
    return(
        <SubscriptionContext.Provider value={value}>
      {children}
        </SubscriptionContext.Provider>
    )
}

export default SubscriptionContextProvider