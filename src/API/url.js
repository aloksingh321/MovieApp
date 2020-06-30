
export const API_KEY = 'xxxxxxxxxxxx';
export const ROOT_URL = 'https://api.themoviedb.org/3';
const withKey = url => `${ROOT_URL}${url}?api_key=${API_KEY}`;


// Images
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
export const getW45ImageUrl = imagePath => `${BASE_IMAGE_URL}w45${imagePath}`;
export const getW92ImageUrl = imagePath => `${BASE_IMAGE_URL}w92${imagePath}`;
export const getW185ImageUrl = imagePath => `${BASE_IMAGE_URL}w185${imagePath}`;
export const getW300ImageUrl = imagePath => `${BASE_IMAGE_URL}w300${imagePath}`;
export const getW500ImageUrl = imagePath => `${BASE_IMAGE_URL}w500${imagePath}`;
export const getW780ImageUrl = imagePath => `${BASE_IMAGE_URL}w780${imagePath}`;
export const getW1280ImageUrl = imagePath => `${BASE_IMAGE_URL}w1280${imagePath}`;

// Movie Details
export const getDetailsMovieUrl = ({ movieId }) => withKey(`/movie/${movieId}`);
export const getMovieRecommendationsUrl = ({ movieId, page = 1 }) =>
  `${withKey(`/movie/${movieId}/recommendations`)}&page=${page}`;

// Movies Sections
export const getPopularMoviesUrl = ({ page = 1 }) => `${withKey('/movie/popular')}&page=${page}`;
export const getTopRatedMoviesUrl = ({ page = 1 }) => `${withKey('/movie/top_rated')}&page=${page}`;
export const getTrendingDailyMoviesUrl = ({ page = 1 }) =>
  `${withKey('/trending/movie/day')}&page=${page}`;
export const getTrendingWeeklyMoviesUrl = ({ page = 1 }) =>
  `${withKey('/trending/movie/week')}&page=${page}`;
export const getNowPlayingMoviesUrl = ({ page = 1 }) => `${withKey('/movie/now_playing')}&page=${page}`;


  // Tv Sections
  export const getPopularTvUrl = ({ page = 1 }) => `${withKey('/tv/popular')}&page=${page}`;
  export const getTopRatedTvUrl = ({ page = 1 }) => `${withKey('/tv/top_rated')}&page=${page}`;
  export const getTrendingDailyTvUrl = ({ page = 1 }) =>
    `${withKey('/trending/tv/day')}&page=${page}`;
  export const getTrendingWeeklyTvUrl = ({ page = 1 }) =>
    `${withKey('/trending/tv/week')}&page=${page}`;
  
  




// Movies Search
export const getSearchMoviesUrl = ({ page = 1, query }) =>
  `${withKey('/search/movie')}&page=${page}&query=${query}`;


