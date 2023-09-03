import { styled } from 'styled-components';
import { cardShadow } from '@styles/mixin';
import { colorStyles } from '@styles/common';

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;

    text-align: left;
    ${cardShadow};

    .card-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 80px;
      font-size: 12px;
      line-height: 1.5;

      .date {
        margin-bottom: 8px;
      }
    }

    .card-right {
      flex: 1;
      margin: 10px;
      padding-left: 15px;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;

      border-left: 2px solid ${colorStyles.primaryColor};

      .title {
        margin: 10px 0;
        font-size: 16px;
        line-height: 1.5;
        font-weight: bold;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .more {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 12px;
        line-height: 12px;

        .arrow {
          margin-left: 5px;
          margin-top: 1px;
          transition: all 0.3s ease-in-out;
          opacity: 0;
        }
      }
    }

  }

  &:hover .card-right .more .arrow {
    opacity: 1;
  }
`;

export default CardWrapper;
