import React from 'react';
import { Github, Linkedin, Twitter, Film, Code, Palette, Shield, Clapperboard, LinkedinIcon,Bug, Server, Database, Smartphone } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Lead Architect",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
   
    posterBg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=60", 
    favoriteMovie: "The Matrix",
    icon: Code,
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 2,
    name: "David Chen",
    role: "UI/UX Designer",
    department: "Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
   
    posterBg: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=60",
    favoriteMovie: "Grand Budapest Hotel",
    icon: Palette,
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Security Engineer",
    department: "Backend",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
   
    posterBg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60",
    favoriteMovie: "Inception",
    icon: Shield,
    socials: { dribbble: "#", linkedin: "#" }
  },
  {
    id: 4,
    name: "Marcus Cole",
    role: "Content Curator",
    department: "Editorial",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
   
    posterBg: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=60",
    favoriteMovie: "Pulp Fiction",
    icon: Clapperboard,
    socials: { dribbble: "#", linkedin: "#" }
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Lead QA Engineer",
    department: "Quality Assurance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
    // Neon/Rainy background for Cyberpunk vibe
    posterBg: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=60",
    favoriteMovie: "Blade Runner 2049",
    icon: Bug,
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 6,
    name: "James Wilson",
    role: "DevOps Specialist",
    department: "Infrastructure",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    // Desert/High-octane background
    posterBg: "https://images.unsplash.com/photo-1544983025-a1c1d408eb3e?auto=format&fit=crop&w=800&q=60", 
    favoriteMovie: "Mad Max: Fury Road",
    icon: Server,
    socials: { twitter: "#", github: "#" }
  },
  {
    id: 7,
    name: "Dr. Alistair Vance",
    role: "Head of Data Science",
    department: "Analytics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80",
    // Matrix/Code/Numbers background
    posterBg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
    favoriteMovie: "Moneyball",
    icon: Database,
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: 8,
    name: "Sofia Mendes",
    role: "Mobile Lead",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
    // Soft/Technological background
    posterBg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=60",
    favoriteMovie: "Her",
    icon: Smartphone,
    socials: { dribbble: "#", github: "#" }
  }
];

function TeamMembers() {
  return (
   <section className='mt-10 flex flex-col gap-6'>
    <div className='flex flex-row justify-center items-center gap-3 mb-4'>
        <Film className='w-8 h-10 text-blue-500'/>
        <h2 className=' text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text '>CineWave Lead Members of the Team</h2>
    </div>
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-center justify-center'>
          {
            teamMembers?.map((teamMember,index)=>(
                <div key={index} className='group relative overflow-hidden rounded-2xl border-slate-800 border hover:border-blue-500/20 transition-all duration-500'>
                 <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110 group-hover:scale-100"
                style={{ backgroundImage: `url(${teamMember.posterBg})` }}
            />
            {/* Gradient Overlay to keep text readable */}
            <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/90 to-slate-900 pointer-events-none" />



                    <div className='flex p-6  items-center z-10 flex-col relative'>
                    <div className='relative mb-4'>
                        <div className='absolute inset-0 bg-blue-500 blur-md opacity-20 group-hover:opacity-50 border rounded-full '/>
                    <img src={teamMember.image} alt={teamMember.name} className='w-25 h-25 object-cover rounded-full border-4 border-slate-800  group-hover:border-blue-400  transition-colors duration-300 relative '/>
                    <div className='absolute z-20 bottom-0 right-1 bg-slate-800/80 border border-slate-950 rounded-full p-2'>
                    <teamMember.icon size={16} />
                    </div>
                    </div>
                       
                    <div className='flex flex-col gap-0.5 items-center mb-5'>
                    <h2 className='text font-bold text-lg bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text transition-colors group-hover:text-blue-300 '>{teamMember.name}</h2>
                       <p className='text-gray-400 text-sm'>{teamMember.role}</p>

                    </div>

                 
                       <div className='bg-blue-400 p-2 border border-slate-950/10 rounded-xl cursor-pointer hover:bg-white/5 hover:text-white delay-100 duration-300 transition-colors '>
                         <span className=' text-lg font-bold '>Fav: </span>

                         <span className='text-lg font-bold '>{teamMember.favoriteMovie}</span>
                        </div>

                        <div className='flex'>
                             <div className='mt-8 flex flex-row gap-2'>
                            <a  href='#'><Github size={30} className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border transition-all duration-300 hover:scale-102 hover:shadow-md hover:shadow-blue-400'/></a>
                            <a  href='#' className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border hover:scale-102 hover:shadow-md hover:shadow-blue-400'><LinkedinIcon size={18}/></a>
                            <a  href='#' className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border hover:scale-102 hover:shadow-md hover:shadow-blue-400'><Twitter size={18}/></a>
                        </div>
                        </div>
                  

                </div>
                </div>

            ))
          }
    </div>


   </section>
  );
}

export default TeamMembers;