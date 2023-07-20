import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Main from "../components/Main/Main";
import Hero from "../components/Homepage/Hero";
import ServicesIntro from "../components/Homepage/ServicesIntro";
import Faq from "../components/Homepage/Faq";
import Cases from "../components/Homepage/Cases";
import Process from "../components/Homepage/Process";
import Team from "../components/Homepage/Team";
import Wip from "../components/Misc/Wip";

const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <Hero />
        <ServicesIntro />
      </Main>

      <Faq />

      <Main>
        <Cases />
      </Main>

      <Process />

      <Main>
        <Team />
      </Main>

    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="后浪法评" />;
