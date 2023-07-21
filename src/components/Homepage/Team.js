import React from 'react';
import LinkButton from '../Button/LinkButton';
import { StaticImage } from 'gatsby-plugin-image';
import { teamContainer, teamTitle, peopleList, peopleCard,peopleImg, peopleName, peopleTitle, peopleDesc} from "./Team.module.css";
import { insertBreaks } from '../../utils/helper';
import { team } from "../../static/data.json";

const [zy, zcq] = team;

const Team = () => {
  return (
    <div className={teamContainer}>
      <h2 className={teamTitle}>关于我们</h2>

      <div className={peopleList}>

        <div className={peopleCard}>
          <StaticImage src="../../images/portrait-zcq.png" alt={zcq.name} className={peopleImg} />
          <div className={peopleName}>{zcq.name}</div>
          <div className={peopleTitle}>{zcq.title}</div>
          <div className={peopleDesc}>
            { insertBreaks(zcq.desc) }
          </div>
        </div>

        <div className={peopleCard}>
          <StaticImage src="../../images/portrait-zy.png" alt={zy.name} className={peopleImg} />
          <div className={peopleName}>{zy.name}</div>
          <div className={peopleTitle}>{zy.title}</div>
          <div className={peopleDesc}>
            { insertBreaks(zy.desc) }
          </div>
        </div>
      </div>
      <LinkButton to="/professionals">了解更多</LinkButton>
    </div>
  )
}

export default Team;