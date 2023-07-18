import React from "react";
import {
  hero,
  heroLeft,
  heroLeftContent,
  heading,
  description,
  heroRight,
  heroRightImg,
} from "./Hero.module.css";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../Button/LinkButton";

const Hero = () => {
  return (
    <div className={hero}>
      <div className={heroLeft}>
        <div className={heroLeftContent}>
          <h1 className={heading}>后浪辩护人</h1>
          <p className={description}>
            我们是清华、港大等顶尖高校毕业，专注于刑事业务和企业合规的专业律师团队，理论功底深厚，实务经验丰富
            怀极度真诚关心您的需求，用极致专业解决您的问题
          </p>
        </div>
        <LinkButton to='/contact'>联系我们</LinkButton>
      </div>

      <StaticImage
        src="../../images/genius-law-comment.jpg"
        alt="hero"
        className={heroRight}
        imgClassName={heroRightImg}
      />
    </div>
  );
};

export default Hero;
