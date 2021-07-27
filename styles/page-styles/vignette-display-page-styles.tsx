import styled from "styled-components";

export const EntriesSection = styled.div`
  width: 100%;

  > * {
    margin-bottom: 2rem;
  }

  footer {
    margin-top: 1.5rem;
  }

  @media (min-width: 600px) {
    && {
      width: 600px;
    }
  }
`;

export const StyledArticle = styled.article`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 1rem;
  padding: 1.5rem;

  > :not(:last-child) {
    margin-bottom: 0.5rem;
  }

  :hover {
    border-color: gray;
  }
`;

export const ArticleH2 = styled.h2`
  margin: 0;
`;

export const ArticleP = styled.p`
  margin: 0;
`;

export const ArticleFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: snow;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: fit-content;

  button {
    border: none;
    font-size: 2rem;
    height: 2rem;
    width: 2rem;
    padding: 2px;
  }

  :hover {
    background-color: lavender;
    border-color: lavender;
  }

  > :first-child {
    padding-right: 1rem;
    border-right: 1px solid lightgray;
  }
`;
