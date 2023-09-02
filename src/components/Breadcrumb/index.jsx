import React from 'react';
import { Link } from 'gatsby';
import BreadcrumbWrapper from './style';

function Breadcrumb({ link, linkText }) {
  return (
    <BreadcrumbWrapper>
      <Link to="/">首页</Link>
      <span className='arrow'>&gt;</span>
      <Link to={link}>{linkText}</Link>
      <span className='arrow'>&gt;</span>
      <Link to="#">当前页面</Link>
    </BreadcrumbWrapper>
  );
}

export default Breadcrumb;
