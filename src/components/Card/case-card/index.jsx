import React from 'react';
import { Link } from 'gatsby';
import { FaFileAlt } from 'react-icons/fa';

import CardWrapper from './style';

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
