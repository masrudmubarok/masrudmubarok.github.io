import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Contoh ikon

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Mengatur elemen menjadi kolom (vertikal) */
  align-items: center; /* Membuat ikon berada di tengah secara horizontal */

  /* Sembunyikan di tampilan mobile (lebar layar maksimum 768px) */
  @media (max-width: 768px) {
    display: none;
  }

  /* Tampilkan di tampilan desktop dan tablet (lebar layar minimum 769px) */
  @media (min-width: 769px) {
    /* Anda bisa menambahkan styling tambahan untuk tampilan desktop di sini jika perlu */
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