import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body === '#FFF' ? '#f9f9f9' : '#333'};
  border-top: 1px solid ${({ theme }) => theme.secondary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Nama Anda. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;