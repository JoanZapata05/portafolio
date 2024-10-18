// src/app/components/Portfolio.tsx
import React from 'react';
import Project from './projects';
import { projectsData } from './projectsData';
import styled from'styled-components';

const H1 = styled.h1`
  text-align: center;
  margin-bottom:100px ;
  margin-top:100px ;
  `;


const Portfolio: React.FC = () => {
  return (
    <div>
      <H1>Mis Proyectos</H1>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          demoLink={project.demoLink}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
};

export default Portfolio;
