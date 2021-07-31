import {
  ArticleFooter,
  ArticleH2,
  ArticleP,
  EntriesSection,
  StyledArticle,
} from "../../styles/vignette/vignette-display-page-styles";
import {
  Header,
  PageWrapper,
} from "../../styles/vignette/vignette-edit-page-styles";

import Link from "next/link";
import Loading from "../../components/loading";
import { NextPage } from "next";
import Reactions from "../../components/vignette/display-page/reactions";
import { RoundButton } from "../../styles/buttons";
import SEO from "../../components/seo";
import { VignetteProps } from "../../types/vignette-types";
import { useGetUserProfile } from "../../utils/user-profile";
import { useGetVignettes } from "../../components/vignette/display-page/helpers";

const VignettesPage: NextPage = () => {
  const { data: user } = useGetUserProfile();
  const {
    data: vignettes,
    isLoading: vignettesLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetVignettes();

  if (!user || vignettesLoading) {
    return <Loading />;
  }

  const { pages } = vignettes as {
    pageParams: any[];
    pages: VignetteProps[][];
  };

  return (
    <>
      <SEO page="Vignettes" />
      <PageWrapper>
        <Header>
          <h1>Vignettes</h1>

          <Link href={`/vignettes/edit`}>
            <a href={`/vignettes/edit`}>Add/edit your vignettes.</a>
          </Link>
        </Header>

        <EntriesSection>
          {pages?.map((page) =>
            page?.map((entry) => (
              <StyledArticle key={entry._id}>
                <ArticleH2>{entry.title}</ArticleH2>
                <ArticleP>{entry.body}</ArticleP>
                <ArticleFooter>
                  <Reactions
                    entryId={entry._id}
                    user={user}
                    reactions={entry.reactions}
                  />
                </ArticleFooter>
              </StyledArticle>
            ))
          )}
        </EntriesSection>

        {hasNextPage ? (
          <RoundButton onClick={() => fetchNextPage()}>Test</RoundButton>
        ) : (
          <p>No more pages</p>
        )}
      </PageWrapper>
    </>
  );
};

export default VignettesPage;
