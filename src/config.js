export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "0f2828258a4259490e4802ec8bceef93";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetailsPage: (movieId) =>
    `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
  imageW500: (url) => `https://image.tmdb.org/t/p/w500${url}`,
};
