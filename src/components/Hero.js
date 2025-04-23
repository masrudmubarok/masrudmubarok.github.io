import React, { useEffect, useRef, useState, useContext } from 'react';
 import styled, { keyframes, ThemeContext } from 'styled-components';
 import { motion } from 'framer-motion';
 import { Link } from 'react-router-dom';
 import SocialLinks from './SocialLinks';
 import Typed from 'typed.js';
 import { darken, lighten } from '../styles/utils';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

 // Keyframes for radar effect
 const radarAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  40% { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
 `;

 // Keyframes for subtle shadow animation on hover
 const shadowHover = keyframes`
  0% { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); transform: translateY(0); }
  50% { box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25); transform: translateY(-2px); }
  100% { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); transform: translateY(0); }
 `;

 // Styled Components
 const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 2rem 2rem 2rem;
  text-align: center;
 `;

 const ImageAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
 `;

 const CartoonImage = styled(motion.img)`
  width: 100px;
  height: 100px;
  margin-top: 2rem;
  margin-bottom: 0;
  object-fit: cover;
 `;

 const OpenToWorkButton = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.secondary};
  margin-top: -0.5rem;
  position: relative;

  @media (max-width: 768px) {
   font-size: 0.8rem; /* Slightly smaller font on mobile */
   padding: 0.4rem 0.8rem;
  }
 `;

 const BlinkingDot = styled.span`
  width: 0.50rem;
  height: 0.50rem;
  background-color: #4CAF50; /* Warna hijau */
  border-radius: 50%;
  margin-right: 0.5rem;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.7); /* Initial shadow */
  position: relative;
  z-index: 1;
 `;

 const RadarEffect = styled.span`
  position: absolute;
  top: 1;
  margin-left: -0.1rem;
  width: 0.50rem; /* Match the BlinkingDot's width */
  height: 0.50rem; /* Match the BlinkingDot's height */
  border-radius: 50%;
  border: 2px solid rgba(76, 175, 80, 0.5); /* Green radar color */
  animation: ${radarAnimation} 1.5s infinite ease-out;
 `;

 const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 0.01rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
   font-size: 2.5rem; /* Smaller title font on mobile */
   margin-top: 0.5rem;
   margin-bottom: 0;
  }
 `;

 const JobTitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 0.1rem;

  @media (max-width: 768px) {
   font-size: 1.5rem; /* Smaller job title font on mobile */
   margin-bottom: 0;
  }
 `;

 const Description = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  max-width: 600px;
  text-align: center;
 `;

 const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
   flex-direction: column; /* Stack buttons on mobile */
   gap: 1rem;
  }
 `;

 const AnimatedButton = styled(Link)`
  color: ${({ theme }) => theme.text}; /* Text color is the text color */
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.body}; /* Background color is the body color */
  border: 2px solid ${({ theme }) => theme.text}; /* Border color is the text color */
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; /* Added transitions */

  @media (max-width: 768px) {
   font-size: 1.0rem; /* Smaller button text on mobile */
   padding: 0.6rem 1.2rem;
  }

  &:hover {
   animation: ${shadowHover} 0.5s ease-in-out forwards; /* Apply shadow animation on hover */
   background-color: ${({ theme }) => darken(0.1, theme.body)}; /* Slightly darken background on hover */
   color: ${({ theme }) => theme.text}; /* Keep text color the same */
   border-color: ${({ theme }) => theme.text}; /* Keep border color the same */
  }
 `;

 const LogoContainer = styled(motion.div)`
  position: absolute;
  top: 1rem;
  left: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
 `;

 const SocialLinksContainer = styled(motion.div)`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
 `;

 // Hero Component
 const Hero = () => {
  const jobTitles = ["I'm software developer", "I love code", "I develop website", "I develop mobile apps"];
  const typedRef = useRef(null);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
   const typed = new Typed(typedRef.current, {
    strings: jobTitles,
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: false,
   });

   return () => {
    typed.destroy();
   };
  }, [jobTitles]);

  function darken(amount, color) {
   let usePound = false;

   if (color.startsWith("#")) {
    color = color.slice(1);
    usePound = true;
   }

   const num = parseInt(color, 16);

   let r = Math.max(0, Math.min(255, (num >> 16) + amount));
   let b = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
   let g = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));

   const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
   };

   return (usePound ? "#" : "") + toHex(r) + toHex(g) + toHex(b);
  }

  function lighten(amount, color) {
   let usePound = false;

   if (color.startsWith("#")) {
    color = color.slice(1);
    usePound = true;
   }

   const num = parseInt(color, 16);

   let r = Math.max(0, Math.min(255, (num >> 16) - amount)); // Subtract to lighten
   let b = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) - amount)); // Subtract to lighten
   let g = Math.max(0, Math.min(255, (num & 0x0000FF) - amount)); // Subtract to lighten

   const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
   };

   return (usePound ? "#" : "") + toHex(r) + toHex(g) + toHex(b);
  }

  return (
   <HeroContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
   >
    <ImageAndButtonContainer>
    <CartoonImage
     src="/cartoon-photo.png"
     alt="Foto Kartun"
    />
    <OpenToWorkButton>
     <BlinkingDot />
     <RadarEffect />
     Open to work
    </OpenToWorkButton>
    </ImageAndButtonContainer>
    <Title>Masrud Mubarok</Title>
    <JobTitle ref={typedRef}></JobTitle>
    <Description>
     "The ladder of success is never crowded at the top."<br /><br />- Napoleon Hill -
    </Description>
    <ButtonContainer>
     <AnimatedButton to="/portfolio">
     <FontAwesomeIcon icon={faBriefcase} />
     My Portfolio
     </AnimatedButton>
     <AnimatedButton to="/contact">
     <FontAwesomeIcon icon={faEnvelope} />
     Contact Me
     </AnimatedButton>
    </ButtonContainer>
    <SocialLinksContainer>
     <SocialLinks />
    </SocialLinksContainer>
   </HeroContainer>
  );
 };

 export default Hero;