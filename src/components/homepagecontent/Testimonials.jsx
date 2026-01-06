import React from 'react'
const testimonials = [
  {
    name: "Martin Scorsese",
    role: "Filmmaker",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Martin_Scorsese_2023.jpg",
    content:
      "What impressed me most was the clarity and speed. From selecting the movie to confirming seats, everything feels precise and well-designed — much like a great film edit.",
  },
  {
    name: "Christopher Nolan",
    role: "Film Director",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "A seamless and intuitive movie booking experience. The platform makes discovering films and reserving seats effortless — exactly how modern cinema should be enjoyed.",
  },
  {
    name: "Leonardo DiCaprio",
    role: "Actor & Producer",
    image:
      "https://ichef.bbci.co.uk/news/800/cpsprodpb/b713/live/7fc3f790-9471-11f0-bc01-a3a35aa734ac.jpg.webp",
    content:
      "A seamless and intuitive movie booking experience. The platform makes discovering films and reserving seats effortless — exactly how modern cinema should be enjoyed.",
  },
];





function Testimonials() {
  return (
   <section className=' mt-5 lg:mt-15 py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative max-w-7xl mx-auto'>
   <div className='flex flex-col lg:flex-row space-y-3 md:space-y-5'>

    <div className=' lg:w-1/2 flex justify-center  md:text-left flex-col'>
        <h2 className='text-4xl sm:text-4xl   gap-8 sm:gap-12 text-gray-200 font-bold mb-4 sm:mb-6'>What Industry Voices Say</h2>
        <p className='text-gray-400 text-xl mb-10 sm:text-2xl md:text-3xl '>Hear from film professionals and movie lovers who appreciate a fast, reliable, and seamless ticket booking experience.</p>
    </div>

    <div className='lg:w-1/2 flex flex-col'>
        <div className='space-y-6 sm:space-y-8'>
        {
            testimonials.map((testimonial,key)=>(
              <div key={key} className='bg-slate-900/50 flex flex-row border gap-7 border-slate-800 rounded-xl sm:rounded-2xl  p-4 sm:p-6 backdrop-blur-sm  '>
                <div className='  shrink-0'>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text object-cover text-transparent '>"
                        </div>
                        </div>
                        <div className='grow'>
                        <p className='text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4'>{testimonial.content}</p>
                        
                        <div className='flex flex-row items-center space-x-2 sm:space-x-3'>
                            <img className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover' src={testimonial.image}/>
                            <div>
                            <p className='text-base md:text-xl text-white font-semibold'>{testimonial.name}</p>
                            <p className='text-xs text-gray-400 md:text-base'>{testimonial.role}</p>
                            </div>
                        </div>  
                        </div>  
                </div>

               
            ))
        }
        </div>
    </div>

   </div>
   </section>
  )
}

export default Testimonials