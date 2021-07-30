import { RoundButton } from "../buttons";
import styled from "styled-components";

export const StyledRoundButton = styled(RoundButton)`
  border: none;
  font-size: 2rem;
  height: 2rem;
  width: 2rem;
  padding: 2px;

  :hover {
    transform: scale(1.5) translateY(-30%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  width: fit-content;
`;
