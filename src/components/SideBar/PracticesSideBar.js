import React from 'react';
import { Link } from 'gatsby';
import * as styles from './PracticesSideBar.module.css';

function PracticesSideBar({ data }) {
  return (
    <div className={styles.sideBarContainer}>
      <ul className={styles.sideBarList}>
        {data.allMdx.nodes.map((node) => {
          return (
            <li key={node.frontmatter.slug} className={styles.sideBarItem}>
              <Link
                to={`/practices/${node.frontmatter.slug}`}
                className={styles.sideBarLink}
                activeClassName={styles.sideBarLinkActive}
              >
                {node.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PracticesSideBar;
