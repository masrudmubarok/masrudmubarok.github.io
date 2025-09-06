import React, { useState, useEffect } from 'react';
 import styled from 'styled-components';
 import { motion, AnimatePresence } from 'framer-motion';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
 import { FaReact, FaNodeJs, FaVuejs, FaJava } from 'react-icons/fa';
 import { SiMysql, SiMongodb, SiTailwindcss, SiCodeigniter, SiLaravel, SiExpress, SiRedux, SiRedis, SiSymfony } from 'react-icons/si';

 function darken(amount, color) {
  let usePound = false;
  if (color[0] === "#") {
   color = color.slice(1);
   usePound = true;
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) + amount;
  if (r > 255) r = 255; else if (r < 0) r = 0;
  let b = ((num >> 8) & 0x00FF) + amount;
  if (b > 255) b = 255; else if (b < 0) b = 0;
  let g = (num & 0x0000FF) + amount;
  if (g > 255) g = 255; else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
 }

 const PortfolioContainer = styled(motion.div)`
  padding: 2rem 1rem 4rem 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  max-width: 1000px;
  margin: 0 auto;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  @media (min-width: 768px) {
   padding: 3rem 2rem 6rem 2rem;
  }

  @media (min-width: 992px) {
   padding: 4rem 2rem 6rem 2rem;
  }
  
  @media (max-width: 480px) {
   padding: 1.5rem 0.75rem 3rem 0.75rem;
  }
 `;

 const ProjectsIntro = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.body === '#FFF' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'};
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
   font-size: 2rem;
   margin-bottom: 0.5rem;
   font-weight: 700;
   letter-spacing: -0.5px;
   text-align: center;
  }

  p {
   font-size: 1.1rem;
   color: ${({ theme }) => theme.secondaryText};
   max-width: 600px;
   line-height: 1.6;
   text-align: center;
  }

  @media (min-width: 768px) {
   margin-bottom: 4rem;

   h2 {
    font-size: 2.5rem;
   }

   p {
    font-size: 1.25rem;
   }
  }
 `;

 const PortfolioList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    gap: 4rem;
  }
 `;

 const ProjectItemBase = styled.li`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.body === '#FFF' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    padding-bottom: 5rem;
    min-height: 280px;
  }
 `;

 const ProjectItem = styled(motion(ProjectItemBase)).attrs({
  transition: { duration: 0.3 },
 })``;

 const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;
  perspective: 1500px;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  box-shadow: ${({ theme }) => theme.body === '#FFF' 
    ? '0 15px 35px rgba(0, 0, 0, 0.2)' 
    : '0 15px 35px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(255, 255, 255, 0.05)'};
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease;
  will-change: transform, box-shadow;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.1));
    z-index: 2;
    pointer-events: none;
    transition: opacity 0.3s ease;
    opacity: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0));
    z-index: 1;
    pointer-events: none;
    opacity: 0.6;
  }
  
  &:hover {
    box-shadow: 0 25px 55px rgba(0, 0, 0, 0.35);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (min-width: 768px) {
   height: 320px;
   min-width: 380px;
   width: 50%;
   max-width: 500px;
   margin-bottom: 0;
   order: 2;
  }
  
  @media (max-width: 480px) {
   height: 240px;
   border-radius: 6px;
  }
 `;

 const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center center;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: relative;
  z-index: 1;
  
  @media (hover: hover) {
    ${ProjectImageWrapper}:hover & {
      filter: brightness(1.15) contrast(1.05) saturate(1.1);
      transform: scale(1.08) translateZ(30px);
    }
  }
  
  /* Ensure mobile devices show a good image by default */
  @media (hover: none) {
    filter: brightness(1.05) contrast(1.02) saturate(1.05);
  }

  @media (min-width: 768px) {
   object-position: center;
  }
 `;

 const ProjectInfo = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  
  @media (min-width: 768px) {
   width: 50%;
   order: 1;
   padding-right: 1rem;
  }
 `;

 const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.3;

  @media (min-width: 768px) {
   font-size: 1.8rem;
   margin-bottom: 0.75rem;
  }
 `;

 const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 1.25rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    -webkit-line-clamp: 3;
  }
