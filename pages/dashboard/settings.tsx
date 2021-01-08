import { ColourColumnW100 } from "../../styles/page-styles/user-profile-page-styles";
import DeleteUser from "../../components/user-management/delete-user";
import { NextPage } from "next";
import { PageWrapper } from "../../styles/page-styles";
import SEO from "../../components/seo";
import { useGetUserProfile } from "../../utils/user-profile";

const Settings: NextPage = () => {
  const { data: profile } = useGetUserProfile();

  if (!profile) {
    return null;
  }

  return (
    <>
      <SEO page="Settings" />

      <PageWrapper>
        <ColourColumnW100>
          <h1>Settings</h1>

          <h2>Search settings</h2>
          <p>Maximum distance</p>
          <p>Age range</p>

          <h2>Policies</h2>
          <p>Cookies</p>
          <p>Privacy</p>
          <p>Terms of Service</p>

          <DeleteUser />
        </ColourColumnW100>
      </PageWrapper>
    </>
  );
};

export default Settings;
