import React from 'react';
import { GrStar } from 'react-icons/gr';

const MovieCard = ({ url, title, id, overview, rating, releaseDate }) => {
  return (
    <div className="movie" key={id}>
      <img src={url} alt={title} />
      <div className="movie-info">
        <div className="release-date">{releaseDate}</div>
        <div className="rating">
          {rating}/10
          <GrStar className="icon-star" size="1.5em" />
        </div>
      </div>
      <div className="overview">
        <h3>Overview: </h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
