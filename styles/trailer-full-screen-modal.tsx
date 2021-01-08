import styled, { css } from "styled-components";

const FullScreenModal = styled.div<{ trailerId: string }>`
  ${({ trailerId }) =>
    trailerId &&
    css`
      #${trailerId} {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(85, 85, 85, 0.8);
        height: 100vh;
        width: 100vw;
      }
    `}
`;

const Centered = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-bottom: 1rem;
  }

  iframe {
    border: none;
    width: 100%;
    height: 60%;
  }

  @media (min-width: 750px) {
    iframe {
      height: 80%;
    }
  }
`;

const TrailerModal = {
  FullScreenModal,
  Centered,
};

export default TrailerModal;
