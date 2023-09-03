import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import PageNavWrapper from './style';

function PageNav({ previous, next }) {

  const preTitle = previous ? previous.frontmatter.title : '没有了';
  const preSlug = previous ? `../${previous.frontmatter.slug}` : '#';
  const nextTitle = next ? next.frontmatter.title : '没有了';
  const nextSlug = next ? `../${next.frontmatter.slug}` : '#';

  return (
    <PageNavWrapper>
      <Link className="prev control" to={preSlug}>
        上一页：{preTitle}
      </Link>
      <Link className="next control" to={nextSlug}>
        下一页：{nextTitle}
      </Link>
    </PageNavWrapper>
  );
}

export default PageNav;
