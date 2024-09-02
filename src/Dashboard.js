// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
import './Dashboard.css';

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.post('https://hoblist.com/api/movieList', {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting"
    })
    .then(response => {
      setMovies(response.data.result);
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
    });
  }, []);

  return (
    <div className="dashboard">
      {movies.map(movie => (
        <MovieItem key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default Dashboard;
