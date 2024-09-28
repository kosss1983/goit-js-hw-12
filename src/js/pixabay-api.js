import axios from 'axios';

export { fetchImages };

const API_KEY = '46160271-30a7facc458188e9573ebab80';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;

async function fetchImages(params) {
  const urlParams = { params };
  const response = await axios.get(`/?key=${API_KEY}`, urlParams);

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  if (response.data.totalHits === 0) {
    throw new Error(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }

  return response.data;
}
