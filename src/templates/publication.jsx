import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/layout/layout';
import Seo from '@components/seo';
import Main from '@components/Main/Main';
import Article from '@components/Article';
import PageNav from '@components/Nav/pageNav';

const PublicationPage = ({ data, children }) => {
  const { title, slug } = data.mdx.frontmatter;
  // const currentNode = data.allMdx?.edges?.filter((edge) => edge?.node?.frontmatter?.slug == slug)[0];
  // const { previous = {}, next = {} } = currentNode?.frontmatter;

  return (
    <Layout pageTitle={title}>
      <Main>

        <Article>{children}</Article>
        {/* <PageNav previous={previous} next={next} /> */}
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
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default PublicationPage;
