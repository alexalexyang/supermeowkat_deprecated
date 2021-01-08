import { buttonStyles, profilePageStyles } from "./style-constants";

import styled from "styled-components";

export const StyledForm = styled.form`
  box-sizing: border-box;
  /* padding: 0 1rem 1.5rem; */
  /* border: 1px solid green; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.3rem;

  label {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;

    :hover {
      color: ${profilePageStyles.profileHoverColor};
    }
  }

  button {
    align-self: center;
  }
`;

export const Input = styled.input`
  font-size: 1.3rem;
  width: 70%;
  border: 1px dotted mediumseagreen;
  /* background-color: seashell; */
  border-radius: 1rem;
  min-height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  outline: none;

  :hover {
    border: 1px solid fuchsia;
    background-color: floralwhite;
  }

  :focus-visible {
    border: 2px solid dodgerblue;
  }
`;

export const PasswordWrapper = styled.section`
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    border-radius: 0.5rem;
  }

  > :nth-child(2) {
    width: calc(70% + 2rem);
  }

  :hover {
    color: ${profilePageStyles.profileHoverColor};

    button {
      background-color: ${buttonStyles.hoverBackgroundColor};
    }
  }
`;
