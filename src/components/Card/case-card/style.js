import { styled } from 'styled-components';
import { cardShadow } from '@styles/mixin';

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    text-align: left;
    ${cardShadow};

    .card-left {
      flex: 1;
      font-size: 2rem;
    }

    .card-right {
    flex: 4;

    .title {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: bold;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .result {
      font-size: 14px;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }



  }
`;

export default CardWrapper;
