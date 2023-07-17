import React from "react";
import {
  footer,
  footerWrapper,
  footerContent,
  footerContentLeft,
  footerContentMiddle,
  footerLogoImg,
  footerContentRight,
  copyright,
  footerBottom,
  register,
  rightLineOne,
} from "./Footer.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const FooterBottom = () => {
  return (
    <div className={footerBottom}>
      <p className={register}>
        京ICP备05084598号 | 京公网安备: 11010502038372号
      </p>
    </div>
  );
};

const Footer = ({ bottom }) => {
  return (
    <footer class={footer}>
      <div className={footerWrapper}>
        <div className={footerContent}>
          <div className={footerContentLeft}>
            <a href="/">小红书</a>|<Link to="/professionals">关于我们</Link>
          </div>

          <StaticImage
            src="../../images/houlang-logo.jpg"
            alt="logo"
            className={footerContentMiddle}
            imgClassName={footerLogoImg}
          />

          <div className={footerContentRight}>
            <div className={rightLineOne}>
              <Link to="/">隐私政策</Link>|
              <Link to="/">使用条款和法律声明</Link>
            </div>

            <p className={copyright}>
              id velit deserunt © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      {bottom && <FooterBottom />}
    </footer>
  );
};

export default Footer;
