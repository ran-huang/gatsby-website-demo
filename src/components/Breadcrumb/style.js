import { styled } from "styled-components";

const BreadcrumbWrapper = styled.div`
  margin: 20px -30px;
  font-size: 12px;

  text-align: left;

  .arrow {
    margin: 0 5px;
  }

  a {
    color: unset;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default BreadcrumbWrapper;