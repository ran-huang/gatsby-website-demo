import React from "react";
import LinkButton from "../Button/LinkButton";
import { wrapper, title, services, serviceItem } from "./ServicesIntro.module.css"
import { serviceList } from "../../static/data.json";

const ServicesIntro = () => {
  return (
    <div className={wrapper}>
      <h2 className={title}>服务简介</h2>
      <div className={services}>
        {
          serviceList.map((service, index) => {
            return (
              <div className={serviceItem} key={index}>{service}</div>
            )
          })
        }
      </div>
      <LinkButton to="/practices">了解更多</LinkButton>
    </div>
  )
}

export default ServicesIntro;