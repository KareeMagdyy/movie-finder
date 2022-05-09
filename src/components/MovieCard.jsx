const MovieCard = ({ movie }) => {
  const movieImgSrc =
    movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400";

  return (
    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movieImgSrc} alt={movie.Title} />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
