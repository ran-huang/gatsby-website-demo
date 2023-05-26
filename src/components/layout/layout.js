import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              主页
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/professionals" className={navLinkText}>
              律师团队
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/practices" className={navLinkText}>
              业务领域
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/cases" className={navLinkText}>
              成功案例
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/publications" className={navLinkText}>
              专业视点
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              联系我们
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
