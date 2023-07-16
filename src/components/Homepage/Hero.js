import React from "react";
import {hero, heroLeft, heroLeftContent, heading, description, btnContact, heroRight } from "./hero.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className={hero}>
      <div className={heroLeft}>
        <div className={heroLeftContent}>
          <h1 className={heading}>后浪辩护人</h1>
          <p className={description}>我们是清华、港大等顶尖高校毕业，专注于刑事业务和企业合规的专业律师团队，理论功底深厚，实务经验丰富 怀极度真诚关心您的需求，用极致专业解决您的问题</p>
        </div>
        <button className={btnContact}>联系我们</button>

      </div>
      <div className={heroRight}>
        <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="hero" />
      </div>

    </div>
  )
}

export default Hero;