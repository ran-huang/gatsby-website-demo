import * as React from "react";
import Layout from "../../components/layout/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";
import WIP from "../../components/Misc/WIP";

const Cases = ({ data }) => {
  return (
    <Layout pageTitle="My Cases">
      <WIP />
      {
        data.allMdx.nodes.map((node) => (
          <article key= {node.id}>
            <h2>
              <Link to={`/cases/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: {regex: "/(cases)/"}} }
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

export const Head = () => <Seo title="My Cases" />;

export default Cases;
