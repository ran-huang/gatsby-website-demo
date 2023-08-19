import * as React from 'react';
import Seo from '../../components/seo';
import Layout from '../../components/layout/layout';
import Main from '../../components/Main/Main';
import * as styles from './practices.module.css';
import { Link, graphql } from 'gatsby';
import { GiHandcuffs } from 'react-icons/gi';
import { IoIosBusiness } from 'react-icons/io';
import { FaBalanceScale, FaFileSignature, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineBusiness } from 'react-icons/md';

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
          icon
        }
      }
    }
  }
`;

const PracticePage = ( { data }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case 'criminal':
        return <GiHandcuffs className={styles.cardIcon} />;
      case 'compliance':
        return <IoIosBusiness className={styles.cardIcon} />;
      case 'risk':
        return <FaBalanceScale className={styles.cardIcon} />
      case 'corporate':
        return <MdOutlineBusiness className={styles.cardIcon} />;
      case 'merger':
        return <FaFileSignature className={styles.cardIcon} />;
      case 'regulatory':
        return <FaShieldAlt className={styles.cardIcon} />;
      default:
        return <FaBalanceScale className={styles.cardIcon} />;
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
                    {getIcon(node.frontmatter.icon)}
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
