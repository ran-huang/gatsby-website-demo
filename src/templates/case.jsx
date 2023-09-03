import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/layout/layout';
import Seo from '@components/seo';
import Main from '@components/Main/Main';
import Article from '@components/Article';

const CasePage = ({ data, children }) => {
  const { title, slug } = data.mdx.frontmatter;
  const { previous = {}, next = {} } = data.allMdx?.edges?.filter((edge) => edge?.node?.frontmatter?.slug == slug)[0] || {};

  return (
    <Layout pageTitle={title}>
      <Main>
        <Article type="case" slug={slug} previous={previous} next={next}>{children}</Article>
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
      filter: {internal: {contentFilePath: {regex: "/(cases)/"}}}
      sort: {frontmatter: {date: ASC}}
    ) {
      edges {
        next {
          frontmatter {
            title
            slug
          }
        }
        previous {
          frontmatter {
            slug
            title
          }
        }
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default CasePage;
