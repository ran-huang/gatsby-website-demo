import { styled } from "styled-components";
import { colorStyles} from '@styles/common';


const NotFoundWrapper = styled.div`
  margin-top: 50px;
  text-align: center;

  .not-found-text {
    margin: 50px 0;
    font-size: 30px;
  }

  .not-found-img {
    margin-top: 20px;
    width: 80%;
    max-width: calc(100vh - 350px);
  }

  .img-attribute {
    color: #eee;
  }
`;

export default NotFoundWrapper;