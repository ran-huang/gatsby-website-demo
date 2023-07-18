import * as React from "react";
import Layout from "../components/layout/layout";
import WIP from "../components/Misc/WIP";

const PracticePage = ({ children }) => {
  return (
    <Layout pageTitle="业务领域">
      <p>业务领域</p>
      <WIP/>
    </Layout>
  )
}

export default PracticePage