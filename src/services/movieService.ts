import axios from 'axios';
import type { Movie } from "../types/movie";

interface FetchMoviesResponse {
  results: Movie[];
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<FetchMoviesResponse>(BASE_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjM3YTE0YTJmOGRhMmQxNzEwYjk4MjhkYWI2ZDE1YSIsIm5iZiI6MTc3NzkyMDc2NS43MjYsInN1YiI6IjY5ZjhlYWZkMzIzNTAwYmUzMWRmNTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LEmvvDxuN5IOCLLTIXLVnfSqmPHaecrzCClZtzRJBvA`,
    },
  });

  return response.data.results;
};