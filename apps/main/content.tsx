import {
  ContentHeader,
  ContentLayer,
  EditOn,
  Footer,
  Likes,
  TrailersWrapper,
} from "../../styles/main-page-styles";

import Carousel from "../../components/carousel";
import { ContentProps } from "../../types/types";
import FullScreen from "./full-screen";
import Link from "next/link";
import { NextPage } from "next";
import SocialMediaShare from "../../components/social-media-share";

interface ItemProps {
  item: ContentProps;
}

const Content: NextPage<ItemProps> = ({ item }: ItemProps) => {
  const {
    id,
    originalTitle,
    title,
    releaseDate,
    productionCountries,
    // languages,
    images,
    trailers,
    synopsis,
    authors,
    editOn,
  } = item;

  return (
    <ContentLayer key={id}>
      <section>
        <ContentHeader>
          <div>
            {title && (
              <h1>
                <Link href={`/item/${id}`}>
                  <a href={`/item/${id}`}>{title}</a>
                </Link>
              </h1>
            )}
            {originalTitle && <p>Original title: {originalTitle}</p>}
            {authors && authors.length ? (
              <p>
                Authors:{" "}
                {authors.map((author, idx) => (
                  <span key={idx}>
                    {author}
                    {!(authors.length === idx + 1) && ", "}
                  </span>
                ))}
              </p>
            ) : null}
            {productionCountries && productionCountries.length ? (
              <p>
                Countries:{" "}
                {productionCountries.map((country, idx) => (
                  <span key={idx}>
                    {country}
                    {!(productionCountries.length === idx + 1) && ", "}
                  </span>
                ))}
              </p>
            ) : null}
            {releaseDate && <p>Released: {releaseDate}</p>}
            {/* {languages && languages.length ? (
              <p>
                Languages:{" "}
                {languages.map((lang, idx) => (
                  <span key={idx}>
                    {lang}
                    {!(languages.length === idx + 1) && ", "}
                  </span>
                ))}
              </p>
            ) : null} */}
          </div>

          {item.likes && (
            <Likes>
              {item.likes}
              <span role="img" aria-label="Likes">
                ❤️
              </span>
            </Likes>
          )}
        </ContentHeader>

        {!!images?.length && <Carousel images={images} title={title ?? ""} />}

        {trailers && trailers.length ? (
          <TrailersWrapper>
            {trailers.map((trailer, idx) => (
              <FullScreen key={trailer.url} trailer={trailer} num={idx + 1} />
            ))}
          </TrailersWrapper>
        ) : null}

        {synopsis && <article>{synopsis}</article>}

        {editOn && editOn.length ? (
          <Footer>
            <SocialMediaShare
              title={title ?? ""}
              description={synopsis ?? ""}
              image={images && images.length ? images[0] : ""}
              shareUrl={`https://supermeowkat.com/item/${id}`}
            />
            <EditOn>
              <span>
                Edit on:{" "}
                {editOn.map((org, idx) => (
                  <span key={org.url}>
                    <a href={org.url} target="__blank">
                      {org.org}
                    </a>
                    {!(editOn.length === idx + 1) && ", "}
                  </span>
                ))}
              </span>
            </EditOn>
          </Footer>
        ) : null}
      </section>
    </ContentLayer>
  );
};

export default Content;
