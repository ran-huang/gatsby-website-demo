import { styled } from "styled-components";
import { colorStyles } from "../../styles/common";

const PageNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px -30px 80px;
  font-size: 12px;

  .control {
    width: 45%;
    text-decoration: none;

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

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    .control {
      width: 100%;
    }
    .prev, .next {
      text-align: left;
    }
  }
`;

export default PageNavWrapper;