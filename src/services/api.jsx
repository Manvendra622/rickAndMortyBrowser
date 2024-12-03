import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (query = '') => {
  const response = await axios.get(`${BASE_URL}/character/?name=${query}`);
  return response.data;
};