import React from 'react';
import { Link } from 'gatsby';
import { AiOutlineArrowRight } from 'react-icons/ai';

import CardWrapper from './style';

function PublicationCard(props) {
  const { cardData } = props;
  const { date, title, slug, author } = cardData.frontmatter;
  const authorText = author.join(' ');

  return (
    <CardWrapper>
      <Link to={slug}>
        <div className="card-left">
         <div className="date">{date}</div>
         <div className="author">{authorText}</div>
        </div>
        <div className="card-right">
          <div className="title">{title}</div>
          <div className="more">
            <div className="text">阅读更多</div>
            <div className="arrow"><AiOutlineArrowRight /></div>
          </div>
        </div>
      </Link>
    </CardWrapper>
  );
}

export default PublicationCard;
