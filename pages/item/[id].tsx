import {
  BannerWrapper,
  Body,
  ButtonsWrapper,
  ContentWrapper,
  MainWrapper,
  SingleButtonWrapper,
} from "../../styles/main-page-styles";
import React, { useEffect, useState } from "react";

import Content from "../../apps/main/content";
import { ContentProps } from "../../types/types";
import Cross from "../../styles/icons/cross-icon";
import Heart from "../../styles/icons/heart-solid-icon";
import MessagesBanner from "../../components/messages-banner";
import { NextPage } from "next";
import { RoundButton } from "../../styles/buttons";
import SEO from "../../components/seo";
import { causes } from "../../components/messages-banner/messages";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

interface Props {
  item: ContentProps;
}

const IndividualMoviePage: NextPage<Props> = ({ item }: Props) => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    setIsTouchScreen(navigator.maxTouchPoints > 0);
  }, []);

  const [voted, setVoted] = useState(false);

  const noFunc = () => {};

  const yesFunc = async (item: ContentProps) => {
    // immediately disable, set likes + 1 to fake it.
    const { success } = await (
      await fetch(
        `/api/content/likes?movie_id=${item.id}&movie_title=${item.title}`
      )
    ).json();
    success && setVoted(true);
  };

  return (
    <>
      <SEO
        page={`${item.title} | Movie`}
        description={item.synopsis}
        image={
          item.images && item.images.length
            ? {
                url: item.images[0],
                alt: item.title || item.originalTitle || "Item image",
              }
            : undefined
        }
        disallowRobot={true}
      />
      <MainWrapper>
        <Body>
          <ContentWrapper>
            <Content key={item.id} item={item} />
            <ButtonsWrapper>
              <SingleButtonWrapper>
                <RoundButton
                  onClick={noFunc}
                  isTouchScreen={isTouchScreen}
                  disabled={voted}
                >
                  <Cross color={voted ? "lightyellow" : ""} />
                </RoundButton>
              </SingleButtonWrapper>
              <SingleButtonWrapper>
                <RoundButton
                  onClick={() => yesFunc(item)}
                  isTouchScreen={isTouchScreen}
                  disabled={voted}
                >
                  <Heart color={voted ? "lightyellow" : ""} />
                </RoundButton>
              </SingleButtonWrapper>
            </ButtonsWrapper>
          </ContentWrapper>
        </Body>
        <BannerWrapper>
          <MessagesBanner messages={causes} />
        </BannerWrapper>
      </MainWrapper>
    </>
  );
};

export default IndividualMoviePage;

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  let item = await (
    await fetch(
      `${
        serverRuntimeConfig.ENVIRONMENT === "production"
          ? serverRuntimeConfig.PRODUCTION
          : serverRuntimeConfig.DEVELOPMENT
      }/api/content/get-movie?id=${params.id}`
    )
  ).json();

  return {
    props: { item },
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   let item = await (
//     await fetch(
//       `${
//         serverRuntimeConfig.ENVIRONMENT === "production"
//           ? serverRuntimeConfig.PRODUCTION
//           : serverRuntimeConfig.DEVELOPMENT
//       }/api/content/get-movie?id=${params.id}`
//     )
//   ).json();

//   return {
//     props: { item },
//     revalidate: 86400,
//   };
// }
