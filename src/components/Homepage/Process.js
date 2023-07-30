import React from 'react';
import LinkButton from '../Button/LinkButton';
import { StaticImage } from 'gatsby-plugin-image';
import {
  processWrapper,
  processContainer,
  processTitle,
  processText,
  stepper,
  stepperImg,
  stepText,
  stepperImgVertical,
  step,
} from './Process.module.css';

const Process = () => {
  return (
    <div className={processWrapper}>
      <div className={processContainer}>
        <h2 className={processTitle}>寻求高质量、个性化法律服务吗？</h2>
        <p className={processText}>
          我们经验丰富的律师团队将根据您的需求为您量身打造最适合您的解决方案
        </p>

        <LinkButton to="/contact">联系我们</LinkButton>

        <div className={stepper}>
          <StaticImage
            src="../../images/homepage-stepper.jpg"
            alt="流程"
            className={stepperImg}
          />
          <StaticImage
            src="../../images/homepage-stepper-vertical.png"
            alt="流程"
            className={stepperImgVertical}
          />
          <div className={stepText}>
            <div className={step}>
              通过电话、面谈等方式了解基本情况和您的需求
            </div>
            <div className={step}>确定服务方案，签署委托合同、委托书等文件</div>
            <div className={step}>
              根据工作需要，开展会见、申请取保、合规整改、无罪辩护等工作
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
