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