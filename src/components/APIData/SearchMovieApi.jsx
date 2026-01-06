import axios from 'axios'


const API_KEY="2113b9af9a5a7832bcc4ff6a8ca7dc9c";


const api=axios.create({
    baseURL:'https://api.themoviedb.org/3'
})


const FetchSearchMovieData=async(movie)=>{
    try{
   const res=await api.get(`search/movie?api_key=${API_KEY}&query=${movie}`)
   return res.data
    }
    catch(error){
   console.log(error);
   throw error;
    }
}
export default FetchSearchMovieData
