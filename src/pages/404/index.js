import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '@components/layout/layout';
import Main from '@components/Main/Main';
import NotFoundWrapper from './style';
import LinkButton from "@components/Button/LinkButton";

const NotFoundPage = () => {
  return (
    <Layout>
      <Main>
        <NotFoundWrapper>
          <div className='not-found-text'>抱歉，您要查看的页面找不到了！</div>
            <LinkButton to="/">返回首页</LinkButton>

          <StaticImage src="../../images/404_not_found.jpg" alt="404" className='not-found-img'/>

          <div className='img-attribute'>Image by <a href="https://www.freepik.com/free-vector/flat-design-no-data-illustration_47718911.htm#page=2&query=not%20found&position=4&from_view=search&track=ais">Freepik</a></div>


          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
        </NotFoundWrapper>
      </Main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>页面不存在</title>;
