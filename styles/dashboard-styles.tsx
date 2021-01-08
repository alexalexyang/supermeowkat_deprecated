import { menuItemStyles } from "./style-constants";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinksWrapper = styled.div`
  border-bottom: 1px solid black;
  /* box-shadow: 1px 1px 1px #b386cf; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 100%;
  gap: 2rem;

  @media (min-width: 1000px) {
    box-shadow: none;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    height: 3rem;
    width: 3rem;
  }

  a {
    text-align: center;
    height: 100%;
    width: 100%;
  }

  p {
    margin: 0;
    font-size: 1.3rem;
  }

  :hover {
    svg {
      path {
        fill: ${menuItemStyles.hoverColor2};
      }
    }
  }
`;

const BottomWrapper = styled.div`
  flex-grow: 1;
  width: 100%;

  box-sizing: border-box;
  padding: 1rem;

  h2 {
    font-size: 1.8rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.2rem;
    margin: 0;
  }

  p:last-child {
    margin-top: 0.5rem;
    text-align: right;
    color: seagreen;
  }
`;

const DashboardStyles = { Wrapper, LinksWrapper, LinkWrapper, BottomWrapper };

export default DashboardStyles;
