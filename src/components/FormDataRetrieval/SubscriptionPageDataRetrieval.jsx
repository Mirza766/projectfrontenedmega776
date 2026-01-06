import React, { useCallback, useContext } from 'react'
import SubscriptionContext from '../context/SubscriptionContext'
import { useAuth } from '../../AuthContext/AuthContext';
import {Button, TableCell} from '@mui/material';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';


const SubscriptionTableRow = React.memo(({ subscription, onDelete,confirmSubscribe }) => (
  <tr className="transition-all duration-300 hover:bg-blue-500/10">
    <td className="px-4 py-3 text-sm text-gray-200">{subscription.id}</td>
    <td className="px-4 py-3 text-sm text-gray-200">{subscription.name}</td>
    <td className="px-4 py-3 text-sm text-gray-200">{subscription.email}</td>
    <td className="px-4 py-3 text-sm text-gray-200">{subscription.phoneNumber}</td>
    <td className="px-4 py-3 text-blue-400 font-medium">{subscription.planName}</td>
    <td className="px-4 py-3 text-green-400 font-semibold">${subscription.price}</td>
    <td className="px-4 py-3">
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={() => onDelete(subscription.id)}
      >
        Delete
      </Button>
         
    </td>
    <td className='px-4 py-3'>
       <Button
      fullWidth
      variant="contained"
      size="small"
      onClick={() => confirmSubscribe(subscription.id)}
    >
      Confirm Subscription
    </Button>
    </td>
  </tr>
));



const SubscriptionMobileCard = ({ subscription, onDelete,confirmSubscribe }) => (
  <div className="md:hidden  bg-white/5 backdrop-blur-lg border border-white/10
   flex flex-col  justify-between 
   rounded-xl p-6 mb-4 max-w-2xl mx-auto">
    <Row label="ID" value={subscription.id} />
    <Row label="Name" value={subscription.name} />
    <Row label="Email" value={subscription.email} />
    <Row label="Phone" value={subscription.phoneNumber} />
    <Row label="Plan" value={subscription.planName} highlight="blue" />
    <Row label="Price" value={`$${subscription.price}`} highlight="green" />
<div className='flex flex-col gap-2'>
    <Button
      fullWidth
      variant="contained"
      color="error"
      size="small"
      onClick={() => onDelete(subscription.id)}
    >
      Delete Subscription
    </Button>
       <Button
      fullWidth
      variant="contained"
      size="small"
      onClick={() => confirmSubscribe(subscription.id)}
    >
      Confirm Subscription
    </Button>
    </div>
  </div>
);

const Row = ({ label, value, highlight }) => (
  <div className="flex justify-between gap-10 text-sm mb-2">
    <span className="text-gray-400">{label}</span>
    <span
      className={
        highlight === "blue"
          ? "text-blue-400 font-semibold"
          : highlight === "green"
          ? "text-green-400 font-bold"
          : "text-white"
      }
    >
      {value}
    </span>
  </div>
);





function SubscriptionDataRetrieval() {

const {addSubscription,DeleteSubscription}=useContext(SubscriptionContext);
const deleteSubscriber=useCallback((id)=>DeleteSubscription(id),[DeleteSubscription]);
const {SubscriptionData}=useAuth();
const confirmSubscription=useCallback(async(id)=>{

    try{
      await new Promise((resolve)=>setTimeout(resolve,1000));
     const matchedRecord = addSubscription.find((subsc) => subsc.id === id);
 
    const response=await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/subscription/subscriber`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify(matchedRecord)
    
    });
      const res_data = await response.json();
    if(response.ok){
      toast.success("Subscription Subscribed Successfully");
      DeleteSubscription(matchedRecord.id);
      await SubscriptionData();
    }
    else {
            toast.error(res_data.msg ? res_data.msg : "Email Already Exists");
          }
   console.log(response);
}
 catch(error){
      console.error("Sync Error:", error.message);
    }
  },[addSubscription]);

  return (
    <div className='pt-20 px:4 flex flex-col items-center sm:mx-auto justify-center'>
      <h2 className='cartData-head'>Subscriptions Data</h2>


<div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-2 w-full ">
  {addSubscription?.map(sub => (
    <SubscriptionMobileCard
      key={sub.id}
      subscription={sub}
      onDelete={deleteSubscriber}
      confirmSubscribe={confirmSubscription}
    />
  ))}
</div>


<table className="hidden md:table w-full max-w-xl mx-auto bg-white/5 backdrop-blur-xl shadow-2xl border border-white/10">
  <thead>
    <tr className="bg-slate-800 text-white">
      <th className="text-blue-500">User ID</th>
      <th className="text-blue-500">Name</th>
      <th className="text-blue-500">Email</th>
      <th className="text-blue-500">Phone</th>
      <th className="text-blue-500">Plan</th>
      <th className="text-blue-500">Price</th>
      <th className="text-blue-500"></th>
    </tr>
  </thead>
  <tbody>
    {addSubscription?.map(sub => (
      <SubscriptionTableRow
        key={sub.id}
        subscription={sub}
        onDelete={deleteSubscriber}
        confirmSubscribe={confirmSubscription}
      />
    ))}
  </tbody>
</table>
       
    </div>
  )
}

export default SubscriptionDataRetrieval