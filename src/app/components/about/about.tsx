"use client";
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 0 20px;
  background-color: #1b1b1b; 
  color: #fff; 
  padding-left: 15%;

  h1 {
    font-size: 48px;
    margin: 0;
  }

  h2 {
    font-size: 32px;
    color: #ff0000;
  }

  p {
    font-size: 18px;
    margin-top: 20px;
    color: #ccc;
    width: 60%;
  }

  .icon-container {
    margin-top: 20px;
    display: flex;
    gap: 20px;

    a {
      color: #fff;
      font-size: 32px;
      transition: color 0.3s;

      &:hover {
        color: #ff0000;
      }
    }
  }
`;

const HeroSection = () => {
    const [text, setText] = useState('');
    const roles = ['Front End Developer', 'Web Designer', 'Creative Coder'];
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
  
    useEffect(() => {
      const type = () => {
        if (charIndex < roles[index].length && !isDeleting) {
          setText((prev) => prev + roles[index][charIndex]);
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === roles[index].length) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      };
      
      const typingSpeed = isDeleting ? 100 : 200;
      const timeout = setTimeout(type, typingSpeed);
  
      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);
  
    return (
      <HeroContainer>
        <h1>Hola, soy Joan</h1>
        <h2 className="typing-container">{text}</h2>
        <p>
            Soy Joan, un desarrollador Front End apasionado por construir experiencias digitales que no solo sean visualmente atractivas,
            sino también eficientes y accesibles.
            Me especializo en crear interfaces de usuario modernas utilizando tecnologías como React, Next.js y Styled Components.
            Disfruto resolver problemas complejos mediante código limpio y bien estructurado.
        </p>

        <div className="icon-container">
            <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
        </div>
      </HeroContainer>
    );
};

export default HeroSection;
