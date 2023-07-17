import React from "react";
import { Link } from "gatsby";
import { wrapper, title, services, serviceItem, btnLearnMore } from "./ServicesIntro.module.css"

const ServicesIntro = () => {
  return (
    <div className={wrapper}>
      <h2 className={title}>服务简介</h2>
      <div className={services}>
        <div className={serviceItem}>刑事业务</div>
        <div className={serviceItem}>公司商事</div>
        <div className={serviceItem}>企业合规</div>
        <div className={serviceItem}>并购&重组</div>
        <div className={serviceItem}>企业法律风险防控</div>
        <div className={serviceItem}>监督应对</div>
      </div>
      <Link className={btnLearnMore} to="/practices">了解更多</Link>
    </div>
  )
}

export default ServicesIntro;