import React from 'react';
import Slider from 'react-slick';
import {
  faqWrapper,
  faqContainer,
  title,
  slider,
  sliderItem,
  sliderTitle,
  sliderText,
} from './Faq.module.css';
import './Faq-slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { faqList } from '../../data/data.json';
import { insertBreaks } from '../../utils/helper';

const arrowStyle = {
  width: '50px',
  height: '50px',
  color: 'var(--primary-color)',
  opacity: '0.8',
};

function NextArrow(props) {
  const { className, style, onClick } = props;

  const styles = {
    ...style,
    ...arrowStyle,
    right: '-80px',
  };
  return (
    <BsArrowRightCircle
      className={className}
      style={{ ...styles }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const styles = {
    ...style,
    ...arrowStyle,
    left: '-80px',
  };
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
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots-custom slick-dots',
  };

  return (
    <Slider {...settings} className={slider}>
      {faqList.map((faq, index) => {
        return (
          <div className={sliderItem} key={index}>
            <div className={sliderTitle}>{faq.question}</div>
            <p className={sliderText}>{insertBreaks(faq.answer)}</p>
          </div>
        );
      })}
    </Slider>
  );
};

const FAQ = () => {
  return (
    <div className={faqWrapper}>
      <div className={faqContainer}>
        <h2 className={title}>常见问题</h2>
        <div>
          {/* <PrevArrow /> */}
          <SimpleSlider />
          {/* <NextArrow /> */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
