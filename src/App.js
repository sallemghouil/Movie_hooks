import { useState } from 'react';
import './App.css';
import Add from './components/Add/Add';
import Filter from './components/Filter.js/Filter';
import MovieList from './components/MovieList/MovieList';
import { movies } from "./data"

function App() {
  const [moviesList, setMoviesList] = useState(movies)
  const [search, setsearch] = useState("")
  const [searchR, setsearchR] = useState(0)
  const getNewMovie = (newM) => {
    setMoviesList([...moviesList, { ...newM, id: moviesList.length }])
  }
  const handleDclick = () => {
    setMoviesList([])
  }
  const deleteMovie = (idDel) => {
    setMoviesList(moviesList.filter((el) => el.id !== idDel))
  }


  return (
    <div className="App"> 
    
      <Filter setsearch={setsearch} setsearchR={setsearchR}/>
      <button onDoubleClick={handleDclick}>Clear all</button>
      {moviesList.length ? <MovieList movies={moviesList.filter((el)=>{return(el.title.toLocaleLowerCase().includes(search.trim().toLowerCase()) && el.rating>=searchR)})} deleteMovie={deleteMovie} /> : <h1>no movies</h1>}
      <Add getNewMovie={getNewMovie} />
    </div>
  );
}

export default App;
