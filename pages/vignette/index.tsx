import {
  Header,
  PageWrapper,
} from "../../styles/page-styles/vignette-page-styles";
import { useEffect, useState } from "react";

import Link from "next/link";
import { NextPage } from "next";
import Reactions from "../../components/vignette/reactions";
import SEO from "../../components/seo";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { useGetUserProfile } from "../../utils/user-profile";

const EntriesSection = styled.div`
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

const StyledArticle = styled.article`
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

const ArticleH2 = styled.h2`
  margin: 0;
`;

const ArticleP = styled.p`
  margin: 0;
`;

const ArticleFooter = styled.footer`
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

interface EntryProps {
  _id: string;
  title: string;
  body: string;
}

interface Props {}

const Vignette: NextPage<Props> = () => {
  const { data: user } = useGetUserProfile();
  const [entries, setEntries] = useState<EntryProps[]>([]);

  // TODO: use react-query
  useEffect(() => {
    const results = async () => {
      const res = await (await fetch(`/api/vignette/get-entries`)).json();

      if (res.results.length > 0) {
        setEntries(res.results);
      }
    };

    results();
  }, []);

  return (
    <>
      <SEO page="Vignettes" />
      <PageWrapper>
        <Header>
          <h1>Vignettes</h1>

          {/* TODO: if already 5, do not show link to add more. */}

          <Link href={`/vignette/edit`}>
            <a href={`/vignette/edit`}>Edit your vignettes.</a>
          </Link>
        </Header>

        <EntriesSection>
          {entries.map((entry: EntryProps) => (
            <StyledArticle key={entry._id}>
              <ArticleH2>{entry.title}</ArticleH2>
              <ArticleP>{entry.body}</ArticleP>
              <ArticleFooter>
                <Reactions entryId={entry._id} user={user} />
              </ArticleFooter>
            </StyledArticle>
          ))}
        </EntriesSection>
      </PageWrapper>
    </>
  );
};

export default Vignette;
