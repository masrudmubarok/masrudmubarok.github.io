import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) {
    
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialLinks = () => {
  return (
    <Container role="navigation" aria-label="Social Links">
      <Link href="https://linkedin.com/in/masrudmubarok" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </Link>
      <Link href="https://github.com/masrudmubarok" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </Link>
      <Link href="https://youtube.com/@masrudmubarok" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </Link>
    </Container>
  );
};

export default SocialLinks;