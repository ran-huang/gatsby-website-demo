import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

import CardWrapper from './style';
import { Link } from 'gatsby';

function CaseCard(props) {
  const { cardData } = props;
  const { title, result, slug } = cardData.frontmatter;

  return (
    <CardWrapper>
      <Link to={slug}>
        <div className="card-left">
          <FaFileAlt />
        </div>
        <div className="card-right">
          <div className="title">{title}</div>
          <div className="result">{result}</div>
        </div>
      </Link>
    </CardWrapper>
  );
}

export default CaseCard;
