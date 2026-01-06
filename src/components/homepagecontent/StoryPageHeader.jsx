import React from 'react'
import StoryPage from './StoryPage'


function StoryPageHeader({stories,onStoryClick}) {
  return (
   <section className='  max-w-7xl mx-auto'>
     <div className='flex flex-col  px-6'>
        <h2 className='text-xl  mb-3 font-bold bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Trending Stories</h2>
        <div className='flex flex-row gap-4 py-5 sm:gap-5 md:gap-6 lg:md-7 pb-4  overflow-x-auto scrollbar-hide snap-x '>
           {
             stories.map((story)=>(
               <div key={story.id} className='group'
               onClick={() => onStoryClick(story)}>
                <div className='flex flex-col gap-2 '>
                    <div className={`p-[3px] rounded-full ${story.viewed ? 'bg-gray-600 cursor-pointer' : 'bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500'} group-hover:scale-104 group-hover:'bg-linear-to-tr from-blue-600 via-purple-600 to-pink-600' transition-transform duration-300`}>
                 <img src={story.img} alt={story.name} className={`rounded-full h-16 w-16 lg:h-26 lg:w-26 object-cover ${story.viewed?"":"border-2 rounded-full bg-linear-to-r cursor-pointer from-blue-500 "}`}/>
                 </div>
                 <h2 className='text-center text-sm text-gray-400'>{story.title}</h2>
                 </div>
                </div> 
             ))
           }
        </div>

     </div>

   </section>
  )
}

export default StoryPageHeader