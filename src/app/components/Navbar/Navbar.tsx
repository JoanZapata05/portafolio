import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';


interface NavLinksProps {
  isOpen: boolean;
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1b1b1b; 
`;

const Logo = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  gap: 20px;

  a {
    color: #fff; 
    text-decoration: none;
    font-size: 18px;

    &:hover {
      color: #ff0000;
    }
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: #000;
    padding: 10px;
    border-radius: 8px;
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #ff0000; 
  color: #fff;
  border-radius: 50px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    background-color: #ff4d4d; 
  }

  span {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    display: none; 
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: #fff; 
    margin: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>JOAN&#39;S</Logo>
      <NavLinks isOpen={isOpen}>
        <Link href="/home">INICIO</Link>
        <Link href="/Portafolio">ACERCA DE MI</Link>
        <Link href="/Skill">SKILLS</Link>
        <Link href="/Skill">PROJECTS</Link>
        <ContactButton href="#contact">CONTACT <span>→</span></ContactButton>
      </NavLinks>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
    </NavbarContainer>
  );
};

export default Navbar;
