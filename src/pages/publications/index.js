import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/layout/layout';
import Seo from '@components/seo';
import Main from '@components/Main/Main';
import PublicationWrapper from './style.js';
import PublicationCard from '@components/Card/publication-card/index.jsx';

const Publications = ({ data }) => {

  return (
    <Layout>
      <Main>
        <PublicationWrapper>
          <h1>专业视点</h1>
          <div className="content">
            {
              data.allMdx.nodes.map((node, index) => (
                <PublicationCard cardData={node} key={index}/>
              ))
            }
          </div>

        </PublicationWrapper>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/(publications)/" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          slug
          title
          author
        }
      }
    }
  }
`;

export const Head = () => <Seo title="专业视点" />;

export default Publications;
