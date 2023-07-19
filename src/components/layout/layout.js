import * as React from "react";
import {
  container
} from "./layout.module.css";
import '@fontsource/noto-sans-sc';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ pageTitle, children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <div className={container}>
      <Header />
      {children}
      <Footer bottom={true} />
    </div>
  );
};

export default Layout;
