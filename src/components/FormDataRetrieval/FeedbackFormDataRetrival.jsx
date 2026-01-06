import { Delete, MessageSquare } from 'lucide-react';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { emptyFeedbackData } from '../../redux/FeedbackSection/FeedbackSectionActions';
import { useAuth } from '../../AuthContext/AuthContext';

function FeedbackFormDataRetrival() {
const {Feedback}=useAuth();

const dispatch=useDispatch();

const FeedbackForm=useSelector((state)=>state.FeedbackData);


const placeholder="https://www.google.com/search?sca_esv=b8d16794a32ebd8e&rlz=1C1UEAD_enPK1024PK1024&sxsrf=AE3TifPOEJvpVijCR-arjr5uOWYHlb_IJw:1765773522693&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeoJTKjrFjVxydQWqI2NcOha3O1YqG67F0QIhAOFN_ob1aWGQOelbxvw0PKo40QtwvZMGAT8mh52EQduMaEwrkL-OLEnIgHQ7APoKxFV9hua55yCiA1pSqi8NqYaykPBkHQYt8sF3mLIH7UYTHYwhcJqGpMVh&q=random+placeholder+image&sa=X&ved=2ahUKEwjytsv84r6RAxX3WUEAHXyfIwIQtKgLegQIFxAB&biw=1366&bih=599&dpr=1#sv=CAMSVhoyKhBlLVYtVFFkTnZHRG05VE9NMg5WLVRRZE52R0RtOVRPTToOTlQ4WDVjV0hxZzlNVU0gBCocCgZtb3NhaWMSEGUtVi1UUWROdkdEbTlUT00YADABGAcgju3yhwYwAkoKCAIQAhgCIAIoAg48"


  return (

<div  className=' max-w-7xl mx-auto flex flex-col gap-3'>
<div className='pl-3 flex gap-2 cursor-pointer  transition-all duration-300 hover:scale-102 mb-4 sm:mb-6 lg:mb-8'>
 <span className='bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text text-lg font-bold'>{Feedback.length} Comments</span> 
 <MessageSquare className='h-7 w-7 border rounded-md text-blue-500 border-blue-500/20 ' /> 

</div>
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-3'>
        {
            Feedback.map((data)=>(
                <div key={data._id} className='flex flex-col bg-slate-900/50  border gap-2 border-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 backdrop-blur-sm ' >     
                     <div className='flex flex-row space-x-3 '>  
                <div className='flex flex-col justify-center items-center'> 
                <img className='w-12 h-12 object-cover rounded-full' src={data.image || "/images/User-logo.png"} alt={data.name}/>
                </div>
                <div className='flex flex-col'>
                <p className='text-gray-300 text-lg  font-semibold'>{data.name}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full w-fit mt-1 font-medium
                    ${data.queryType === 'Positive' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                    {data.queryType}
                  </span>
                </div>
                </div>
                <p className=' font-base'>{data.message}</p>
                </div>
            ))
        }
    </div>
    <div className='items-center flex justify-center cursor-pointer' onClick={()=>dispatch(emptyFeedbackData())}>
      <Delete size={40} className='text-blue-500  border rounded-full p-1 bg-blue-200/20 hover:scale-105 transition-all delay-100 duration-500 '/>
    </div>
   </div>
  </div>
  )
}

export default FeedbackFormDataRetrival