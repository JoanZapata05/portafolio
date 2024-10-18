// components/SkillsList.js
import React from 'react';
import Skill from './skills';
import styled from 'styled-components';

const skillsData = [
    { name: 'JavaScript', percentage: 60, link: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'React', percentage: 50, link: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
    { name: 'CSS', percentage: 80, link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png' },
    { name: 'HTML', percentage: 90, link: 'https://cdn-icons-png.flaticon.com/512/174/174854.png' },
];

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 50px
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom:100px ;
  `;

const SkillsList = () => {
    return (
        <div>
        <H1>Skills</H1>
        <SkillContainer>
        
        {skillsData.map((skill, index) => (
            <Skill
            link={skill.link}
            key={index}
            name={skill.name}
            percentage={skill.percentage}
            />
            ))}
            
            </SkillContainer>
            </div>
    );
};

export default SkillsList;