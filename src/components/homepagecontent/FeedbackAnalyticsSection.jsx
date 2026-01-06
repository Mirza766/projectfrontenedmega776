

import { MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth } from '../../AuthContext/AuthContext';


const AnimatedCircularProgress = ({ percentage, colorClass, icon: Icon, label,total}) => {
  const radius = 48; 
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;


  return (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all cursor-pointer duration-300 hover:scale-102 mb-4 sm:mb-6 lg:mb-8">
      <div className="relative w-24 h-24 ">
       
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90 overflow-visible"
        >
       
          <circle
            className="text-slate-700"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
       
          <circle
            className={`${colorClass} transition-all duration-1000 ease-out`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
   
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
           {Icon && <Icon className={`w-5 h-5 mb-1 ${colorClass}`}/>}
          <span className="text-lg font-bold">{percentage}%</span>
        </div>
      </div>
       <p className="text-gray-300 text-sm mt-2 font-medium">{label}</p>
       <p className="text-gray-500 text-xs">{percentage > 0 ? `${(percentage / 100 * total).toFixed(0)} count` : '0 count'}</p>
    </div>
  );
};



function FeedbackFormAnalyticsSection() {
 const {Feedback}=useAuth();
  // const FeedbackForm = useSelector((state) => state.FeedbackData);
// const FeedbackForm =Feedback;
// console.log("FeedbackForm from Redux",FeedbackForm)
// console.log("FeedbackForm from database",Feedback)

  const total = Feedback.length;
  const positiveCount = Feedback.filter(item => item.queryType === 'Positive').length;
  const negativeCount = Feedback.filter(item => item.queryType === 'Negative').length;

  const positivePercentage = total > 0 ? Math.round((positiveCount / total) * 100) : 0;
  const negativePercentage = total > 0 ? Math.round((negativeCount / total) * 100) : 0;
const successPercentage =
  total > 0 ? Math.round((positiveCount / total) * 100) : 0;

  return (
    <div className=' max-w-7xl mx-auto flex flex-col gap-3 '>
     
      <div className='pl-3 flex gap-2 cursor-pointer  transition-all duration-300 hover:scale-102 mb-4 sm:mb-6 lg:mb-8'>
        <span className=' text-xl bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text  font-bold'>Analytics</span>
        <MessageSquare className='h-7 w-7 border rounded-md text-blue-500 border-blue-500/20 p-1 bg-blue-300/20 ' />
      </div>

     
      {total > 0 ? (
        <div className='flex flex-col h-auto'>
         <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 gap-4 mb-6 p-4 bg-slate-900/30 rounded-2xl backdrop-blur-md border border-slate-800/80 shadow-lg">
         <AnimatedCircularProgress 
            percentage={positivePercentage} 
            colorClass="text-emerald-500" 
            label="Positive Feedback"
            icon={ThumbsUp}
            total={total}
         />
          <AnimatedCircularProgress 
            percentage={negativePercentage} 
            colorClass="text-rose-500" 
            label="Negative Feedback"
            icon={ThumbsDown}
            total={total}
         />

       
       </div>
       <div className=''>
            <AnimatedCircularProgress 
            percentage={successPercentage} 
            colorClass="text-green-500" 
            label="Success Rate"
            icon={MessageSquare}
            total={total}
         />
        </div>
       </div>
      ) : (
        
        <div className="p-4 mb-6 bg-slate-900/30 rounded-2xl text-gray-400 text-center">
            No analytics available yet.
        </div>
      )}

    </div>
  )
}

export default FeedbackFormAnalyticsSection