import React from 'react'
import StoryPageHeader from './StoryPageHeader'
import StoryViewer from './StoryPageHero'
import { useState } from 'react';
const stories = [
  { id: 1, title: "The Conjuring", img: "https://image.tmdb.org/t/p/w300/7JzOmJ1fIU43I3gLHYsY8UzNzjG.jpg", viewed: false, likes:34 },
  { id: 2, title: "Dune 2", img: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", viewed: false, likes:23 },
  { id: 3, title: "Race to Glory", img: "https://image.tmdb.org/t/p/w300/1D3y4by7gJ9X2eowG8NpBt0cPIj.jpg", viewed: true, likes:76 },
  { id: 4, title: "Fast Lane Legacy", img: "https://image.tmdb.org/t/p/w300/pk2S1wfkvD4HQp2DkGIQGdaw6Ra.jpg", viewed: false,likes:12 },
  { id: 5, title: "Midnight Circus", img: "https://image.tmdb.org/t/p/w300/unnGwqWmMAuszJnleyuqZ70MtrT.jpg", viewed: false, likes:79 },
];


function StoryPage() {

    const [selectedStory, setSelectedStory] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


  const handleOpenStory = (story) => {
    console.log("Opening story:", story.title);
    setSelectedStory(story);
    setIsViewerOpen(true);
  };


  const handleCloseStory = () => {
    setIsViewerOpen(false);
    
  };

  return (
    <section className='mt-20 max-w-7xl mx-auto'>
        <div className='flex flex-col'>
            <h2 className='text-center text-4xl md:text-5xl lg:text-6xl  mb-10 font-bold bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                Story Feed
            </h2>
            <div>
                <StoryPageHeader
                stories={stories} 
                onStoryClick={handleOpenStory}
                />
            </div>
            <div>
                <StoryViewer
                isOpen={isViewerOpen} 
                onClose={handleCloseStory} 
                storyData={selectedStory}/>
            </div>
        </div>

    </section>
  )
}

export default StoryPage