import React from 'react'
import './MovieList.css'
import MovieCard from "../MovieCard/MovieCard"
const MovieList = ({movies,deleteMovie}) => {
  return (
    <div className="wrapper">
      <div  style={{display:'flex', margin:'auto', flexWrap: 'wrap', justifyContent: 'center'}}>
        {movies.map(el=><MovieCard el={el} key={el.id} deleteMovie={deleteMovie}/>)}
        </div>
        </div>
  )
}

export default MovieList