import axios from 'axios';
const API_KEY = '277ab757b7f1cb4a0917e66a8eaccca6';

export const trendingURL = 'https://api.themoviedb.org/3/trending/movie/week';
export const topRatedURL = 'https://api.themoviedb.org/3/movie/top_rated';
export const popularURL = 'https://api.themoviedb.org/3/movie/popular';
export const movieURL = 'https://api.themoviedb.org/3/search/movie';

export const searchMovies = async (page, url) => {
  const { data } = await axios.get(url, {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });
  return data.results;
};
