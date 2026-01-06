


import React from 'react'
import { useNavigate } from 'react-router-dom'
const users = ['Mirza', 'Ahmad', 'Furqan', 'Raza', 'Irtaza', 'Abdul Rehman']






function TimeLine() {

const navigate=useNavigate();
const NavigateToConnectPage=(id)=>{
navigate(`/connectpage/${id}`)

}

  return (
    <div className='mt-24 text-white flex flex-col space-y-4 max-w-7xl mx-auto'>
      <h2 className='font-bold text-md sm:text-xl md:text-2xl lg:text-4xl lg:h-14 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text mb-7 text-center'>
        Availability of our Trusted agents
      </h2>

      <div className=' relative h-[500px]  overflow-x-auto p-8'>
             <div
  className="absolute z-50 border border-white/5 p-1 rounded-xl hover:shadow-lg hover:scale-102 delay-100 transition-all duration-500 hover:shadow-blue-400 cursor-pointer"
  style={{
    top: "60px",
    left: "400px",
    width: "180px",
    background: "linear-gradient(135deg, #f72585, #ff6b96)",
  }}
 onClick={()=>NavigateToConnectPage(1)}>
  <span className='block text-xs'>Tuesday</span>
  <span className='block text-xs'>8:00 A.M - 10:00 A.M</span>
</div>

<div
  className="absolute z-50 border border-white/5 p-1 rounded-xl hover:shadow-lg hover:scale-102 delay-100 transition-all duration-500 hover:shadow-blue-400 cursor-pointer"
  style={{
    top: "230px",
    left: "200px",
    width: "150px",
    background: "linear-gradient(135deg, #4cc9f0, #70e4ff)",
  }}
  onClick={()=>NavigateToConnectPage(4)}
>
   <span className='block text-xs'>Monday</span>
  <span className='block text-xs'>9:00 A.M - 11:00 A.M</span>
</div>

<div
  className="absolute z-50 border border-white/5 p-1 rounded-xl hover:shadow-lg hover:scale-102 delay-100 transition-all duration-500 hover:shadow-blue-400 cursor-pointer"
  style={{
    top: "100px",
    left: "200px",
    width: "150px",
    background: "linear-gradient(135deg, #4cc9f0, #70e4ff)",

  }}
  onClick={()=>NavigateToConnectPage(2)}
>
  <span className='block text-xs'>Monday</span>
  <span className='block text-xs'>9:00 A.M - 12:00 A.M</span>
</div>

<div
  className="absolute z-50 border border-white/5 p-1 rounded-xl hover:shadow-lg hover:scale-102 delay-100 transition-all duration-500 hover:shadow-blue-400 cursor-pointer"
  style={{
    top: "110px",
    left: "800px",
    width: "200px",
    background: "linear-gradient(135deg, #4cc9f0, #ff6b96)",
  }}
  onClick={()=>NavigateToConnectPage(2)}
>
   <span className='block text-xs'>Thursday</span>
  <span className='block text-xs'>4:00 P.M - 6:00 P.M</span>
</div>

<div
  className="absolute z-50 border border-white/5 p-1 rounded-xl hover:shadow-lg hover:scale-102 delay-100 transition-all duration-500 hover:shadow-blue-400 cursor-pointer"
  style={{
    top: "170px",
    left: "1000px",
    width: "180px",
    background: "linear-gradient(135deg, #4cc9f0, #348b12)",
  }}
  onClick={()=>NavigateToConnectPage(3)}
>
   <span className='block text-xs'>Friday</span>
  <span className='block text-xs'>3:00 P.M - 4:00 P.M</span>
</div>

<div
  className="absolute z-50 border border-white/5 p-1 rounded-xl hover:shadow-lg hover:scale-102 delay-100 transition-all duration-500 hover:shadow-blue-400 cursor-pointer"
  style={{
    top: "180px",
    left: "400px",
    width: "150px",
    background: "linear-gradient(135deg, #4cc9f0, #348b12)",
  }}
  onClick={()=>NavigateToConnectPage(3)}
>
   <span className='block text-xs'>Tuesday</span>
  <span className='block text-xs'>10:00 A.M - 1:00 P.M</span>
</div>

<div
  className="absolute z-50 border border-white/5 p-1 rounded-xl hover:shadow-lg hover:scale-102 delay-100 transition-all duration-500 hover:shadow-blue-400 cursor-pointer"
  style={{
    top: "290px",
    left: "800px",
    width: "250px",
    background: "linear-gradient(135deg, #4cc9f0, #348b12)",
  }}
  onClick={()=>NavigateToConnectPage(5)}
>
   <span className='block text-xs'>Thursday</span>
  <span className='block text-xs'>3:00 P.M - 4:00 P.M</span>
</div>

<div
  className="absolute z-50 border border-white/5 p-1 rounded-xl hover:shadow-lg hover:scale-102 delay-100 transition-all duration-500 hover:shadow-blue-400 cursor-pointer"
  style={{
    top: "230px",
    left: "600px",
    width: "150px",
    background: "linear-gradient(135deg, #4cc9f0, #70e4ff)",
  }}
  onClick={()=>NavigateToConnectPage(4)}
>
   <span className='block text-xs'>Wednesday</span>
  <span className='block text-xs'>1:00 P.M - 3:00 P.M</span>
</div>

<div
  className="absolute z-50 border border-white/5 p-1 rounded-xl hover:shadow-lg hover:scale-102 delay-100 transition-all duration-500 hover:shadow-blue-400 cursor-pointer"
  style={{
    top: "350px",
    left: "400px",
    width: "150px",
    background: "linear-gradient(135deg, #4cc9f0, #70e4ff)",
  }}
  onClick={()=>NavigateToConnectPage(6)}
>
  <span className='block text-xs'>Tuesday</span>
  <span className='block text-xs'>11:00 A.M - 1:00 P.M</span>
</div>





        <div className=' relative flex flex-row'>
            <div className='absolute -top-2 left-[200px] '>Mon</div>
            <div className='absolute -top-2 left-[400px]'>Tue</div>
            <div className='absolute -top-2 left-[600px]'>Wed</div>
            <div className='absolute -top-2 left-[800px]'>Thu</div>
            <div className='absolute -top-2 left-[1000px]'>Fri</div>


        </div>
        <div className='flex flex-col w-full'>
          
          {users.map((user, index) => (
         
            <div 
              key={index} 
              className='relative flex items-center h-[60px] w-full group'
            >
            
              <div className="absolute inset-0 border-b border-white/10 w-full z-0"></div>

              <div className='relative z-10 w-40 shrink-0'>
                <p className='bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text font-bold'>
                  {user}
                </p>
              </div>

             
            </div>
          ))}

        </div>
    </div>
      </div>
   
  )
}

export default TimeLine