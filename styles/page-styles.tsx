import { layoutStyles } from "./style-constants";
import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;

  h1,
  h2,
  h3 {
    text-align: left;
  }

  @media (min-width: 1000px) {
    && {
      > * {
        width: 800px;
      }
    }
  }
`;

export const PageWrapperH100 = styled(PageWrapper)`
  height: 100%;
`;

export const PageSection = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;

  * {
    font-size: 1.3rem;
  }
`;

export const CenterColumn = styled.div`
  margin: 0;
  box-sizing: border-box;
  border: 1px solid ${layoutStyles.borderColor};
  background-color: ${layoutStyles.readingBackgroundColor};
  color: ${layoutStyles.color};

  @media (min-width: 1000px) {
    border-radius: 3rem;
    margin: 1rem 0;
    padding: 0 2rem;
  }
`;

export const ColourColumnH100 = styled(CenterColumn)`
  height: 100%;
  width: 100%;
`;
