import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Wip from "../components/Misc/Wip";
import Main from "../components/Main/Main";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Houlang">
      <Main>
        <p>Hi there! We're a group of professional lawyers that help people.</p>
        <Wip/>
      </Main>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <Seo title="About Houlang" />