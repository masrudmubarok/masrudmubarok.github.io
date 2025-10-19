import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

 // Keyframes for radar effect
const radarAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  40% { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
`;

// Styled Components
const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 1.5rem 3rem 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
  padding: 0.5rem 2rem 2rem 2rem; 
  }

  @media (min-width: 1200px) {
  padding: 1rem 3rem 3rem 3rem;
  }
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
   font-size: 0.8rem;
   padding: 0.4rem 0.8rem;
  }
`;

const BlinkingDot = styled.span`
  width: 0.50rem;
  height: 0.50rem;
  background-color: #4CAF50;
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
  font-size: 3rem;
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
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
   font-size: 1.5rem;
   margin-bottom: 0;
   min-height: 2rem;
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
        background: transparent;
        color: ${({ theme }) => theme.text};
        border-color: ${({ theme }) => theme.text};
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.12);
        transform: translateY(-2px) scale(1.07);
        filter: brightness(1.08);
    }
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
  const typedRef = useRef(null);

  useEffect(() => {
    const jobTitles = ["Software Engineer"];
    const typed = new Typed(typedRef.current, {
      strings: jobTitles,
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      showCursor: false,
    });

   return () => {
    typed.destroy();
   };
  }, []);

  return (
   <HeroContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
   >
    <ImageAndButtonContainer>
    <Link to="/about">
      <CartoonImage
      src="/cartoon-photo.png"
      alt="Foto Kartun"
      />
    </Link>
    <OpenToWorkButton>
     <BlinkingDot />
     <RadarEffect />
     Active
    </OpenToWorkButton>
    </ImageAndButtonContainer>
    <Title>Masrud Mubarok</Title>
    <JobTitle ref={typedRef}></JobTitle>
    <Description>
     "Whatever the mind can conceive and believe, it can achieve."<br /><br />- Napoleon Hill -
    </Description>
    <ButtonContainer>
     <AnimatedButton to="/portfolio">
     <FontAwesomeIcon icon={faBriefcase} />
     Portfolio
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