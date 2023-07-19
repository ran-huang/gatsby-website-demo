import React from "react";
import Slider from "react-slick";
import {
  faqWrapper,
  faqContainer,
  title,
  slider,
  sliderItem,
  sliderTitle,
  sliderText,
  sliderContainer,
} from "./Faq.module.css";
import "./Faq-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const arrowStyle = {
  width: "25px",
  height: "25px",
  color: "#333",
}

function NextArrow(props) {
  const { className, style, onClick } = props;

  const styles = {
    ...style,
    ...arrowStyle,
    right: "-50px",
  }
  return (
      <BsArrowRightCircle className={className} style={{...styles}} onClick={onClick}/>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const styles = {
    ...style,
    ...arrowStyle,
    left: "-50px",
  }
  return (
    <BsArrowLeftCircle
      className={className}
      style={{ ...styles }}
      onClick={onClick}
    />
  );
}

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots-custom slick-dots",
  };

  return (
    <Slider {...settings} className={slider}>
      <div className={sliderItem}>
        <div className={sliderTitle}>·nisi voluptate culpa in ea</div>
        <p className={sliderText}>
          Incididunt mollit consequat cillum commodo elit et tempor sunt aliquip
          pariatur quis nulla nostrud enim. Qui occaecat aliquip deserunt. Enim
          in anim exercitation. Excepteur sunt culpa do quis laboris duis
          incididunt ut et eu ullamco veniam.
        </p>
      </div>
      <div className={sliderItem}>
        <div className={sliderTitle}>
          ·ullamco consequat mollit tempor commodo aliquip
        </div>
        <p className={sliderText}>
          Mollit elit magna adipisicing fugiat. Deserunt ipsum laboris dolore
          voluptate eiusmod id velit adipisicing duis. Amet pariatur amet ex
          labore irure irure. Cupidatat consequat incididunt nulla voluptate
        </p>
      </div>
      <div className={sliderItem}>
        <div className={sliderTitle}>·labore eiusmod ex culpa</div>
        <p className={sliderText}>
          Proident velit cupidatat ullamco duis exercitation commodo anim sint.
          Ut commodo ea laborum qui laboris aute tempor laborum id ut do.
          Laboris fugiat ad Lorem nulla sit voluptate ipsum esse excepteur
          laboris dolore labore elit ad.
        </p>
      </div>
      <div className={sliderItem}>
        <div className={sliderTitle}>·aliqua cupidatat aliqua cillum minim</div>
        <p className={sliderText}>
          Consectetur occaecat pariatur excepteur reprehenderit ut excepteur
          nisi. Id sit do cillum ex qui. Qui et id amet dolore adipisicing anim
          in cupidatat fugiat tempor eiusmod.
        </p>
      </div>
    </Slider>
  );
};

const FAQ = () => {
  return (
    <div className={faqWrapper}>
      <div className={faqContainer}>
        <h2 className={title}>常见问题</h2>
        <div className={sliderContainer}>
          {/* <PrevArrow /> */}
          <SimpleSlider />
          {/* <NextArrow /> */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
