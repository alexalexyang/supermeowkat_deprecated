import { CenterColumn, PageSection, PageWrapper } from "../styles/page-styles";

import Image from "next/image";
import { NextPage } from "next";
import SEO from "../components/seo";
import TMDBLogo from "../public/tmdb_logo.svg";
import showdown from "showdown";
import styled from "styled-components";

const converter = new showdown.Converter({
  simpleLineBreaks: true,
  tables: true,
  noHeaderId: true,
});

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 40%;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 5px lightgray;

  :hover {
    transform: scale(1.2);
    transition: transform 0.2s;
  }
`;

export const tabContent = [
  {
    key: "Mainstream",
    content: converter.makeHtml(
      require(`../apps/main/abouts/mainstream.md`).default
    ),
  },
  {
    key: "Research",
    content: converter.makeHtml(
      require(`../apps/main/abouts/research.md`).default
    ),
  },
  {
    key: "Action",
    content: converter.makeHtml(
      require(`../apps/main/abouts/action.md`).default
    ),
  },
];

const About: NextPage = () => {
  return (
    <>
      <SEO
        page="About"
        description={
          "This app started as a way to surface films from the Global South because I got sick and tired of US cultural hegemony burying everyone else's voices. It has since evolved into something a wee bit more ambitious."
        }
      />
      <PageWrapper>
        <CenterColumn>
          <ImgWrapper>
            <StyledImg src={`/logo.png`} loading="lazy" />
          </ImgWrapper>

          <PageSection>
            <h1>What&apos;s supermeowkat?</h1>

            <p>
              An app that helps you find amazing movies from around the world!
            </p>
            <p>
              A Gramscian device aimed at the USA&apos;s global stranglehold on
              culture.
            </p>

            <p>
              A research object with which I reason about social networks.
              {/* Baby research writing{" "}
              <Link href="https://supermeowkat.com/research">
                <a href="https://supermeowkat.com/research">here</a>
              </Link>
              . */}
            </p>

            <h2>Roadmap</h2>

            <p>
              There&apos;s <i>a lot</i> to do. Maybe first full iteration by end
              2021.
            </p>

            {/* <Tabs content={tabContent} /> */}

            <h2>Contact</h2>

            <p>
              Follow on{" "}
              <a href="https://twitter.com/supermeowkat" target="__blank">
                Twitter
              </a>
              .
            </p>

            <p>
              Mail only <a href="mailto:alexalexyang@gmail.com">love letters</a>
              .
            </p>

            <h2>Acknowledgements</h2>
            <p>Thanks to the following for data and icons:</p>

            <a href="https://www.themoviedb.org/" target="__blank">
              <Image src={TMDBLogo} alt="TMDB" height="35" loading="lazy" />
            </a>

            <p>
              <a href="https://fontawesome.com/license/" target="__blank">
                Font Awesome
              </a>
            </p>

            <p>
              <a href="https://www.freepik.com" target="__blank">
                Freepik
              </a>
              ,{" "}
              <a href="https://www.flaticon.com/" target="__blank">
                flaticon
              </a>
            </p>
          </PageSection>
        </CenterColumn>
      </PageWrapper>
    </>
  );
};

export default About;
