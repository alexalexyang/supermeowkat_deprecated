import Main from "../apps/main/index";
import { NextPage } from "next";
import SEO from "../components/seo";

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <SEO page="Home" />
      <Main />
    </>
  );
};

export default Home;
