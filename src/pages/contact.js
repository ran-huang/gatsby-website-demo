import * as React from "react";
import Layout from "../components/layout/layout";
import WIP from "../components/Misc/WIP";

const ContactPage = ({ children }) => {
  return (
    <Layout pageTitle="联系我们">
      <p>这一页是联系方式</p>
      <WIP />
    </Layout>
  )
}

export default ContactPage