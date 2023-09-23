import { styled } from "styled-components";
import { textStyles, colorStyles } from "@styles/common";

const ArticleWrapper = styled.div`
  width: 90%;
  margin: 20px auto;

  font-size: ${textStyles.textSize};
  line-height: ${textStyles.lineHeight};

  text-align: center;

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1rem;
  }

  a {
    text-decoration: underline;
    color: ${colorStyles.primaryColor};
  }

  p, ol, ul, li, h1, h2, h3, h4, h5, h6 {
    text-align:left;
  }

  li {
    margin: 10px 0;
  }

  blockquote {
    padding: 10px 20px;
    background-color: #eee;
  }

  img {
    width: 80%;
    max-width: 800px;
    margin: 20px auto;
  }
`;

export default ArticleWrapper;