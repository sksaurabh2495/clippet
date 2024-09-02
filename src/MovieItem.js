// src/MovieItem.js
import React from 'react';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-language">Language: {movie.language}</p>
        <p className="movie-genre">Genre: {movie.genre}</p>
        <p className="movie-category">Category: Movies</p>
      </div>
    </div>
  );
};

export default MovieItem;
