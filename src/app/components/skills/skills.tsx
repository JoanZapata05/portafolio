import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SkillProps {
  name: string;
  percentage: number;
  link: string;
}

interface SkillContainerProps {
  percentage: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillContainer = styled.div<SkillContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center; 
  margin: 20px 0;
  animation: ${fadeIn} 0.5s ease forwards; 
  opacity: 0; 
  font-size: 1.2rem; 

  &:hover {
    transform: scale(1.05); 
    transition: transform 0.3s ease;
  }

  .icon {
    width: 80px;  
    height: 80px; 
    margin-right: 20px; 
    transition: transform 0.3s ease; 

    &:hover {
      transform: rotate(15deg);
    }
  }

  .skill-info {
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center; 

    .skill-name {
      font-size: 24px; 
      font-weight: bold;
      color: #fff; 

      a {
        color: #fff; 
        text-decoration: none; 
        transition: color 0.3s ease; 

        &:hover {
          color: #ff0000; 
        }
      }
    }

    .skill-percentage {
      font-size: 20px; 
      color: #777;
      position: relative;

      &::after {
        content: '';
        display: block;
        width: ${(props) => props.percentage}%; /* Tipo definido correctamente */
        height: 8px; 
        background-color: #ff0000;
        border-radius: 5px;
        transition: width 0.10s ease;
        position: absolute;
        bottom: -8px; 
        left: 0;
      }
    }
  }
`;

const Skill: React.FC<SkillProps> = ({ name, percentage, link }) => {
  return (
    <div>
    <SkillContainer percentage={percentage}>
      <img src={link} alt={`${name} logo`} className="icon" />
      <div className="skill-info">
        <span className="skill-name">
          <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
        </span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
    </SkillContainer>
    </div>
  );
};

export default Skill;
