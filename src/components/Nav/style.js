import { styled } from "styled-components";
import { colorStyles } from "../../styles/common";

const PageNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 80px;
  font-size: 12px;

  .control {
    width: 40%;

    &:hover {
      text-decoration: underline;
      color: ${colorStyles.primaryColor};
    }
  }

  .prev {
    text-align: left;
  }

  .next {
    text-align: right;
  }
`;

export default PageNavWrapper;