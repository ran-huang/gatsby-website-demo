import { styled } from "styled-components";
import { textStyles, colorStyles } from "@styles/common";

const ArticleWrapper = styled.div`
  width: 90%;
  margin: 20px auto;

  font-size: ${textStyles.textSize};
  line-height: ${textStyles.lineHeight};

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
`;

export default ArticleWrapper;