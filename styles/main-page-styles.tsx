import { layoutStyles, mainPageStyles } from "./style-constants";

import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* border: 2px solid red; */

  @media (min-width: 700px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    && {
      > * {
        width: 500px;
      }
    }
  }
`;

export const Body = styled.div`
  height: 95%;
  width: 100%;
  /* border: 2px solid blue; */

  @media (min-width: 700px) {
    height: 70%;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  /* border: 2px solid chartreuse; */

  @media (min-width: 700px) {
    height: 89%;
  }
`;

export const ContentLayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${layoutStyles.readingBackgroundColor};
  border: 1px solid lightgray;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0 1rem 6rem;

  h1 {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;

    a {
      color: ${layoutStyles.color};
      text-decoration: underline;

      :hover {
        color: cyan;
      }
    }
  }

  article {
    margin-top: 1rem;
    text-align: justify;
    font-size: 1.1rem;
  }

  > * {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 700px) {
    padding: 0 0 0 1rem;
    border-radius: 1rem;
    overflow-y: hidden;

    > * {
      padding-right: 1rem;
      height: 100%;
      overflow-y: auto;
    }
  }
`;

export const ContentHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const Likes = styled.div`
  margin-top: 1.3rem;
  font-size: 1rem;
`;

export const TrailersWrapper = styled.section`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  justify-content: space-evenly;
`;

export const CarouselWrapper = styled.section`
  width: 80%;
  align-self: center;
  margin: 0.5rem 0;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid lightgray;

  > * {
    display: flex;
    flex-direction: column;

    li {
      height: ${mainPageStyles.carousel.imageSize};
      /* padding-bottom: 0; */
    }
  }

  :hover {
    background-color: aliceblue;
  }
`;

export const CarouselSliderWrapper = styled.div`
  margin: 1rem;
  align-self: center;
  width: 100%;
  position: relative;
`;

export const ImageWrapper = styled.section`
  height: ${mainPageStyles.carousel.imageSize};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledSocials = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 2;
  align-items: center;

  button {
    svg {
      path {
        fill: magenta;
      }
    }

    :hover {
      svg {
        path {
          fill: lime;
        }
      }
    }

    :active {
      svg {
        path {
          fill: gold;
        }
      }
    }
  }
`;

export const EditOn = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${mainPageStyles.footer.borderTopColor};
  text-align: right;
  font-size: 1rem;

  > * {
    margin-left: 0.5rem;
  }
`;

export const ButtonsWrapper = styled.div`
  /* border: 1px solid magenta; */
  position: absolute;
  bottom: 0;
  height: ${mainPageStyles.likeButtonsWrapper.height};
  width: 100%;
  display: flex;
  background-color: ${mainPageStyles.likeButtonsWrapper.backgroundColor};

  @media (min-width: 700px) {
    bottom: auto;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    > * {
      width: 20% !important;
    }
  }
`;

export const BannerWrapper = styled.div`
  height: ${mainPageStyles.messagesBanner.height};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${mainPageStyles.messagesBanner.backgroundColor};
  font-size: 1.1rem;

  animation: fadein 0.5s;

  :hover {
    background-color: chartreuse;
  }

  @media (min-width: 700px) {
    border-radius: 1rem;
    /* box-shadow: 0 2px 6px 0 #9e7171; */
  }
`;

export const SingleButtonWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
