import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout/layout';
import Seo from '../../components/seo';
import Main from '../../components/Main/Main';
import CaseWrapper from './style.js';
import CaseCard from '@components/Card/case-card';

const Cases = ({ data }) => {

  return (
    <Layout>
      <Main>
        <CaseWrapper>
          <h1>成功案例</h1>
          <div className="content">
            {
              data.allMdx.nodes.map((node, index) => (
                <CaseCard cardData={node} key={index}/>
              ))
            }
          </div>

        </CaseWrapper>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/(cases)/" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          result
          author
        }
      }
    }
  }
`;

export const Head = () => <Seo title="成功案例" />;

export default Cases;
