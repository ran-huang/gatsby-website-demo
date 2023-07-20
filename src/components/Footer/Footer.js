import React from "react";
import {
  footerWrapper,
  footerContent,
  footerContentLeft,
  footerContentMiddle,
  footerLogoImg,
  footerBottom,
  register,
  copyright,
} from "./Footer.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const FooterBottom = () => {
  return (
    <div className={footerBottom}>
      <div>
        <Link to="/">隐私政策</Link>|<Link to="/">使用条款和法律声明</Link>
      </div>
      <p className={register}>
        京ICP备05084598号 | 京公网安备: 11010502038372号
      </p>
    </div>
  );
};

const Footer = ({ bottom }) => {
  return (
    <footer>
      <div className={footerWrapper}>
        <div className={footerContent}>
          <div className={footerContentLeft}>
            <a href="/">公众号</a>
            |
            <a href="/">小红书</a>
            |
            <Link to="/professionals">关于我们</Link>
            |
            <div className={copyright}>
              id velit deserunt © {new Date().getFullYear()}
            </div>
          </div>

          <StaticImage
            src="../../images/genius-law-comment-dark.jpg"
            alt="logo"
            className={footerContentMiddle}
            imgClassName={footerLogoImg}
          />
        </div>
      </div>

      {bottom && <FooterBottom />}
    </footer>
  );
};

export default Footer;
