import React from 'react';
import ArticleWrapper from './style';
import Breadcrumb from '@components/Breadcrumb';

function Article({ children }) {
  return (
    <ArticleWrapper>
      <Breadcrumb link="/cases" linkText="成功案例" />
        {children}
    </ArticleWrapper>
  );
}

export default Article;
