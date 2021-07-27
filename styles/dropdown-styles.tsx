import { layoutStyles } from "./style-constants";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  min-width: 10rem;
  z-index: 1;
  background-color: plum;
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  > :first-child {
    padding-top: 2rem;
  }

  > :last-child {
    padding-bottom: 2rem;
  }

  > * {
    display: block;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    color: ${layoutStyles.color};

    :hover {
      background-color: pink;
      border-top-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }
`;

const DropdownStyles = {
  DropdownWrapper,
  DropdownMenu,
};

export default DropdownStyles;
