import React from 'react';
import { Link } from 'gatsby';
import { cases, caseTitle, caseContainer, caseItem, caseItemDecor, caseItemTitle, caseItemContent } from './Cases.module.css';
import { caseList } from "../../static/homepage.json";

const CaseItem = ({ caseInfo }) => {
  return (
    <div className={caseItem}>
      <Link to={caseInfo.link} >
        <div className={caseItemDecor}></div>
        <div className={caseItemTitle}>{caseInfo.title}</div>
        <div className={caseItemContent}>
        {caseInfo.content}
        </div>
      </Link>
    </div>
  )
}

const Cases = () => {
  return (
    <div className={cases}>
      <h2 className={caseTitle}>过往案例</h2>
      <div className={caseContainer}>
        {caseList.map((caseInfo, index) => <CaseItem caseInfo={caseInfo} key={index} />)}
      </div>
    </div>
  )
}

export default Cases;