import { NextApiRequest, NextApiResponse } from "next";

// import { ContentProps } from "../../../types/types";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import { getMovieDetails } from "./helpers";
import { moviesCollection } from "../db-connections/movies-likes";

const { serverRuntimeConfig } = getConfig();
const tmdbV3 = `api_key=${serverRuntimeConfig.TMDB_V3}`;
const baseUrl = `https://api.themoviedb.org/3/movie`;

const getMovie = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const moviesConn = await moviesCollection();
  const moviefromDb = await moviesConn.findOne({ tmdb_id: id });

  try {
    const currentMovie = await (
      await fetch(`${baseUrl}/${id}?${tmdbV3}`)
    ).json();

    const fullMovie: any = await getMovieDetails(currentMovie, tmdbV3);

    if (!fullMovie) {
      return {};
    }

    const item = {
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
      ...(moviefromDb ? { likes: moviefromDb.likes } : {}),
    };

    res.status(200).json(item);
  } catch (error) {
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
};

export default getMovie;
