import React, { useState, useEffect } from "react";
import {
  X,
  Heart,
  Share2,
  Ticket,
  Twitter,
  Facebook,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

const StoryViewer = ({ isOpen, onClose, storyData }) => {
 
  if (!isOpen || !storyData) return null;

  const [progress, setProgress] = useState(0);
  const [LikeDislikeCounter, setLikeDislikeCounter] = useState(storyData.likes);
  const [Like, setLike] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const toggle = () => {
    if (Like) {
      setLikeDislikeCounter((prev) => prev - 1);
      setLike(false);
    } else {
      setLikeDislikeCounter((prev) => prev + 1);
      setLike(true);
    }
  };

  useEffect(() => {
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);

    return () => clearInterval(timer);
  }, [storyData, isOpen]);

  return (
   
    <div className="fixed pt-15 inset-0 z-50 bg-slate-800/30 backdrop-blur-xl flex items-center justify-center">
         {
            !storyData.viewed?(
      <div className="relative w-full max-w-md h-full md:h-[85vh] md:rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-white/10">
        <img
          src={storyData.img || "/api/placeholder/400/800"}
          className="absolute inset-0 w-full h-full object-cover"
          alt={storyData.title || "Story"}
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div>
            <div className="flex gap-1 mb-3">
              <div className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={storyData.img}
                  className="w-8 h-8 rounded-full border border-white/50 object-cover"
                />
                <span className="text-white font-semibold text-sm drop-shadow-md">
                  {storyData.title}
                </span>
                <span className="text-gray-300 text-xs">• 2h ago</span>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white cursor-pointer z-50"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="absolute right-4 bottom-32 flex flex-col gap-4 items-center z-40">
            <div className="flex flex-col items-center gap-1">
              <div
                className="bg-black/20 backdrop-blur-md p-3 rounded-full hover:bg-red-500/20 transition-colors cursor-pointer group"
                onClick={toggle}
              >
                <Heart
                  className={` group-hover:text-red-500 transition-colors ${
                    Like ? "text-red-500 fill-red-500" : "text-white"
                  }`}
                  size={24}
                />
              </div>
              <span className="text-white text-xs font-bold">
                {LikeDislikeCounter}
              </span>
            </div>
            <div
              className="relative  bg-black/20 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setCloseMenu((prev) => !prev)}
            >
              <Share2 className="text-white" size={24} />
              {closeMenu ? (
                <div className="flex items-center justify-center px-1 sm:px-4 lg:px-5 space-x-2 max-w-1xl rounded-lg bg-slate-800/80 border py-1 text-white border-blue-500/20 transition-all animate-in  slide-in-from-top duration-700 delay-300  mb-4 sm:mb-6 lg:mb-8 text-blue absolute z-100 top-15 -left-22  gap-2 backdrop-blur-lg">
                  <a  href='#' className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border hover:scale-105 hover:shadow-md hover:shadow-blue-400'>
                    <Twitter size={18} />
                  </a>
                  <a  href='#' className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border hover:scale-105 hover:shadow-md hover:shadow-blue-400'>
                    <Twitter size={18} />
                  </a>
                  <a  href='#' className='bg-slate-400/10 p-1  text-blue-500 rounded-full border-white/5 border hover:scale-105 hover:shadow-md hover:shadow-blue-400'>
                    <Facebook size={18}/>
                  </a>
                  
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center z-40">
            <div className="text-center">
              <h3 className="bg-linear-to-r from-blue-600 via-cyan-400 to-blue-600 text-transparent  bg-clip-text font-bold text-2xl ">
                Now Showing
              </h3>
              <p className="bg-linear-to-r from-blue-600 via-cyan-400 to-blue-600 text-transparent  bg-clip-text text-sm drop-shadow-md">
                IMAX • 3D • Dolby Atmos
              </p>
            </div>

            <button className="w-full bg-linear-to-r from-blue-400 via-white-200 to-cyan-300 text-white font-bold py-2 rounded-xl shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span>
                <Ticket className="text-red-800 h-10 w-7" />
              </span>
              <Link to="/bookmovie">Book Tickets Now</Link>
            </button>
          </div>
        </div>
      </div>
             ):(
                <div onClick={onClose} className="bg-slate-600 h-50 gap-4 flex flex-row items-center justify-center border-2 border-white/10 rounded-lg p-3 text-2xl sm:text-3xl md:text-4xl   backdrop-blur-lg">
                <p className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text">You have viewed the story</p>
                <X size={24} className="text-white" />
                </div>
            )
}
    </div>
   
  );
};

export default StoryViewer;
