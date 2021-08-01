import { NextApiRequest, NextApiResponse } from "next";

import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import { getMovieDetails } from "./helpers";
import { moviesCollection } from "../db-connections/movies-likes";

const { serverRuntimeConfig } = getConfig();
const tmdbV3 = `api_key=${serverRuntimeConfig.TMDB_V3}`;
const baseUrl = `https://api.themoviedb.org/3/movie`;

const getTopMovies = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const moviesConn = await moviesCollection();

    // Need to sort by timestamp
    const moviesfromDb = await moviesConn
      .find({})
      .sort({ likes: -1, _id: -1 })
      .limit(10)
      .toArray();

    const fetchedMovies = await moviesfromDb.map(async (movie: any) => {
      const currentMovie = await (
        await fetch(`${baseUrl}/${movie.tmdb_id}?${tmdbV3}`)
      ).json();

      const fullMovie: any = await getMovieDetails(currentMovie, tmdbV3);

      if (!fullMovie) {
        return {};
      }

      return {
        id: fullMovie.id,
        originalTitle: fullMovie.original_title,
        title: fullMovie.title,
        releaseDate: fullMovie.release_date,
        productionCountries: fullMovie.productionCountries,
        languages: [fullMovie.original_language],
        images: fullMovie.images,
        trailers: fullMovie.trailers,
        synopsis: fullMovie.overview,
        editOn: [
          {
            org: "TMDB",
            url: `https://www.themoviedb.org/movie/${fullMovie.id}`,
          },
        ],
        likes: movie.likes,
      };
    });

    const movies = await Promise.all(fetchedMovies);

    res.status(200).json(movies);
  } catch (error) {
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
};

export default getTopMovies;
