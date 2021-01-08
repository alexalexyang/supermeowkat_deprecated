import React, { useEffect, useState } from "react";

import Content from "../apps/main/content";
import { ContentProps } from "../types/types";
import Loading from "../components/loading";
import { MostLikedWrapper } from "../styles/misc-styles";
import { NextPage } from "next";
import SEO from "../components/seo";
import fetch from "isomorphic-unfetch";

const MostLikedThings: NextPage = () => {
  const [movies, setMovies] = useState<ContentProps[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const fetched = await (await fetch(`/api/content/get-top-movies`)).json();

      setMovies(fetched);
      setLoading(false);
    };

    getMovies();
  }, []);

  return (
    <>
      <SEO
        page="Most Liked Things"
        description={"Top 5 loved movies from around the world!"}
      />
      <MostLikedWrapper>
        <h1>Most Liked</h1>
        {loading && <Loading />}

        {movies &&
          movies.map((movie) => <Content key={movie.id} item={movie} />)}
      </MostLikedWrapper>
    </>
  );
};

export default MostLikedThings;
