import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Hero from "../components/Homepage/Hero";
import ServicesIntro from "../components/Homepage/ServicesIntro";
import FAQ from "../components/Homepage/FAQ";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <ServicesIntro />
      <FAQ />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="后浪法评" />;
