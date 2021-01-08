import { CenterColumn } from "../page-styles";
import styled from "styled-components";

export const ColourColumnW100 = styled(CenterColumn)`
  width: 100%;
  padding: 2rem 3rem;

  > :last-child {
    margin-top: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  h2 {
    margin: 0.5rem 0;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
`;
