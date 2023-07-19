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

const faqList = [
  {
    question: "刑事辩护律师的职责是什么?",
    answer: "刑事辩护律师最重要的职责是向受刑事指控的客户提供法律建议和支持。他们会协助客户更清晰地了解自身的合法权利；同时针针对他们的具体情况提供建议，协助客户寻求最佳的解决方案或结果。\n当客户被羁押(拘留、逮捕、指定居所监视居住等)时，只有律师可以进行会见，提供法律帮助。"
  },
  {
    question: "为什么要寻找专业的刑事律师?",
    answer: "随着市场经济的发展，各类纠纷愈发复杂，法律市场也逐步细分为民事、商事、刑事、非诉讼等领域。“术业有专攻”，专业的刑事律师拥有在刑事领域的深厚理论功底和丰富执业经验，并更为了解各地不同的刑事政策，能够迅速了解案件情况、精准预判案件走向，并及时介入案件，与公安、检察官、法官等办案人员展开专业、有效的沟通，为刑事案件的当事人争取最大利益。"
  },
  {
    question: "为什么企业要重视合规?",
    answer: "近年来，随着我国对企业合规监管的不断强化，合规管理对企业防范经营风险、实现高质量发展具有重大意义。同时，在企业出海发展的过程中，国内外关于劳动用工、反垄断、出口管制等方面的监管愈发严格，对于企业提出了更高的挑战。另外，自2020年起最高人民检察院推行的(合规不起诉”激励机制，对于已经发生风险的企业而言，可以通过合规的手段最大限度降低负面影响。"
  },
  {
    question: "什么样的企业应当做合规?",
    answer: "如果您的企业希望识别经营和管理过程中的风险、预防经营漏洞、实现高质量发展，可以聘请专业的合规律师协助您搭建合规管理体系、进行合规风险评估。\n如果您的企业正在经历来自政府部门、海外监管部门等主体的调查，应当尽快聘请专业的合规律师协助您应对监管调查，重申合规主张，并及时提出法律建议。\n如果您的企业或者员工涉嫌犯罪，专业的合规律师可以协助企业申请适用涉案企业合规，通过对企业进行合规整改，为企业或者员工乃至企业家争取不起诉的从宽处理。"
  },
  {
    question: "企业或者企业家犯罪，有机会合规不起诉吗?",
    answer: "有。\n根据最高人民检察院的政策，企业或者企业家、技术人员、管理人员等，实施与企业经营管理密切相关的犯罪行为的，经审查可以适用涉案企业合规。整改合格的，依法作出不起诉、无罪、缓刑等决定。相关工作，可以通过专业人士的协助，提高成功率。"
  },
  {
    question: "如果我是无辜的或准备认罪，我为什么仍然要咨询刑事辩护律师?",
    answer: "在这两种情况下，刑事辩护律师都能助您更全面地了解您的合法权利，为您争取最有利的局面。无论您是无罪或有罪，都应当咨询刑事辩护律师，根据法律规定和证据规则，准确判断是否构成犯罪、应当如何量刑(无期徒刑、有期徒刑或者缓刑等)。同时，如果准备认罪，刑事律师可以协助您与检察官进行量刑协商，争取最大量刑优惠。"
  }
]

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
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots-custom slick-dots",
  };

  return (
    <Slider {...settings} className={slider}>

      {
        faqList.map((faq, index) => {
          return (
            <div className={sliderItem} key={index}>
              <div className={sliderTitle}>{faq.question}</div>
              <p className={sliderText} dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, "<br><br>") }}></p>
            </div>
          )
        })
      }
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
