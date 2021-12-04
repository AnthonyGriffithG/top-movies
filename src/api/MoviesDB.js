import axios from 'axios';
const API_KEY = '277ab757b7f1cb4a0917e66a8eaccca6';

export const getTrending = async (page) => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week',
    {
      params: {
        api_key: API_KEY,
        page: page,
      },
    }
  );
  return data.results;
};
