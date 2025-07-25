import { useEffect } from 'react'
import MovieCard from './MovieCard'
import {  useState } from 'react';

import axios from 'axios'
import Pagination from './Pagination';


function Movies({handleAddtoWatchlist , handleRemoveFromWatchlist ,watchlist}) {

     
    const [movies , setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1)


    const handlePrev =()=>{
        if(pageNo==1){
            setPageNo(1)
        }
      else{
          setPageNo(pageNo-1)
      }
    }


     const handleNext =()=>{
        setPageNo(pageNo+1)
    }





    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7fa81001baf8622e229173f84cbb820a&language=en-US&page=${pageNo}`).then(function(res){
            console.log(res.data.results)
            setMovies(res.data.results)
        })
    } , [pageNo] )


  return (
    <div className='p-5'>
        <div className=' text-2xl m-5  font-bold text-center'>Trending Movies 
        </div>

        <div className='flex flex-row flex-wrap justify-around gap-8'>
         
         {movies.map((movieObj)=>{
            return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} Watchlist={watchlist}/>
         })}
    </div>

    <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}



export default Movies


// https://api.themoviedb.org/3/person/popular?api_key=7fa81001baf8622e229173f84cbb820a&language=en-US&page=1