import { ContentLayer } from "./main-page-styles";
import styled from "styled-components";

export const StyledWarning = styled.p`
  font-size: 1rem;
  color: crimson;
`;

export const LoadingImageWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    border-radius: 50%;
    background-color: lemonchiffon;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 1000px) {
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const MostLikedWrapper = styled.div`
  width: 100%;

  > h1 {
    text-align: center;
    color: #f7eaff;
    text-shadow: 1px 2px 3px #795050;
  }

  ${ContentLayer} {
    height: auto;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid darkgrey;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > * {
      margin: 1rem 0;
      width: 500px;
    }

    ${ContentLayer} {
      padding-bottom: 0;
    }
  }
`;
