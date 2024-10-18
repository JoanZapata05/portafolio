// components/Project.tsx
import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

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

const ProjectContainer = styled.div`
  background-color: #222;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  animation: ${fadeIn} 0.5s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .project-image {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    margin-bottom: 15px;
  }


  .project-title {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin: 10px 0;
    text-align: center;
  }

  .project-description {
    color: #ddd; 
    text-align: center;
    margin-bottom: 15px;
  }

  .project-links {
    display: flex;
    justify-content: center;
    gap: 15px; 

    a {
      color: #ff0000; 
      text-decoration: none;
      padding: 8px 12px;
      border: 1px solid #ff0000;  
      border-radius: 5px; 
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #ff0000;
        color: #fff; 
      }
    }
  }
`;


interface ProjectProps {
    image: string;
    title: string;
    description: string;
    demoLink?: string;
    repoLink?: string;
}

const Project: React.FC<ProjectProps> = ({ image, title, description, demoLink, repoLink }) => {
    return (
        <ProjectContainer>
            <img src={image}
                alt={title}
                width={700} 
                height={300}
                className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-links">
                {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>}
                {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer">Repo</a>}
            </div>
        </ProjectContainer>
    );
};

export default Project;

