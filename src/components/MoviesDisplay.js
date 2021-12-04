import React from 'react';
import MovieCard from './MovieCard';
import Button from './Button';

const MoviesDisplay = ({ movies, page, onPageChange }) => {
  const renderedMovies = movies.map((movie) => {
    const urlImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    return (
      <MovieCard
        url={urlImage}
        title={movie.title}
        overview={movie.overview}
        rating={movie.vote_average}
        releaseDate={movie.release_date}
        key={movie.id}
      />
    );
  });

  return (
    <div className="display-movies-container">
      <div className="movies">{renderedMovies}</div>
      <div className="display-buttons">
        {page > 1 ? (
          <Button content="Prev" onClick={() => onPageChange(page - 1)} />
        ) : null}

        <Button content="Next" onClick={() => onPageChange(page + 1)} />
      </div>
    </div>
  );
};

export default MoviesDisplay;
