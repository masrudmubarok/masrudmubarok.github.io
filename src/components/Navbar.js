import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle'; // Pastikan pathnya benar

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  top: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

const NavLinks = styled(motion.ul)`
  list-style: none;
  display: none;
  position: absolute;
  top: 55px;
  right: 2rem;
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-top: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  overflow: hidden;

  &.open {
    display: flex;
    flex-direction: column;
    opacity: 1;
    pointer-events: auto;
  }

  @media (min-width: 769px) {
    flex-direction: column;
    align-items: flex-end;
    right: 2rem;
    top: 55px;
    padding: 1rem 1.5rem;
    margin-top: 0.5rem;
  }
`;

const NavLink = styled(motion(Link))`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  padding: 0.75rem 1rem;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.body === '#FFF' ? '#f8f8f8' : '#333'};
  }

  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.2, delay: index * 0.05 }}
`;

const Hamburger = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.75rem;
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 2rem; /* Atur posisi hamburger ke kanan */
  z-index: 11;
  width: 28px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HamburgerLine = styled(motion.span)`
  display: block;
  width: 28px;
  height: 3px;
  background-color: ${({ theme }) => theme.text};
  border-radius: 2px;
  transition: transform 0.05s cubic-bezier(0.55, 0.085, 0.68, 0.53),
              opacity 0.05s cubic-bezier(0.55, 0.085, 0.68, 0.53);
`;

const ThemeToggleButtonWrapper = styled.div`
  position: absolute;
  top: 1rem; /* Tambahkan top: 1rem; */
  right: 5rem; /* Posisikan di kiri hamburger dengan space */
  z-index: 11; /* Pastikan di atas dropdown */
  display: flex;
  align-items: center; /* Sejajarkan vertikal dengan hamburger */
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    open: {
      display: "flex",
      opacity: 1,
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.2,
        staggerChildren: 0.03,
        delayChildren: 0.07,
      },
    },
    closed: {
      opacity: 0,
      scaleY: 0,
      transition: {
        duration: 0.15,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hamburgerVariants = {
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const line1Variants = {
    open: {
      rotate: 45,
      translateY: 8,
    },
    closed: {
      rotate: 0,
      translateY: 0,
    },
  };

  const line2Variants = {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };

  const line3Variants = {
    open: {
      rotate: -45,
      translateY: -8,
    },
    closed: {
      rotate: 0,
      translateY: 0,
    },
  };

  return (
    <Nav>
      <Logo to="/">masrud.</Logo>
      <ThemeToggleButtonWrapper>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </ThemeToggleButtonWrapper>
      <Hamburger onClick={toggleMenu} animate={isOpen ? "open" : "closed"} variants={hamburgerVariants}>
        <HamburgerLine variants={line1Variants} />
        <HamburgerLine variants={line2Variants} />
        <HamburgerLine variants={line3Variants} />
      </Hamburger>
      <NavLinks
        variants={dropdownVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={isOpen ? 'open' : ''}
      >
        <NavLink to="/" onClick={() => setIsOpen(false)} index={0}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} index={1}>About</NavLink>
        <NavLink to="/portfolio" onClick={() => setIsOpen(false)} index={2}>Portfolio</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)} index={3}>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;