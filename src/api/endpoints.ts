export const ENDPOINTS = {
  TRENDING: (page: number) => `/trending/movie/day?language=en-US&page=${page}`,

  POPULAR: (page: number) => `/movie/popular?language=en-US&page=${page}`,

  TOP_RATED: (page: number) => `/movie/top_rated?language=en-US&page=${page}`,

  UPCOMING: (page: number) => `/movie/upcoming?language=en-US&page=${page}`,

  NOW_PLAYING: (page: number) =>
    `/movie/now_playing?language=en-US&page=${page}`,

  SEARCH: (query: string, page: number = 1) =>
    `/search/movie?query=${query}&language=en-US&page=${page}`,

  MOVIE_DETAILS: (id: number) => `/movie/${id}?language=en-US`,

  CAST: (id: number) => `/movie/${id}/credits?language=en-US`,

  SIMILAR: (id: number, page: number = 1) =>
    `/movie/${id}/similar?language=en-US&page=${page}`,

  VIDEOS: (id: number) => `/movie/${id}/videos?language=en-US`,
};
