import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

//API
const API_URL = "https://www.omdbapi.com/?apikey=bbd05732";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("game");
  }, []);

  const searchChangeHandler = (e) => setSearchTerm(e.target.value);

  const searchEnterHandler = (e) => {
    e.key === "Enter" && searchMovie(searchTerm);
  };

  const searchIconClickHandler = () => searchMovie(searchTerm);

  return (
    <div className='app'>
      <h1>Movie Finder</h1>

      <div className='search'>
        <input
          placeholder='Find My Movie'
          value={searchTerm}
          onChange={searchChangeHandler}
          onKeyPress={searchEnterHandler}
        />
        <img
          src={searchIcon}
          alt='Search Icon'
          onClick={searchIconClickHandler}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
