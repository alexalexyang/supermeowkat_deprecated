import styled, { css } from "styled-components";

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  display: flex;

  button {
    border-top-right-radius: 2rem;
    border-top-left-radius: 0.6rem;
  }
`;

const TabButton = styled.button`
  background-color: transparent;
  border: 1px solid rgba(194, 154, 194, 0.6);
  background-color: rgba(252, 244, 252, 0.6);
  /* box-shadow: 0.5px 0.5px 1px gray; */
  border-bottom: none;
  padding: 1rem;

  > * {
    font-size: 1rem;
  }

  :hover {
    cursor: pointer;
  }

  :active {
    div {
      color: darkred;
      transform: scale(0.8);
    }
  }

  :focus {
    outline: 2px dotted white;
  }
`;

const TabsWrapper = styled.div<{ showTab: string }>`
  width: 100%;
  border: 1px solid rgba(194, 154, 194, 0.6);
  background-color: rgba(252, 244, 252, 0.6);
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  /* box-shadow: 0.5px 0.5px 1px gray; */

  > * {
    padding: 0 1rem;
  }

  ${({ showTab }) =>
    css`
      .${showTab} {
        display: flex;
      }
    `}
`;

const Tab = styled.div`
  width: 100%;
  display: none;
`;

export const TabStyles = {
  StyledTabs,
  ButtonsWrapper,
  TabButton,
  TabsWrapper,
  Tab,
};
