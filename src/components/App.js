import React, { useEffect, useState } from 'react';
import Header from './Header';
import MoviesDisplay from './MoviesDisplay';
import { popularURL, searchMovies } from '../api/MoviesDB';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [apiUrl, setApiUrl] = useState(popularURL);

  useEffect(() => {
    const getMovies = async () => {
      const results = await searchMovies(page, apiUrl);
      setMovies(results);
    };
    getMovies();
  }, [page, apiUrl]);

  return (
    <div>
      <Header setApiUrl={setApiUrl} setPage={setPage} setMovies={setMovies} />
      <MoviesDisplay movies={movies} page={page} onPageChange={setPage} />
    </div>
  );
};

export default App;
