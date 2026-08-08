import { api } from './api';
import { ENDPOINTS } from './endpoints';

export const getPopularMovies = (page: number) => {
  return api(ENDPOINTS.POPULAR(page));
};
export const getNowPlayingMovies = (page: number) => {
  return api(ENDPOINTS.NOW_PLAYING(page));
};
export const getTrendingMovies = (page: number) => {
  return api(ENDPOINTS.TRENDING(page));
};

export const getUpcomingMovies = (page: number) => {
  return api(ENDPOINTS.UPCOMING(page));
};

export const searchMovies = (query: string, page: number = 1) => {
  return api(ENDPOINTS.SEARCH(query, page));
};

export const getMovieDetails = (id: number) => {
  return api(ENDPOINTS.MOVIE_DETAILS(id));
};

export const getMovieVideos = (id: number) => {
  return api(ENDPOINTS.VIDEOS(id));
};
