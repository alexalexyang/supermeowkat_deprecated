import { ColourColumnH100, PageWrapperH100 } from "../../styles/page-styles";

import DashboardItem from "../../components/dashboardItem";
import DashboardStyles from "../../styles/dashboard-styles";
import { NextPage } from "next";
import ProfileIcon from "../../styles/icons/address-card-icon";
import SEO from "../../components/seo";
import SettingsIcon from "../../styles/icons/cogs-icon";
import VignettesIcon from "../../styles/icons/pencil-icon";
import { useGetUserProfile } from "../../utils/user-profile";

const Dashboard: NextPage = () => {
  const { data: profile } = useGetUserProfile();

  if (!profile) {
    return null;
  }

  return (
    <>
      <SEO page="Dashboard" />
      <PageWrapperH100 aria-label="Dashboard">
        <ColourColumnH100>
          <DashboardStyles.Wrapper>
            <DashboardStyles.LinksWrapper aria-label="Links">
              <DashboardItem url="/dashboard/profile" title="Profile">
                <ProfileIcon alt="profile" />
              </DashboardItem>

              <DashboardItem url="/dashboard/settings" title="Settings">
                <SettingsIcon alt="settings" />
              </DashboardItem>

              <DashboardItem url="/vignettes" title="Vignettes">
                <VignettesIcon alt="vignettes" />
              </DashboardItem>
            </DashboardStyles.LinksWrapper>
            <DashboardStyles.BottomWrapper>
              <h2>Costs</h2>
              <p>
                Vercel:{" "}
                <a
                  href="https://vercel.com/docs/platform/fair-use-policy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Free within limits
                </a>
              </p>
              <p>
                MongoDB:{" "}
                <a
                  href="https://www.mongodb.com/pricing"
                  rel="noreferrer"
                  target="_blank"
                >
                  Free for small projects.
                </a>{" "}
                Rate limit:{" "}
                <a
                  href="https://docs.atlas.mongodb.com/api/#:~:text=Rate%20Limiting,-Certain%20resources%20limit&text=For%20these%20resources%2C%20Atlas%20allows,requests%20per%20minute%20per%20project."
                  rel="noreferrer"
                  target="_blank"
                >
                  100 requests/min
                </a>
              </p>
              <p>
                TMDB:{" "}
                <a
                  href="https://www.themoviedb.org/documentation/api/terms-of-use"
                  rel="noreferrer"
                  target="_blank"
                >
                  Free within limits
                </a>
              </p>
              <p>Marketing: USD ...</p>
              <p>Support/Purchase</p>
            </DashboardStyles.BottomWrapper>
          </DashboardStyles.Wrapper>
        </ColourColumnH100>
      </PageWrapperH100>
    </>
  );
};

export default Dashboard;
