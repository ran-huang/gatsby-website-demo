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
import '@fontsource/noto-sans-sc';
import Header from "../Header/Header";
import Main from "../Main/Main";

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
      <Header />
      <Main pageTitle={pageTitle} children={children} />
    </div>
  );
};

export default Layout;
