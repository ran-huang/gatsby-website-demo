import * as React from 'react';
import Seo from '../../components/seo';
import Layout from '../../components/layout/layout';
import Main from '../../components/Main/Main';
import * as styles from './practices.module.css';
import { Link, graphql } from 'gatsby';
import { IoIosBusiness } from 'react-icons/io';
import { FaFileSignature, FaShieldAlt, FaBusinessTime } from 'react-icons/fa';
import { FaBuildingShield } from 'react-icons/fa6';
import { VscLaw } from 'react-icons/vsc';

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { rank: ASC } }
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

const PracticePage = ( { data }) => {
  const getIcon = (slug) => {
    switch (slug) {
      case 'defense':
        return <VscLaw className={styles.cardIcon} />;
      case 'compliance':
        return <IoIosBusiness className={styles.cardIcon} />;
      case 'risks':
        return <FaBuildingShield className={styles.cardIcon} />
      case 'business':
        return <FaBusinessTime className={styles.cardIcon} />;
      case 'mergers-and-acquisitions':
        return <FaFileSignature className={styles.cardIcon} />;
      case 'solutions':
        return <FaShieldAlt className={styles.cardIcon} />;
      default:
        return <VscLaw className={styles.cardIcon} />;
    }
  }

  return (
    <Layout pageTitle="业务领域">
      <Main>
        <h1 className={styles.title}>业务领域</h1>
        <div className={styles.content}>
          {
            data.allMdx.nodes.map((node) => {
              return (
                <div className={styles.card}>
                  <Link to={`/practices/${node.frontmatter.slug}`} className={styles.cardLink}>
                    {getIcon(node.frontmatter.slug)}
                    <div className={styles.cardName}>{node.frontmatter.title}</div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </Main>
    </Layout>
  );
};

export default PracticePage;

export const Head = () => <Seo title="业务领域" />;
