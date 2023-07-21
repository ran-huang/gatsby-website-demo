import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import { team } from "../static/data.json";
import * as styles from "../styles/professionals.module.css";
import LinkButton from "../components/Button/LinkButton";
import { insertBreaks } from "../utils/helper";
import { BiPhoneCall } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import DecorLine from "../components/Misc/DecorLine";

const MemberBanner = ({ memberData }) => {
  const { name, title, resume, phone, email, avatar } = memberData;

  const avatarImg = `/images/${avatar}`;

  return (
    <div className={styles.memberBanner}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerLeft}>
          <div className={styles.bannerName}>{name}</div>
          <div className={styles.bannerMemberTitle}>{title}</div>
          <div className={styles.bannerResume}>{insertBreaks(resume)}</div>
          <div className={styles.bannerPhone}>
            <BiPhoneCall style={{ marginRight: "5px" }} />
            {phone}
          </div>
          <div className={styles.bannerEmail}>
            <HiOutlineMail style={{ marginRight: "5px" }} />
            {email}
          </div>
        </div>

        <div className={styles.bannerRight}>
          <img className={styles.bannerAvatar} src={avatarImg} alt={name} />
        </div>
      </div>

    </div>
  );
};

const MemberDetails = ({ type, memberData }) => {
  const titleList = {
    area: "执业领域",
    career: "工作经历",
  };

  return (
    <div className={styles.memberDetailsWrapper}>
      <div className={styles.memberDetails}>
      <DecorLine width="70px" />
      <div className={styles.detailsTitle}>{titleList[type]}</div>
      <div className={styles.detailsContent}>{ insertBreaks(memberData[type]) }</div>
    </div>
    </div>

  );
};

const MemberArticles = ({ memberData, number}) => {
  number = number || 3;

  return (
    <div className={styles.memberArticlesWrapper}>
      <div className={styles.articleContainer}>

        <div className={styles.articleListTitle}>{memberData.name}{memberData.title}的最新文章</div>

        <div className={styles.articleList}>
          {
            memberData.featuredArticles.slice(0, number).map((article, index) => {
              return (
                <>
                  <div className={styles.articleItem}>
                    <div className={styles.articleItemTitle}>{article.title}</div>
                    <Link to={article.path} className={styles.articleItemLink}>
                      了解更多<BsArrowRight style={{transform:"translateY(2px)"}} />
                    </Link>
                  </div>


                  { index < number - 1 && <div className={styles.articleDivider}></div> }
                </>
              )
            })
          }

        </div>

        <LinkButton to="/contact" text="查看更多文章">联系律师</LinkButton>

      </div>
    </div>
  )
}

const TeamMember = ({ memberData }) => {
  return (
    <div className={styles.teamMemberContainer}>
      <MemberBanner memberData={memberData} />
      <MemberDetails type="area" memberData={memberData} />
      <MemberDetails type="career" memberData={memberData} />
      <MemberArticles memberData={memberData} />
    </div>
  );
};

const ProfessionalsPage = () => {
  return (
    <Layout>

        {
          team.map((memberData, index) => {
            return <TeamMember key={index} memberData={memberData} />
          })
        }

    </Layout>
  );
};

export default ProfessionalsPage;

export const Head = () => <Seo title="律师团队" />;
