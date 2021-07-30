import { RoundButton } from "../buttons";
import styled from "styled-components";

export const ReactionButton = styled(RoundButton)`
  border: none;
  font-size: 2rem;
  height: 2rem;
  width: 2rem;
  padding: 2px;

  :hover {
    transform: scale(1.5) translateY(-30%);
  }
`;

export const OpenReactionsButton = styled(RoundButton)`
  border: none;
  font-size: 2rem;
  height: 2rem;
  width: 2rem;
  padding: 2px;

  :hover {
    background-color: lawngreen;
  }
`;

export const ReactionBackground = styled.div`
  font-size: 2rem;
  height: 2rem;
  width: 2rem;
  padding: 2px;

  :hover {
    transform: scale(1.5) translateY(-30%);
  }
`;

export const ReactionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  width: fit-content;
`;