`;

const TechStackList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
   gap: 1rem;
   font-size: 1.5rem;
   margin-bottom: 1.5rem;
  }
 `;

 const TechStackItem = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
 `;

 const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  flex-wrap: wrap;

  @media (min-width: 768px) {
   gap: 1.25rem;
   flex-wrap: nowrap;
  }
  
  @media (max-width: 480px) {
   justify-content: center;
   margin-top: 1rem;
  }
 `;

 const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  background-color: ${({ theme }) => theme.primary};
  color: white;

  &:hover {
   background-color: ${({ theme }) => darken(0.1, theme.primary)};
  }

  @media (min-width: 768px) {
   gap: 0.5rem;
   padding: 0.6rem 1.2rem;
   font-size: 0.95rem;
  }

  /* Mobile-specific styling for buttons */
  @media (max-width: 600px) {
   padding: 0.5rem 1rem;
  }
 `;
 
 const ViewDetailsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background-color: transparent;
  color: ${({ theme }) => theme.body === '#FFF' ? theme.secondaryText : '#FFF'};
  border: 1px solid ${({ theme }) => theme.body === '#FFF' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)'};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
   background-color: ${({ theme }) => theme.body === '#FFF' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'};
  }

  @media (min-width: 768px) {
   font-size: 0.9rem;
   padding: 0.5rem 1.1rem;
  }
 `;

 const ProjectModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
 `;

 const ProjectModal = styled(motion.div)`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  padding: 2rem;
  max-width: 90%;
  max-height: 95%;
  overflow-y: auto;
  position: relative;
  box-shadow: ${({ theme }) => theme.body === '#FFF' 
    ? '0 10px 30px rgba(0, 0, 0, 0.25)' 
    : '0 10px 30px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(255, 255, 255, 0.03)'};
  border: 1px solid ${({ theme }) => theme.body === '#FFF' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)'};
  transition: background-color 0.3s ease, color 0.3s ease;
  scroll-behavior: smooth;

  @media (min-width: 768px) {
   padding: 3rem;
   max-width: 850px;
   max-height: 90%;
  }
  
  @media (min-width: 992px) {
   padding: 3rem;
   max-width: 950px;
  }
  
  @media (max-width: 480px) {
   padding: 1.5rem;
   max-width: 95%;
   max-height: 98%;
  }
 `;

 const ModalImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 1.3rem;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transform: perspective(1400px) rotateX(2deg);
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.05));
    z-index: 2;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(0,0,0,0), rgba(0,0,0,0.4));
    z-index: 1;
    opacity: 0.5;
    pointer-events: none;
  }
  
  &:hover {
    transform: perspective(1400px) rotateX(0deg);
  }
 `;
 
 const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  max-height: 450px;
  object-fit: contain;
  display: block;
  transform: translateY(0);
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.7s ease;
  position: relative;
  z-index: 3;
  filter: brightness(1.05) contrast(1.05);
  
  ${ModalImageWrapper}:hover & {
    transform: translateY(-5px);
    filter: brightness(1.1) contrast(1.08) saturate(1.05);
  }
  
  @media (min-width: 768px) {
    max-height: 550px;
  }
  
  @media (min-width: 992px) {
    max-height: 550px;
  }
 `;

 const ModalTitle = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
   font-size: 2rem;
   margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
   font-size: 1.4rem;
   margin-bottom: 0.75rem;
  }
 `;

 const ModalSectionTitle = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.75rem;
  font-weight: 600;
  letter-spacing: -0.3px;

  @media (min-width: 768px) {
   font-size: 1.4rem;
   margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
   font-size: 1.1rem;
   margin-bottom: 0.5rem;
  }
 `;

 const ModalDescription = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 1.75rem;
  line-height: 1.7;
  text-align: justify;

  @media (min-width: 768px) {
   font-size: 1.2rem;
   margin-bottom: 2.25rem;
  }
 `;

 const ModalFeatureList = styled.ul`
  list-style-type: disc;
  margin-left: 1.25rem;
  margin-bottom: 1.75rem;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.05rem;
  line-height: 1.7;
  
  @media (min-width: 768px) {
   font-size: 1.1rem;
   margin-bottom: 2.25rem;
  }
 `;

 const ModalFeatureItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
 `;

 const ModalTechStackList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.secondary};
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
   gap: 1.75rem;
   font-size: 2.5rem;
  }

  /* Mobile specific for modal icons */
  @media (max-width: 600px) {
   justify-content: center;
   gap: 1.25rem;
  }
 `;

 const ModalTechStackItem = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 0.3rem;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: scale(1.2);
    filter: brightness(1.2);
  }
 `;

 const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.body === '#FFF' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'};

  @media (min-width: 768px) {
   margin-top: 2.5rem;
  }

  /* Mobile specific for modal actions */
  @media (max-width: 600px) {
   justify-content: center;
   gap: 1.25rem;
  }
 `;

 const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin-top: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
   color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 768px) {
   font-size: 1.2rem;
   margin-top: 0.2rem;
  }
 `;

 const techIconMap = {
  'React.js': { icon: FaReact, color: '#61DAFB' },
  'Node.js': { icon: FaNodeJs, color: '#339933' },
  'Express.js': { icon: SiExpress, color: '#000000' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'React Native': { icon: FaReact, color: '#61DAFB' },
  'Redux': { icon: SiRedux, color: '#764ABC' },
  'Vue.js': { icon: FaVuejs, color: '#42b883' },
  'Laravel': { icon: SiLaravel, color: '#FF2D20' },
  'CodeIgniter': { icon: SiCodeigniter, color: '#F9A602' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38B2AC' },
  'Java': { icon: FaJava, color: '#007396' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  'Symfony': { icon: SiSymfony, color: '#000000' },
 };

 const getTechIcon = (tech) => {
  return techIconMap[tech] || null;
 };

 const initialProjects = [
  {
   id: 1,
   title: 'SIMKEU PPTIK - Financial Management System',
   shortDescription: 'SIMKEU PPTIK is a financial management system developed for PPTIK STIKI Malang. It is designed to streamline the recording, reporting, and management of financial transactions in an efficient and organized manner.',
   description: 'SIMKEU PPTIK is a financial management system developed for PPTIK STIKI Malang. It is designed to streamline the recording, reporting, and management of financial transactions in an efficient and organized manner. The system provides comprehensive tools for budgeting, expense tracking, financial reporting, and audit preparation.',
   imageUrl: '/simkeu-dashboard.png',
   demoUrl: '#',
   techStack: ['Laravel', 'Tailwind CSS', 'MySQL'],
   type: 'web',
   fullImage: '/simkeu-dashboard.png',
   keyFeatures: [
    'Real-time financial dashboard with data visualization',
    'Automated expense categorization and budget allocation',
    'Comprehensive reporting system with exportable documents',
    'User role management with differentiated access controls',
    'Transaction history with audit trails'
   ],
   impact: 'Implemented at PPTIK STIKI Malang, this system has reduced financial processing time by 65% and eliminated manual reporting errors. The automation of routine tasks has allowed financial staff to focus on strategic financial planning rather than day-to-day transaction processing.'
  },
  {
   id: 2,
   title: 'PPTIK Academy - Online Learning Platform',
   shortDescription: 'PPTIK Academy is a mobile application designed to provide a seamless and interactive learning experience. The platform offers a variety of courses, enabling students to learn at their own pace from anywhere...',
   description: 'PPTIK Academy is a mobile application designed to provide a seamless and interactive learning experience. The platform offers a variety of courses, enabling students to learn at their own pace from anywhere. Built for Android, this app focuses on delivering quality education on-the-go. It also includes an admin panel for managing courses, user accounts, and payment processing, ensuring smooth operation and scalability of the platform.',
   imageUrl: '/pptik-academy.png',
   demoUrl: 'https://youtu.be/bmTcTlXCpRw',
   techStack: ['Java', 'CodeIgniter', 'MySQL'],
   type: 'mobile',
   fullImage: '/pptik-academy.png',
   keyFeatures: [
    'Contains a wide range of courses across various subjects',
    'Progress tracking and learning path customization',
    'HD video lectures with adjustable playback speeds',
    'Provides online payment integration for course purchases using Midtrans Payment Gateway',
   ],
   impact: 'PPTIK Academy has empowered over 100+ students to access quality education remotely, particularly benefiting those in areas with limited educational resources. Student engagement metrics show an 80% completion rate for courses, significantly higher than industry averages for mobile learning platforms.'
  },
  {
   id: 3,
   title: 'Activity & Event Scheduling - Sport Management Platform',
   shortDescription: 'A comprehensive sports management system for scheduling athletic activities, managing facilities, and coordinating events. This platform provides schools and athletic departments with tools to streamline scheduling, registration, and communication...',
   description: 'The Activity & Event Scheduling platform is a robust sports management solution designed for schools and athletic departments. It features real-time facility management, automated conflict resolution for scheduling, team and participant registration, and public-facing calendars. The system includes advanced communication tools for coaches, administrators, and parents, as well as integration with transportation scheduling and officiating assignments. Built with Symfony and Vue.js, the platform offers a seamless experience across devices while maintaining data integrity through MongoDB and MySQL databases.',
   imageUrl: '/rschooltoday.png',
   demoUrl: 'https://rschooltoday.com',
   techStack: ['Symfony', 'Vue.js', 'MySQL', 'MongoDB'],
   type: 'web',
   fullImage: '/rschooltoday.png',
   keyFeatures: [
    'Team roster management with eligibility tracking',
    'Integrated messaging system for announcements and cancellations',
    'Officials assignment and payment processing',
    'Public event calendars with customizable views',
    'Synchronized student data with 3rd party Clever integration'
   ],
   impact: 'This platform has been adopted by multiple school districts, reducing administrative workload by approximately 30 hours per week per school. Athletic departments report a 45% decrease in scheduling conflicts and a 70% improvement in parent communication efficiency. The system currently manages over 5,000 athletic events annually across its customer base.'
  },
 ];

 const Portfolio = () => {
  const [visibleProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  // Advanced 3D hover effect with enhanced Three.js-like features
  useEffect(() => {
    // Check if device is touch-based (mobile)
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    };
    
    // Only apply 3D effects on non-touch devices
    const isDesktop = !isTouchDevice();
    
    const handleMouseMove = (e, wrapper) => {
      // Skip effect on touch devices
      if (!isDesktop) return;
      
      const { left, top, width, height } = wrapper.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Calculate normalized position (0 to 1)
      const normalizedX = x / width;
      const normalizedY = y / height;
      
      // Calculate tilt values with enhanced 3D effect
      // Added more sensitivity to X-axis movement to simulate real 3D object physics
      const tiltX = (normalizedY * 2 - 1) * -18;
      const tiltY = (normalizedX * 2 - 1) * 15;
      
      // Calculate distance from center for intensity
      const centerX = width / 2;
      const centerY = height / 2;
      const distanceX = (x - centerX) / centerX;
      const distanceY = (y - centerY) / centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Calculate dynamic Z translation based on cursor proximity to center
      // This simulates the object rising toward the cursor - a true 3D effect
      const zTranslation = 20 + (1 - Math.min(1, distance * 1.5)) * 15;
      
      // Subtle rotation adjustment based on cursor speed (simulates momentum)
      const rotationAdjustment = Math.min(5, Math.max(-5, distanceX * 3));
      
      // Lighting effect - calculate highlight position with enhanced properties
      const highlightX = 100 * normalizedX;
      const highlightY = 100 * normalizedY;
      
      // Apply transform with subtle movement and enhanced perspective
      wrapper.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY + rotationAdjustment}deg) scale3d(1.05, 1.05, 1.05) translateZ(${zTranslation}px)`;
      
      // Apply dynamic box shadow based on tilt (creates realistic lighting)
      const shadowX = tiltY * 0.4;
      const shadowY = -tiltX * 0.4;
      const shadowBlur = 35 + Math.abs(tiltX) + Math.abs(tiltY);
      wrapper.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.25)`;
      
      // Apply dynamic lighting effect with dual gradients for more realistic look
      const highlight = wrapper.querySelector('.highlight-overlay');
      if (highlight) {
        // Primary highlight follows cursor
        const primaryOpacity = 0.35 - (distance * 0.15);
        const secondaryOpacity = 0.15;
        
        // Create two light sources for more Three.js-like rendering
        highlight.style.background = `
          radial-gradient(circle at ${highlightX}% ${highlightY}%, rgba(255,255,255,${primaryOpacity}) 0%, rgba(255,255,255,0) 60%),
          radial-gradient(circle at ${100-highlightX}% ${100-highlightY}%, rgba(255,255,255,${secondaryOpacity}) 0%, rgba(255,255,255,0) 70%)
        `;
        highlight.style.opacity = 1;
        
        // Add subtle color tint based on position for artistic effect
        const hue = 210 + (normalizedX * 30);
        highlight.style.mixBlendMode = 'overlay';
        highlight.style.background += `, linear-gradient(${hue}deg, rgba(100,180,255,0.03), rgba(255,255,255,0))`;
      }
      
      // Enhance the image inside the wrapper for more depth
      const image = wrapper.querySelector('img');
      if (image) {
        // Subtle counter-movement for parallax effect
        const imageOffsetX = distanceX * -5;
        const imageOffsetY = distanceY * -5;
        image.style.transform = `scale(1.08) translateZ(30px) translate(${imageOffsetX}px, ${imageOffsetY}px)`;
      }
    };

    const handleMouseLeave = (wrapper) => {
      // Smooth return to original state
      wrapper.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.8s ease';
      wrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateZ(0)';
      wrapper.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
      
      const highlight = wrapper.querySelector('.highlight-overlay');
      if (highlight) {
        highlight.style.opacity = 0;
      }
      
      const image = wrapper.querySelector('img');
      if (image) {
        image.style.transform = '';
      }
      
      // Reset transition after animation completes
      setTimeout(() => {
        wrapper.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease';
      }, 800);
    };

    // Add highlight overlays to all image wrappers
    const wrappers = document.querySelectorAll('.project-image-wrapper');
    wrappers.forEach(wrapper => {
      // Create highlight overlay if it doesn't exist
      if (!wrapper.querySelector('.highlight-overlay')) {
        const highlight = document.createElement('div');
        highlight.className = 'highlight-overlay';
        highlight.style.position = 'absolute';
        highlight.style.top = 0;
        highlight.style.left = 0;
        highlight.style.width = '100%';
        highlight.style.height = '100%';
        highlight.style.pointerEvents = 'none';
        highlight.style.opacity = 0;
        highlight.style.transition = 'opacity 0.3s ease';
        highlight.style.zIndex = 3;
        highlight.style.borderRadius = '8px';
        wrapper.appendChild(highlight);
      }
      
      wrapper.addEventListener('mousemove', (e) => handleMouseMove(e, wrapper));
      wrapper.addEventListener('mouseleave', () => handleMouseLeave(wrapper));
    });

    return () => {
      wrappers.forEach(wrapper => {
        wrapper.removeEventListener('mousemove', handleMouseMove);
        wrapper.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [visibleProjects]);

  const openModal = (project) => {
   setSelectedProject(project);
   document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
   setSelectedProject(null);
   document.body.style.overflow = 'unset';
  };

  const itemVariants = {
   hidden: { opacity: 0, y: 30 },
   visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.6, ease: 'easeOut' } },
  };

  return (
   <PortfolioContainer
    id="portfolio"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
   >     <ProjectsIntro>
     <h2>Featured Projects</h2>
     <p>A collection of projects I've built that showcase my skills and interests.</p>
    </ProjectsIntro>

    <PortfolioList
     initial="hidden"
     animate="visible"
     exit="hidden"
     variants={{
      visible: {
       transition: { staggerChildren: 0.1 },
      },
     }}
    >
     <AnimatePresence>
      {visibleProjects.map((project, index) => (
       <ProjectItem
        key={project.id}
        layout
        variants={itemVariants}
        index={index}
       >
        <ProjectImageWrapper className="project-image-wrapper" data-tilt>
          <ProjectImage src={project.imageUrl} alt={project.title} index={index} />
        </ProjectImageWrapper>
        <ProjectInfo>
         <TechStackList
          as={motion.ul}
          transition={{ duration: 0.2 }}
         >
          {project.techStack.map((tech, i) => {
           const techInfo = getTechIcon(tech);
           return techInfo ? (
            <TechStackItem as={motion.li} key={i} style={{ color: techInfo.color }}>
             {typeof techInfo.icon === 'function' ? <techInfo.icon /> : <techInfo.icon />}
            </TechStackItem>
           ) : (
            <TechStackItem key={i}>{tech}</TechStackItem>
           );
          })}
         </TechStackList>
         <ProjectTitle>{project.title}</ProjectTitle>
         <ProjectDescription>{project.shortDescription}</ProjectDescription>
         <ProjectActions>
          <ViewDetailsButton onClick={() => openModal(project)}>
            Read More
          </ViewDetailsButton>
         </ProjectActions>
        </ProjectInfo>
       </ProjectItem>
      ))}
     </AnimatePresence>
    </PortfolioList>

    <AnimatePresence>
     {selectedProject && (
      <ProjectModalOverlay
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
      >
       <ProjectModal
        layout
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
       >
        <CloseButton onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></CloseButton>
        {selectedProject.imageUrl && (
         <ModalImageWrapper>
          <ModalImage src={selectedProject.imageUrl} alt={selectedProject.title} />
         </ModalImageWrapper>
        )}
        <ModalTitle>{selectedProject.title}</ModalTitle>
        
        <ModalSectionTitle>Description</ModalSectionTitle>
        <ModalDescription>{selectedProject.description}</ModalDescription>
        
        <ModalSectionTitle>Technologies</ModalSectionTitle>
        <ModalTechStackList>
          {selectedProject.techStack.map((tech, i) => {
           const techInfo = getTechIcon(tech);
           return techInfo ? (
            <ModalTechStackItem key={i} style={{ color: techInfo.color }}>
             {typeof techInfo.icon === 'function' ? <techInfo.icon /> : <techInfo.icon />}
            </ModalTechStackItem>
           ) : (
            <ModalTechStackItem key={i}>{tech}</ModalTechStackItem>
           );
          })}
         </ModalTechStackList>
         
         {selectedProject.keyFeatures && (
          <>
            <ModalSectionTitle>Key Features</ModalSectionTitle>
            <ModalFeatureList>
              {selectedProject.keyFeatures.map((feature, i) => (
                <ModalFeatureItem key={i}>{feature}</ModalFeatureItem>
              ))}
            </ModalFeatureList>
          </>
         )}
         
         {selectedProject.impact && (
          <>
            <ModalSectionTitle>Impact</ModalSectionTitle>
            <ModalDescription>{selectedProject.impact}</ModalDescription>
          </>
         )}
         
         <ModalActions>
          {selectedProject.demoUrl && (
           <ActionButton href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> View Project
           </ActionButton>
          )}
         </ModalActions>
       </ProjectModal>
      </ProjectModalOverlay>
     )}
    </AnimatePresence>
   </PortfolioContainer>
  );
 };

 export default Portfolio;