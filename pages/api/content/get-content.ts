import { NextApiRequest, NextApiResponse } from "next";

import { ContentProps } from "../../../types/types";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import { getMovieDetails } from "./helpers";
import languages from "../../../apps/main/languages_ISO639-1_Alpha2.json";

interface MoviesFetchProps {
  total_pages: string;
  results: ContentProps[];
}

const { serverRuntimeConfig } = getConfig();

type LangType = typeof languages;

// Send to api
const tmdbV3 = `api_key=${serverRuntimeConfig.TMDB_V3}`;
const baseUrl = `https://api.themoviedb.org/3/discover/movie`;
const sortBy = `&sort_by=popularity.desc`;
const adult = `&include_adult=false`;

// It seems video is always false in the response data. Acquire trailer in other ways?
const video = `&include_video=false`;

const pickRandomLanguage = (languages: LangType) => {
  const index = Math.floor(Math.random() * languages.length);
  return languages[index].code;
};

const fetchMoviesfromRandomPage = async (
  total_pages: number,
  originalLanguage: string
) => {
  const pages = total_pages + 1;
  const randomPage = Math.floor(Math.random() * pages);
  const page = `&page=${randomPage != 0 ? randomPage : 1}`;

  const response = await fetch(
    `${baseUrl}?${tmdbV3}${sortBy}${adult}${video}${page}${originalLanguage}`
  );
  return await response.json();
};

const getMovie = async (
  moviesByLanguage: MoviesFetchProps,
  originalLanguage: string
) => {
  if (moviesByLanguage.results && moviesByLanguage.results.length) {
    const movies = await fetchMoviesfromRandomPage(
      parseInt(moviesByLanguage!.total_pages),
      originalLanguage
    );

    if (movies.results && movies.results.length) {
      const index = Math.floor(Math.random() * movies.results.length);
      const picked = movies.results[index];

      return await getMovieDetails(picked, tmdbV3);
    }

    return null;
  }
};

const getMovies = async (languages: LangType, numOfMovies: number) => {
  let usedLanguages: string[] = [];
  let movies = [];

  while (numOfMovies != 0) {
    const code = pickRandomLanguage(languages);
    if (usedLanguages.includes(code)) {
      continue;
    }
    usedLanguages.push(code);

    const originalLanguage = `&with_original_language=${code}`;

    const getMoviesbyLanguage = await fetch(
      `${baseUrl}?${tmdbV3}${adult}${originalLanguage}`
    );
    const moviesByLanguage = await getMoviesbyLanguage.json();

    const movie = await getMovie(moviesByLanguage, originalLanguage);

    if (!movie) {
      continue;
    }

    movies.push(movie);
    numOfMovies--;
  }
  return movies;
};

export default async function getSwipeContent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const movies = await getMovies(languages, 3);

    const moviesFormatted = movies.map((movie: any) => ({
      id: movie.id,
      originalTitle: movie.original_title,
      title: movie.title,
      releaseDate: movie.release_date,
      productionCountries: movie.productionCountries,
      languages: [movie.original_language],
      images: movie.images,
      trailers: movie.trailers,
      synopsis: movie.overview,
      editOn: [
        { org: "TMDB", url: `https://www.themoviedb.org/movie/${movie.id}` },
      ],
    }));

    res.status(200).json(moviesFormatted);
  } catch (error) {
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
