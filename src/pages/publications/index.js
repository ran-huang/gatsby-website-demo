import * as React from "react";
import Layout from "@components/layout/layout";
import Seo from "@components/seo";
import Main from "@components/Main/Main";
import { Link, graphql } from "gatsby";
import Wip from "@components/Misc/Wip";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <Main>
        <Wip />
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/publications/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
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
          date(formatString: "MMMM DD, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
