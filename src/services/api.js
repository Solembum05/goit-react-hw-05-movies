import axios from 'axios';

const API_KEY = 'ddf41d08627025b2d6783befee0c5c94';
const URL = 'https://api.themoviedb.org/3/';

export const getApi = async (apiTipe, dataSubmit) => {
  const response = await axios.get(
    `${URL}${apiTipe}?api_key=${API_KEY}${
      dataSubmit ? `&query=${dataSubmit}` : ''
    }&language=en-US`
  );
  // console.log(response);
  return response;
};


export const getSearchMovie = async searchQuery => {
  const resp = await axios.get(
    `${URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}`
  );
  // const data = resp.data;

  return resp;
};

export const getCast = async movieId => {
  const resp = await axios.get(
    `${URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1&query=${movieId}`
  );
  // const data = resp.data;

  return resp;
};

export const getReviews = async movieId => {
  const resp = await axios.get(
    `${URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1&query=${movieId}`
  );
  // const data = resp.data;

  return resp;
};