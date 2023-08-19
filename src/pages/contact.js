import * as React from "react";
import Layout from "../components/layout/layout";
import Main from "../components/Main/Main";
import Seo from "../components/seo";
import Wip from "../components/Misc/Wip";

const ContactPage = () => {
  return (
    <Layout pageTitle="联系我们">
      <Main>
        <h1>这一页是联系方式</h1>
        <Wip />
      </Main>
    </Layout>
  )
}

export const Head = () => <Seo title="联系我们" />;

export default ContactPage;
