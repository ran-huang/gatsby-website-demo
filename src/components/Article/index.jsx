import React from 'react';
import ArticleWrapper from './style';
import Breadcrumb from '@components/Breadcrumb';
import PageNav from '@components/Nav/pageNav';

function Article({ children, type, previous, next }) {
  const getLink = (type) => {
    switch (type) {
      case 'case':
        return '/cases';
      case 'publication':
        return '/publications';
      default:
        return '/';
    }
  };
  const getLinkText = (type) => {
    switch (type) {
      case 'case':
        return '成功案例';
      case 'publication':
        return '专业视点';
      default:
        return '首页';
    }
  }

  const breadcrumbLink = getLink(type);
  const breadcrumbLinkText = getLinkText(type);

  return (
    <ArticleWrapper>
      <Breadcrumb link={breadcrumbLink} linkText={breadcrumbLinkText} />
        {children}
      <PageNav previous={previous} next={next} />
    </ArticleWrapper>
  );
}

export default Article;
