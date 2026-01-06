import React, { useState } from 'react'
import {useQuery} from '@tanstack/react-query'
import FetchSearchMovieData from '../APIData/SearchMovieApi'
import "../stylingSheets/SearchMovie.css";
import useDebouncing from '../Debouncing/MovieSearchDebouncing';



function SearchMovie() {
  

const [movie,setMovie]=useState("")
const debounceSearch=useDebouncing(movie,600)


  const {data,isError,error,isPending}=useQuery({
    queryKey:["movie-search-engine",debounceSearch],
    queryFn:()=>FetchSearchMovieData(debounceSearch),
    enabled:debounceSearch.trim().length>0

  });

  

  
  return (
    <div className='Search-movie-background'>
      <div className='mt-19 text-white'>

      
      <div className='Search-movie-container'>
      
      <div className='Search-movie-input'>
      <input className='input-box-data' value={movie} onChange={(e)=>setMovie(e.target.value)}
      placeholder='Search a Movie'/>
      </div>
      {
        isPending && <p>Loading......</p>}
        {
        isError && <p>{error.message}</p>
      }
      <div className='search-movie-cards'>
        {
         data?.results?.filter((movie)=>movie.poster_path && movie.overview).map((movie)=>(
          <div key={movie.id} className='search-movie-img-cont'>
          
          <img className='movie-image' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>

            <div className='search-movie-title-cont'>
            <h2 className='search-movie-head'>{movie.title}</h2>
            <p className='search-movie-cont'>{movie.overview}</p>
            </div>
            </div>
         ))
        }
      </div>
    </div>
    </div>
    </div>
  )
}

export default SearchMovie