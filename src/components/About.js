import React from 'react';
 import styled, { keyframes, ThemeContext } from 'styled-components';
 import { motion } from 'framer-motion';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {
  faUser,
  faCode,
  faBriefcase,
  faGraduationCap,
  faLightbulb,
  faDatabase as faDatabaseFA, // Alias untuk menghindari konflik dengan react-icons
} from '@fortawesome/free-solid-svg-icons';
 import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaVuejs,
} from 'react-icons/fa';
 import { SiMysql, SiMongodb, SiPhp, SiCodeigniter, SiLaravel, SiSymfony, SiTailwindcss, SiBootstrap, SiRedis } from 'react-icons/si';
 import { darken } from '../styles/utils';

 // Objek yang menyimpan warna asli setiap teknologi
 const techColors = {
  javascript: '#F7DF1E',
  react: '#61DAFB',
  'node.js': '#339933',
  html: '#E34F26',
  css: '#1572B6',
  redux: '#764ABC',
  docker: '#2496ED',
  git: '#F05032',
  python: '#3776AB',
  vuejs: '#41B883',
  sass: '#CC6699',
  php: '#8892BE',
  codeigniter: '#E08E00',
  laravel: '#FF2D20',
  symfony: '#000000',
  mysql: '#4479A1',
  mongodb: '#47A248',
  redis: '#DC382D',
  'tailwind css': '#38B2AC',
  bootstrap: '#563D7C',
  'framer motion': '#0055FF',
  livewire: '#CC0000',
 };

 const AboutContainer = styled(motion.div)`
  padding: 1.5rem 3vw;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: stretch;
  margin: 0 auto;

  @media (max-width: 768px) {
   padding: 1.5rem 2vw;
  }

  @media (max-width: 480px) {
   padding: 1rem 2vw;
  }
 `;

 const Section = styled(motion.div)`
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.mode === 'dark' && `
   box-shadow: 0 2px 8px rgba(255, 255, 255, 0.05);
  `}
 `;

 const ProfileHeader = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
 `;

 // Keyframes for subtle shadow animation on hover
 const shadowHover = keyframes`
  0% { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); transform: translateY(0); }
  50% { box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25); transform: translateY(-2px); }
  100% { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); transform: translateY(0); }
 `;

 const AvatarPlaceholder = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
 `;

 const Name = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.1rem;
  text-align: center;
 `;

 const Headline = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
  text-align: center;
 `;

 const SectionTitle = styled(motion.h2)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 0.5rem;
 `;

 const TitleIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
 `;

 const Paragraph = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  margin-top: 1.7rem;
  line-height: 1.6;
 `;

 const SkillsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
 `;

 const SkillItemWrapper = styled(motion.li)`
  color: ${({ theme }) => theme.text}; /* Text color is the text color */
  padding: 0.45rem 0.75rem;
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
   font-size: 0.9rem; /* Smaller button text on mobile */
   padding: 0.5rem 1rem;
  }

  &:hover {
   animation: ${shadowHover} 0.5s ease-in-out forwards; /* Apply shadow animation on hover */
   background-color: ${({ theme }) => darken(0.1, theme.body)}; /* Slightly darken background on hover */
   color: ${({ theme }) => theme.text}; /* Keep text color the same */
   border-color: ${({ theme }) => theme.text}; /* Keep border color the same */
  }
 `;

 const SkillIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
 `;

 const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
 `;

 const ExperienceItem = styled(motion.li)`
  margin-bottom: 1.5rem;
 `;

 const ExperienceTitle = styled(motion.h3)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: -0.3rem;
 `;

 const ExperienceOffice = styled(motion.p)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: -0.5rem;
 `;

 const ExperienceSubtitle = styled(motion.p)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: -0.5rem;
 `;

 const EducationList = styled.ul`
  list-style: none;
  padding: 0;
 `;

 const EducationItem = styled(motion.li)`
  margin-bottom: 1.5rem;
 `;

 const EducationTitle = styled(motion.h3)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: -0.3rem;
 `;

 const EducationSubtitle = styled(motion.p)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 0.5rem;
  font-style: italic;
 `;

 const CartoonImage = styled(motion.img)`
  width: 84px;
  height: 84px;
  margin-bottom: 0;
  object-fit: cover;
 `;

 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
   opacity: 1,
   transition: {
    delayChildren: 0.2,
    staggerChildren: 0.1,
   },
  },
  exit: { opacity: 0 },
 };

 const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
 };

 const skillItemVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
 };

 const About = () => {
  return (
   <AboutContainer
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.3 }}
   >
    <ProfileHeader>
     <AvatarPlaceholder>
      <CartoonImage
       src="/cartoon-photo.png"
       alt="Foto Kartun"
      />
     </AvatarPlaceholder>
     <Name>Masrud Mubarok</Name>
     <Headline>Software Developer | Web & Mobile Development</Headline>
    </ProfileHeader>

    <Section variants={sectionVariants}>
     <SectionTitle>
      <TitleIcon icon={faUser} /> About
     </SectionTitle>
     <Paragraph>
     I am a passionate Software Engineer with over 4 years of experience specializing in web development. I have a strong background in building responsive, scalable, and user-friendly web applications. I am always eager to take on new challenges and continuously work on improving my technical skills to stay updated with the latest trends and technologies in web development.
     </Paragraph>
    </Section>

    <Section variants={sectionVariants}>
     <SectionTitle>
      <TitleIcon icon={faCode} /> Skills
     </SectionTitle>
     <SkillsList>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.php }}><SiPhp /></SkillIcon> PHP
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.javascript }}><FaJs /></SkillIcon> JavaScript
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.python }}><FaPython /></SkillIcon> Python
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.codeigniter }}><SiCodeigniter /></SkillIcon> CodeIgniter
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.laravel }}><SiLaravel /></SkillIcon> Laravel
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.symfony }}><SiSymfony /></SkillIcon> Symfony
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors['node.js'] }}><FaNodeJs /></SkillIcon> Node.js
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
        <SkillIcon>
          <img
            src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
            alt="Express.js"
            style={{ height: '1.2rem', verticalAlign: 'middle' }}
          />
        </SkillIcon>
        Express.js
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.vuejs }}><FaVuejs /></SkillIcon> Vue.js
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.react }}><FaReact /></SkillIcon> React.js
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.mysql }}><SiMysql /></SkillIcon> MySQL
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.mongodb }}><SiMongodb /></SkillIcon> MongoDB
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.redis }}><SiRedis /></SkillIcon> Redis
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.docker }}><FaDocker /></SkillIcon> Docker
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.git }}><FaGitAlt /></SkillIcon> GIT
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.html }}><FaHtml5 /></SkillIcon> HTML
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.css }}><FaCss3Alt /></SkillIcon> CSS
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors['tailwind css'] }}><SiTailwindcss /></SkillIcon> Tailwind CSS
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
       <SkillIcon style={{ color: techColors.bootstrap }}><SiBootstrap /></SkillIcon> Bootstrap
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
        <SkillIcon>
        <img
          src="https://images.seeklogo.com/logo-png/44/1/framer-motion-logo-png_seeklogo-446185.png"
          alt="Framer Motion"
          style={{ height: '1.2rem', verticalAlign: 'middle' }}
        />
        </SkillIcon>
        Framer Motion
      </SkillItemWrapper>
      <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
        <SkillIcon>
        <img
          src="https://logo.svgcdn.com/d/livewire-original.svg"
          alt="Livewire"
          style={{ height: '1.2rem', verticalAlign: 'middle' }}
        />
        </SkillIcon>
        Livewire
      </SkillItemWrapper>
     </SkillsList>
    </Section>

    <Section variants={sectionVariants}>
     <SectionTitle>
      <TitleIcon icon={faBriefcase} /> Experience
     </SectionTitle>
     <ExperienceList>
      <ExperienceItem>
       <ExperienceTitle>Web Developer</ExperienceTitle>
       <ExperienceOffice>rSchoolToday . Full-time</ExperienceOffice>
       <ExperienceSubtitle>Sep 2021 - Feb 2025</ExperienceSubtitle>
       <ExperienceSubtitle>Indonesia . Remote</ExperienceSubtitle>
       <Paragraph>
         • Built dynamic software solutions with PHP (Symfony), integrating with Vue.js and React.js to enhance user interfaces and optimize business processes while delivering tailored client features.<br/>
         • Optimized development and deployment processes by implementing Docker across both local and server environments, ensuring consistency, reducing setup time, and accelerating software delivery.<br/>
         • Diagnosed and resolved complex software bugs, ensuring system reliability.<br/>
         • Integrated APIs with third-party platforms, to streamline data synchronization and elevate system interoperability.<br/>
        </Paragraph>
       </ExperienceItem>
       <hr />
       <ExperienceItem>
        <ExperienceTitle>Web Developer</ExperienceTitle>
        <ExperienceOffice>PPTIK STIKI Malang . Internship</ExperienceOffice>
        <ExperienceSubtitle>Apr 2020 - Sep 2021</ExperienceSubtitle>
        <ExperienceSubtitle>Malang, East Java, Indonesia . On-site</ExperienceSubtitle>
        <Paragraph>
         • Developed software solutions to optimize financial management and enhance reporting accuracy using Laravel and Tailwind CSS. <br />
         • Developed an online course platform using Java for mobile and an admin dashboard using Laravel and Tailwind CSS. <br />
         • Executed test cases and ensured a seamless user experience by debugging technical issues. <br />
        </Paragraph>
       </ExperienceItem>
      </ExperienceList>
     </Section>

     <Section variants={sectionVariants}>
      <SectionTitle>
       <TitleIcon icon={faGraduationCap} /> Education
      </SectionTitle>
      <EducationList>
       <EducationItem>
        <EducationTitle>Bachelor of Inforamtics</EducationTitle>
        <ExperienceOffice>STIKI Malang</ExperienceOffice>
        <ExperienceSubtitle>2017 - 2021</ExperienceSubtitle>
       </EducationItem>
      </EducationList>
     </Section>

     {/* Anda bisa menambahkan bagian lain seperti "Projects", "Awards", dll. */}
     {/* <Section variants={sectionVariants}>
      <SectionTitle>
       <TitleIcon icon={faLightbulb} /> Projects
      </SectionTitle>
     </Section> */}
    </AboutContainer>
   );
 };

 export default About;