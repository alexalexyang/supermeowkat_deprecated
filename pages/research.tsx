import { CenterColumn, PageSection, PageWrapper } from "../styles/page-styles";

import SEO from "../components/seo";
import showdown from "showdown";

const converter = new showdown.Converter({
  simpleLineBreaks: true,
  tables: true,
  noHeaderId: true,
});

export default function About() {
  const main = require(`../apps/research/research.md`);
  const mainContent = converter.makeHtml(main.default);
  const questionCensorship = require(`../apps/research/question-censorship.md`);
  const questionCensorshipContent = converter.makeHtml(
    questionCensorship.default
  );

  return (
    <>
      <SEO
        page="Research"
        description={
          "It's a funny thing. Long ago I conceived of explorations to undertake but never had the stability for them. Now I set out to build a loose commercial experiment and it very quickly drifted into my desires for those latent ideas. As it turns out, then, this app will attempt to balance three aims."
        }
      />
      <PageWrapper>
        <CenterColumn>
          <PageSection>
            <article
              dangerouslySetInnerHTML={{ __html: mainContent }}
            ></article>
          </PageSection>

          <PageSection>
            <article
              dangerouslySetInnerHTML={{ __html: questionCensorshipContent }}
            ></article>
          </PageSection>
        </CenterColumn>
      </PageWrapper>
    </>
  );
}
