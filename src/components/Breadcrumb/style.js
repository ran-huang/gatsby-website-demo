import { styled } from "styled-components";

const BreadcrumbWrapper = styled.div`
  font-size: 12px;

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