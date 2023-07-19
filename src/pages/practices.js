import * as React from "react";
import Layout from "../components/layout/layout";
import Wip from "../components/Misc/Wip";
import Main from "../components/Main/Main";

const PracticePage = ({ children }) => {
  return (
    <Layout pageTitle="业务领域">
      <Main>
        <h1>业务领域</h1>
        <Wip/>
      </Main>

    </Layout>
  )
}

export default PracticePage