// components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1b1b1b; // Color de fondo oscuro
  color: #fff; // Texto blanco
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  border-top: 1px solid #444; // Borde superior
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Joan. Todos los derechos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
