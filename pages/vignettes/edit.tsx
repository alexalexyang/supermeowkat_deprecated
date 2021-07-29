import {
  AddVignetteWrapper,
  Header,
  PageWrapper,
} from "../../styles/page-styles/vignette-edit-page-styles";

import { NextPage } from "next";
import PastVignettesSection from "../../components/vignette/edit-page/past-vignettes-section";
import Prompts from "../../components/vignette/edit-page/prompts-section";
import SEO from "../../components/seo";
import WritingSection from "../../components/vignette/edit-page/writing-section";
import { useGetUserProfile } from "../../utils/user-profile";
import { useGetUserVignettes } from "./helpers";

interface Props {}

const EditVignettePage: NextPage<Props> = () => {
  const { data: profile, isLoading: profileLoading } = useGetUserProfile();

  const { data: userVignettes, isLoading: vignettesLoading } =
    useGetUserVignettes(profile?.id);

  if (profileLoading || !profile || vignettesLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <SEO page="Vignettes" />
      <PageWrapper>
        <Header>
          <h1>Edit Vignettes</h1>
          <p>You get 5 vignettes per week.</p>

          <p>The latest vignettes are randomised and displayed.</p>
        </Header>
        {userVignettes.length < 5 && (
          <AddVignetteWrapper>
            <Prompts />
            <WritingSection profile={profile} />
          </AddVignetteWrapper>
        )}

        {userVignettes.length > 0 && (
          <PastVignettesSection entries={userVignettes} />
        )}
      </PageWrapper>
    </>
  );
};

export default EditVignettePage;
