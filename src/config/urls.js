const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://rental-website-backend.onrender.com/'
    : 'http://localhost:5000';

// Export all API endpoints as constants
const API_URLS = {
  LEND_GAME: `${BASE_URL}/games/lend`,
  FETCH_GAMES: `${BASE_URL}/games/all-games`,
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,
  UPDATE_GAME: `${BASE_URL}/games/update`,
  UPLOADS: `${BASE_URL}/uploads`
};

export default API_URLS;
