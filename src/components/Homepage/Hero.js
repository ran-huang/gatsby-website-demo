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
import { heroText } from "../../data/data.json";
import { insertBreaks } from "../../utils/helper";

const Hero = () => {
  return (
    <div className={hero}>
      <div className={heroLeft}>
        <div className={heroLeftContent}>
          <h1 className={heading}>{heroText.title}</h1>
          <p className={description}>
            { insertBreaks(heroText.description) }
          </p>
        </div>
        <LinkButton to='/contact'>联系我们</LinkButton>
      </div>

      <StaticImage
        src="../../images/genius-law-comment.png"
        alt="hero"
        className={heroRight}
        imgClassName={heroRightImg}
      />
    </div>
  );
};

export default Hero;
