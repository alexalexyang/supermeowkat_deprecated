import { ButtonBack, ButtonNext, DotGroup } from "pure-react-carousel";
import { buttonStyles, mainPageStyles } from "./style-constants";
import styled, { css } from "styled-components";

export const GenericButton = styled.button`
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid black;
  background-color: white;
  text-transform: uppercase;

  :hover {
    background-color: ${buttonStyles.hoverBackgroundColor};
  }

  :active {
    background-color: yellow;
  }

  :disabled {
    border: 1px solid lightgray;
    color: lightgray;
  }

  :disabled:hover {
    background-color: white;
  }
`;

export const RoundButton = styled(GenericButton)<{ isTouchScreen?: boolean }>`
  height: ${mainPageStyles.likeButton.height};
  width: ${mainPageStyles.likeButton.height};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 100%;
  /* outline: none; */
  transition-duration: 0.05s;

  > * {
    height: 3rem;
    width: 3rem;
  }

  /* ${({ isTouchScreen }) =>
    !isTouchScreen &&
    css`
      :hover {
        transform: scale(1.1);
        background-color: #fdeef1;
      }
    `} */

  :active {
    transform: scale(0.9);
  }

  :disabled:active {
    transform: scale(1);
  }
`;

const ChevronButton = css`
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid lightgrey;
  border-radius: 50%;

  :disabled {
    background-color: whitesmoke;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  :disabled {
    svg {
      path {
        fill: lightgray;
      }
    }

    cursor: default;
  }
`;

export const CarouselBackButton = styled(ButtonBack)`
  ${ChevronButton}

  position: absolute;
  top: 50%;
  left: 2rem;

  @media (min-width: 700px) {
    left: 4rem;
  }
`;

export const CarouselNextButton = styled(ButtonNext)`
  ${ChevronButton}

  position: absolute;
  top: 50%;
  right: 2rem;

  @media (min-width: 700px) {
    right: 4rem;
  }
`;

export const CarouselDotGroup = styled(DotGroup)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  gap: 0.5rem;

  button {
    padding: 0;
    height: 0.8rem;
    width: 0.8rem;
    border: none;
    border-radius: 50%;
    background-color: pink;

    :hover {
      background-color: turquoise;
    }

    :disabled {
      background-color: salmon;
    }
  }
`;

export const CloseButton = styled.button`
  display: flex;
  font-weight: 700;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid darkolivegreen;
  background-color: floralwhite;
  color: darkblue;

  :hover {
    color: crimson;
    background-color: cyan;
  }
`;
