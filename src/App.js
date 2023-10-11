

//  60c36eb

import { useEffect, useState } from "react";
import './app.css';
import SearchIcon from './search.svg'
import MovieCart from "./MovieCart";

const API_URL = 'http://www.omdbapi.com?apikey=60c36eb';

 const App = () => {
  const [movies, setMovies ] = useState([]);
  const [searchMovies, setSearchMovies] = useState('')

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
   setMovies(data.Search);

  }

  useEffect(() => {
    searchMovie( );
      
  },[]);

//   const movie1 = {
//     "Title": "Vikings",
//     "Year": "2013–2020",
//     "imdbID": "tt2306299",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZWNlZmNiNzItYWMwNC00ODYxLThlNjYtMjU3NzlmNDQxMTY2XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg"
// }

  
  return (
     <div className="app">
      <h1>MovieFloor</h1>

      <div className="search">
        <input 
        placeholder="Search for movies..."
        value={searchMovies}
        onChange={(event) => setSearchMovies(event.target.value) }
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovie(searchMovies)}
        />

      </div>
      {
        movies?.length > 0 ? (

          <div className="container">
           {movies.map((movie) => (
            <MovieCart movie={movie}/>
           ))}
         
        </div>

        ): 
         (
          <div className="empty">
            <h2>No movies found!</h2>
          </div>

        )
      }
     
     </div>
  );
}

export default App;
