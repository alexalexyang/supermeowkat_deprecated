import {
  ArticleFooter,
  ArticleH2,
  ArticleP,
  EntriesSection,
  StyledArticle,
} from "../../styles/page-styles/vignette-display-page-styles";
import {
  Header,
  PageWrapper,
} from "../../styles/page-styles/vignette-edit-page-styles";

import Link from "next/link";
import Loading from "../../components/loading";
import { NextPage } from "next";
import Reactions from "../../components/vignette/display-page/reactions";
// import { RoundButton } from "../../styles/buttons";
import SEO from "../../components/seo";
import { useGetUserProfile } from "../../utils/user-profile";
import { useGetVignettes } from "../../components/vignette/helpers";

interface EntryProps {
  _id: string;
  title: string;
  body: string;
}

interface Props {}

const Vignette: NextPage<Props> = () => {
  const { data: user } = useGetUserProfile();
  const { data: vignettes, isLoading } = useGetVignettes({});

  if (!user || isLoading) {
    return <Loading />;
  }

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
          {vignettes.map((entry: EntryProps) => (
            <StyledArticle key={entry._id}>
              <ArticleH2>{entry.title}</ArticleH2>
              <ArticleP>{entry.body}</ArticleP>
              <ArticleFooter>
                <Reactions entryId={entry._id} user={user} />
              </ArticleFooter>
            </StyledArticle>
          ))}
        </EntriesSection>

        {/* <RoundButton onClick={() => fetchNextPage()}>Test</RoundButton> */}
      </PageWrapper>
    </>
  );
};

export default Vignette;
