import React from 'react';
 import styled, { keyframes } from 'styled-components';
 import { motion } from 'framer-motion';
 import { FaWhatsapp } from 'react-icons/fa';
 import { MdEmail } from 'react-icons/md';

 const ContactContainer = styled(motion.div)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background-color: ${({ theme }) => theme.background};
  text-align: center;

  @media (min-width: 768px) {
   padding: 2rem 2rem;
   min-height: 50vh;
  }
 `;

 const WavyTitleAnimation = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(-8px); }
  40% { transform: translateY(4px); }
  60% { transform: translateY(-4px); }
  80% { transform: translateY(8px); }
  100% { transform: translateY(0); }
 `;

 const Title = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
  letter-spacing: -0.06em;
  line-height: 1.2;
  animation: ${WavyTitleAnimation} 2s ease-in-out infinite alternate;

  @media (min-width: 768px) {
   font-size: 2.5rem; 
   margin-bottom: 2rem;
   letter-spacing: -0.08em;
   line-height: 1.1;
  }
 `;

 const SubTitle = styled(motion.h3)`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
   font-size: 1.3rem;
   letter-spacing: -0.03em;
  }
 `;

 const ContactDescription = styled(motion.p)`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 90%;
  font-style: italic;

  @media (min-width: 768px) {
   font-size: 1.1rem;
   line-height: 1.7;
   margin-bottom: 2.5rem;
   max-width: 700px;
  }
 `;

 const ContactMethodList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
 `;

const ContactLink = styled(motion.a)`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ $iconcolor }) => $iconcolor || '#222'};
    background: transparent;
    border: 2px solid ${({ $iconcolor }) => $iconcolor || '#222'};
    border-radius: 8px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.6rem 1.4rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    transition: background 0.2s, color 0.2s, border 0.2s, transform 0.2s;
    margin-bottom: 0.2rem;

    &:hover {
        background: transparent;
        color: ${({ $iconcolor }) => $iconcolor || '#222'};
        border: 2px solid ${({ $iconcolor }) => $iconcolor || '#222'};
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.12);
        transform: translateY(-2px) scale(1.07);
        filter: brightness(1.08);
    }

    @media (min-width: 768px) {
        font-size: 1.1rem;
        gap: 1.2rem;
        padding: 0.7rem 1.8rem;
    }
`;

 const IconStyle = `
  font-size: 1.2rem;

  @media (min-width: 768px) {
   font-size: 1.5rem;
  }
 `;

 const WhatsApp = styled(FaWhatsapp)`
  ${IconStyle}
  color: #25D366;
 `;

 const Email = styled(MdEmail)`
  ${IconStyle}
  color: ${({ theme }) => theme.secondary};
 `;

 const EmphasisText = styled.span`
  color: ${({ theme }) => theme.accent || theme.primary};
  font-weight: 700;
 `;

 const Contact = () => {
  const containerVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
  };

  const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
  };

  return (
   <ContactContainer variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
    <Title variants={itemVariants}>Connect <EmphasisText>With Me!</EmphasisText></Title>
    <SubTitle variants={itemVariants}>Let's Forge Something Amazing Together</SubTitle>
    <ContactDescription variants={itemVariants}>
     I'm eager to explore exciting new projects and collaborations. Don't hesitate to reach out if you have an interesting idea or just want to say hello! Your message is highly valued.
    </ContactDescription>
        <ContactMethodList variants={itemVariants}>
            <ContactLink
                href="https://wa.me/6281321219970"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                $iconcolor="#25D366"
            >
                <WhatsApp /> Chat on WhatsApp
            </ContactLink>
            <ContactLink
                href="mailto:masrud.mubarok21@gmail.com"
                variants={itemVariants}
                $iconcolor="#9c9c9cff"
            >
                <Email style={{ color: '#9c9c9cff' }} /> Drop Me an Email
            </ContactLink>
        </ContactMethodList>
   </ContactContainer>
  );
 };

 export default Contact;