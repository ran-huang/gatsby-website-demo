import React from 'react';
import { Link } from 'gatsby';
import { cases, caseTitle, caseContainer, caseItem, caseItemDecor, caseItemTitle, caseItemContent } from './Cases.module.css';

const caseInfoList = [
  {
    title: '广东某公司高管涉嫌内幕交易合规整改案',
    content: '最高检典型案例',
    link: '/'
  },
  {
    title: "青海殷某某等35人涉嫌组织、领导、参加黑社会性质组织案",
    content: "一、二审相继减轻量刑",
    link: '/'
  },
  {
    title: "北京某小微企业涉税犯罪合规整改案",
    content: "全案不起诉",
    link: '/'
  },
  {
    title: "山东某上市环保企业涉嫌污染环境案事前分析及辩护",
    content: "不起诉",
    link: '/'
  },
  {
    title: "云南刘某某等10人涉嫌组织、领导、参加黑社会性质组织案",
    content: "全案“摘黑”",
    link: '/'
  },
  {
    title: "黑龙江曹某某等8人涉嫌恶势力犯罪案",
    content: "保留全部财产",
    link: '/'
  }
]

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
        {caseInfoList.map((caseInfo, index) => <CaseItem caseInfo={caseInfo} key={index} />)}
      </div>
    </div>
  )
}

export default Cases;