import React from 'react';
import LinkButton from '../Button/LinkButton';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import { teamContainer, teamTitle, peopleList, peopleCard,peopleImg, peopleName, peopleTitle, peopleDesc} from "./Team.module.css";
import { insertBreaks } from '../../utils/helper';
import { graphql, useStaticQuery } from 'gatsby';


const dataQuery = graphql`
  query {
    allTeamJson(sort: {pos: ASC}) {
      nodes {
        avatar
        name
        desc
        title
      }
    }
    allFile(filter: {relativePath: {glob: "portrait-*.png"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            height: 270
          )
        }
      }
    }
  }
`

const TeamMember = ({node, imgNodes}) => {

  const imgNode = imgNodes.filter(imgNode => imgNode.relativePath === node.avatar)[0];
  const img = getImage(imgNode.childImageSharp.gatsbyImageData);

  return (
    <div className={peopleCard}>
      <GatsbyImage image={img} alt="test" className={peopleImg} />
      <div className={peopleName}>{node.name}</div>
      <div className={peopleTitle}>{node.title}</div>
      <div className={peopleDesc}>
        {insertBreaks(node.desc)}
      </div>
    </div>
  )
}

const Team = () => {

  const data = useStaticQuery(
    dataQuery
  )

  return (
    <div className={teamContainer}>
      <h2 className={teamTitle}>关于我们</h2>

      <div className={peopleList}>

        {
          data.allTeamJson.nodes.map(node => (
            <TeamMember node={node} key={node.name} imgNodes={data.allFile.nodes} />
          ))
        }

      </div>
      <LinkButton to="/professionals">了解更多</LinkButton>
    </div>
  )
}

export default Team;