import { layoutStyles, navBarStyles } from "./style-constants";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${layoutStyles.backgroundColor};
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;

    font-family: Roboto, sans-serif;
    line-height: 1.8rem;
    color: ${layoutStyles.color};
  }

  a {
    color: ${layoutStyles.linkColor};
    text-decoration: none;

    :hover {
      color: ${layoutStyles.hoverColor};;
    }
  }

  #__next {
    height: 100%;
    width: 100%;
  }
`;

const Children = styled.div`
  display: flex;
  flex-direction: column;
  animation: fadein 0.5s;
  height: calc(100% - ${navBarStyles.height});

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LayoutStyles = {
  GlobalStyle,
  Children,
};

export default LayoutStyles;
