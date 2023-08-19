import * as React from 'react';
import Layout from '../../components/layout/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';
import Main from '../../components/Main/Main';
import * as styles from './practicePage.module.css';
import PracticesSideBar from '../../components/SideBar/PracticesSideBar';

const PracticePage = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Main>
        <div className={styles.layout}>
          <PracticesSideBar data={data} />
          <div className={styles.mdxContent}>{children}</div>
        </div>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
      }
    }
    allMdx(
      sort: { internal: { contentFilePath: ASC } }
      filter: { internal: { contentFilePath: { regex: "/(practices)/" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default PracticePage;
