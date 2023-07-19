import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Wip from "../components/Misc/Wip";
import Main from "../components/Main/Main";

const ContactPage = () => {
  return (
    <Layout pageTitle="联系我们">
      <Main>
        <h>这一页是联系方式</h>
        <Wip />
      </Main>
    </Layout>
  )
}

export const Head = () => <Seo title="联系我们" />;

export default ContactPage;
