import {
  ColourColumnW100,
  Header,
} from "../../../styles/page-styles/user-profile-page-styles";

import ChangePasswordComponent from "../../../components/user-management/change-password";
import { NextPage } from "next";
import { PageWrapper } from "../../../styles/page-styles";
import ProfileForm from "../../../components/profile-page/profile-form";
import SEO from "../../../components/seo";
import { UserProfileProps } from "../../../types/types";
import { useGetUserProfile } from "../../../utils/user-profile";

const Profile: NextPage = () => {
  const { data: profile, isLoading } = useGetUserProfile();

  if (isLoading || !profile) {
    return <>Loading...</>;
  }

  return (
    <>
      <SEO page="Profile" />

      <PageWrapper>
        <ColourColumnW100>
          <Header>
            <h2>Profile</h2>
            <p>Your profile is {isProfileComplete(profile)}% complete.</p>
          </Header>

          <ProfileForm profile={profile} />
          <hr />

          <ChangePasswordComponent />
        </ColourColumnW100>
      </PageWrapper>
    </>
  );
};

export default Profile;

const isProfileComplete = (profile: UserProfileProps) => {
  const profileValuesLength =
    Object.values(profile).filter((value) => !!value).length - 2;
  const profileKeysLength = Object.keys(profile).length - 2;

  return (profileValuesLength / profileKeysLength) * 100;
};
