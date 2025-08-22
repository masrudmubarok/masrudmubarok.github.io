import React from 'react';
 import styled, { keyframes, ThemeContext } from 'styled-components';
 import { motion } from 'framer-motion';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {
  faUser,
  faCode,
  faBriefcase,
  faGraduationCap,
  faTools
} from '@fortawesome/free-solid-svg-icons';
 import {
  FaJs,
  FaJava,
  FaCode,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaVuejs,
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiPhp, SiCodeigniter, SiLaravel, SiSymfony, SiTailwindcss, SiBootstrap, SiRedis, SiNestjs, SiNextdotjs, SiElastic, SiDotnet, SiAdonisjs, SiPostgresql } from 'react-icons/si';
import { FaDatabase, FaAngular, FaAws } from 'react-icons/fa';
import { darken } from '../styles/utils';

 // Objek yang menyimpan warna asli setiap teknologi
 const techColors = {
  javascript: '#F7DF1E',
  react: '#61DAFB',
  'node.js': '#339933',
  nestjs: '#E0234E',
  nextjs: '#000000',
  aws: '#FFCA28',
  elastic: '#005571',
  angular: '#DD0031',
  dotnet: '#512BD4',
  adonisjs: '#2C2C32',
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
  mssql: '#CC2927',
  postgresql: '#336791',
  mongodb: '#47A248',
  redis: '#DC382D',
  cloudwatch: '#FF9900',
  'tailwind css': '#38B2AC',
  bootstrap: '#563D7C',
  'framer motion': '#0055FF',
  livewire: '#CC0000',
  java: '#007396',
  csharp: '#239120',
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
    expressjs: '#000000',
    adonisjs: '#2C2C32',
    nestjs: '#E0234E',
    dotnet: '#512BD4',
    laravel: '#FF2D20',
    codeigniter: '#E08E00',
    symfony: '#000000',
    nextjs: '#000000',
    angular: '#DD0031',
    vuejs: '#41B883',
    mysql: '#4479A1',
    postgresql: '#336791',
    mssql: '#CC2927',
    mongodb: '#47A248',
    redis: '#DC382D',
    elastic: '#005571',
    cloudwatch: '#FF9900',
    git: '#F05032',
    docker: '#2496ED',
    aws: '#FF9900',
    html: '#E34F26',
    css: '#1572B6',
    bootstrap: '#563D7C',
    tailwindcss: '#38B2AC',
    framer: '#0055FF',
    livewire: '#CC0000',
    java: '#007396',
    csharp: '#239120',
    php: '#8892BE',
    python: '#3776AB',
    javascript: '#F7DF1E',
    react: '#61DAFB',
    redux: '#764ABC',
    sass: '#CC6699',
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

 const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  line-height: 1.6;
  margin-bottom: 1rem;
  padding-left: 0;
  margin-left: 0;

  & > ul {
   padding-left: 0; /* Hapus padding pada list container */
   margin-left: 1rem; /* Berikan margin kiri pada list container */
   list-style-position: outside;
  }

 `;

const SkillsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
  gap: 0.6rem;
`;

 const SkillItemWrapper = styled(motion.li)`
  color: ${({ theme }) => theme.text};
  padding: 0.45rem 0.75rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.text};
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  &:hover {
    animation: ${shadowHover} 0.5s ease-in-out forwards;
    background-color: ${({ theme }) => darken(0.1, theme.body)};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
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

 // Card-style container for all skills
const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

// Each category block
const SkillsCategory = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillsCategoryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.5px;
`;

const CategoryIcon = styled.span`
  font-size: 1.25rem;
  display: inline-flex;
  align-items: center;
`;

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
     <Headline>Software Engineer | Web & Mobile Development</Headline>
    </ProfileHeader>

    <Section variants={sectionVariants}>
     <SectionTitle>
      <TitleIcon icon={faUser} /> About
     </SectionTitle>
     <Paragraph>
      Software Engineer with over 5 years of experience in designing and building scalable back-end systems and dynamic front-end solutions. Skilled in optimizing system performance, improving user interfaces, and streamlining processes through clean and maintainable code. Experienced in working within agile environments and collaborating effectively with cross-functional teams to deliver solutions that meet both technical and business objectives. Committed to continuous learning and applying best practices to develop reliable, efficient, and scalable software solutions.
     </Paragraph>
    </Section>

    <Section variants={sectionVariants}>
     <SectionTitle>
      <TitleIcon icon={faTools} /> Skills
     </SectionTitle>
     <SkillsSection>
      <SkillsCategory>
        <SkillsCategoryTitle><TitleIcon icon={faCode} /> Programming Language</SkillsCategoryTitle>
        <SkillsList>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.javascript }}><FaJs /></SkillIcon> JavaScript
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.php }}><SiPhp /></SkillIcon> PHP
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.python }}><FaPython /></SkillIcon> Python
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.java }}><FaJava /></SkillIcon> Java
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                alt="C#"
                style={{ height: '1.2rem', filter: techColors.csharp ? `drop-shadow(0 0 2px ${techColors.csharp})` : undefined }}
              />
            </SkillIcon>
            C#
          </SkillItemWrapper>
        </SkillsList>
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle><CategoryIcon>🖥️</CategoryIcon> Backend</SkillsCategoryTitle>
        <SkillsList>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors['node.js'] }}><FaNodeJs /></SkillIcon> Node.js
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon>
              <img
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                alt="Express.js"
                style={{ height: '1.2rem', filter: techColors.expressjs ? `drop-shadow(0 0 2px ${techColors.expressjs})` : undefined }}
              />
            </SkillIcon>
            Express.js
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.adonisjs }}><SiAdonisjs /></SkillIcon> Adonis.js
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.nestjs }}><SiNestjs /></SkillIcon> Nest.js
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.dotnet }}><SiDotnet /></SkillIcon> .NET
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.laravel }}><SiLaravel /></SkillIcon> Laravel
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.codeigniter }}><SiCodeigniter /></SkillIcon> CodeIgniter
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.symfony }}><SiSymfony /></SkillIcon> Symfony
          </SkillItemWrapper>
        </SkillsList>
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle><CategoryIcon>🎨</CategoryIcon> Frontend</SkillsCategoryTitle>
        <SkillsList>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.nextjs }}><SiNextdotjs /></SkillIcon> Next.js
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.react }}><FaReact /></SkillIcon> React.js
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.angular }}><FaAngular /></SkillIcon> Angular.js
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.vuejs }}><FaVuejs /></SkillIcon> Vue.js
          </SkillItemWrapper>
        </SkillsList>
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle><CategoryIcon>🗄️</CategoryIcon> Database</SkillsCategoryTitle>
        <SkillsList>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.mysql }}><SiMysql /></SkillIcon> MySQL
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.postgresql }}><SiPostgresql /></SkillIcon> PostgreSQL
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon>
              <img
                src="/sqlserver.svg"
                alt="SQL Server"
                style={{ height: '1.2rem', filter: techColors.mssql ? `drop-shadow(0 0 2px ${techColors.mssql})` : undefined }}
              />
            </SkillIcon>
            MSSQL
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.mongodb }}><SiMongodb /></SkillIcon> MongoDB
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.redis }}><SiRedis /></SkillIcon> Redis
          </SkillItemWrapper>
        </SkillsList>
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle><CategoryIcon>🧪</CategoryIcon> Testing</SkillsCategoryTitle>
        <SkillsList>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon>
              <img
                src="/jest.png"
                alt="Jest"
                style={{ height: '1.2rem', verticalAlign: 'middle', borderRadius: '3px' }}
              />
            </SkillIcon>
            Jest
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon><img src="https://avatars.githubusercontent.com/u/8770009?s=200&v=4" alt="Mocha" style={{ height: '1.2rem', verticalAlign: 'middle', borderRadius: '3px' }} /></SkillIcon> Mocha
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon><img src="https://avatars.githubusercontent.com/u/1515293?s=200&v=4" alt="Chai" style={{ height: '1.2rem', verticalAlign: 'middle', borderRadius: '3px' }} /></SkillIcon> Chai
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon><img src="https://upload.wikimedia.org/wikipedia/en/2/22/Logo_jasmine.svg" alt="Jasmine" style={{ height: '1.2rem' }} /></SkillIcon> Jasmine
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon><img src="https://karma-runner.github.io/assets/img/banner.png" alt="Karma" style={{ height: '1.2rem' }} /></SkillIcon> Karma
          </SkillItemWrapper>
        </SkillsList>
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle><CategoryIcon>📈</CategoryIcon> Observability</SkillsCategoryTitle>
        <SkillsList>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.elastic }}><SiElastic /></SkillIcon> Elastic APM
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.cloudwatch }}><FaAws /></SkillIcon> AWS CloudWatch
          </SkillItemWrapper>
        </SkillsList>
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle><CategoryIcon>🔖</CategoryIcon> Version Control</SkillsCategoryTitle>
        <SkillsList>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.git }}><FaGitAlt /></SkillIcon> GIT
          </SkillItemWrapper>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon>
              <img
                src="/cvs.png"
                alt="CVS"
                style={{ height: '1.2rem', filter: techColors.git ? `drop-shadow(0 0 2px ${techColors.git})` : undefined }}
              />
            </SkillIcon>
            CVS
          </SkillItemWrapper>
        </SkillsList>
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle><CategoryIcon>🐳</CategoryIcon> Containerization</SkillsCategoryTitle>
        <SkillsList>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.docker }}><FaDocker /></SkillIcon> Docker
          </SkillItemWrapper>
        </SkillsList>
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle><CategoryIcon>☁️</CategoryIcon> Cloud</SkillsCategoryTitle>
        <SkillsList>
          <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
            <SkillIcon style={{ color: techColors.aws }}><FaAws /></SkillIcon> AWS
          </SkillItemWrapper>
        </SkillsList>
      </SkillsCategory>
     </SkillsSection>
    </Section>

    <Section variants={sectionVariants}>
     <SectionTitle>
      <TitleIcon icon={faBriefcase} /> Experience
     </SectionTitle>
     <ExperienceList>
      <ExperienceItem>
       <ExperienceTitle>Software Engineer</ExperienceTitle>
       <ExperienceOffice>PHINCON . Full-time</ExperienceOffice>
       <ExperienceSubtitle>Jul 2025 - present</ExperienceSubtitle>
       <ExperienceSubtitle>Tangerang, Banten, Indonesia . Hybrid</ExperienceSubtitle>
       </ExperienceItem>
       <hr />
      <ExperienceItem>
       <ExperienceTitle>Full Stack Developer</ExperienceTitle>
       <ExperienceOffice>rSchoolToday . Full-time</ExperienceOffice>
       <ExperienceSubtitle>Sep 2021 - Feb 2025</ExperienceSubtitle>
       <ExperienceSubtitle>Indonesia . Remote</ExperienceSubtitle>
       </ExperienceItem>
       <hr />
       <ExperienceItem>
        <ExperienceTitle>Full Stack Developer</ExperienceTitle>
        <ExperienceOffice>PPTIK STIKI Malang . Internship</ExperienceOffice>
        <ExperienceSubtitle>Apr 2020 - Sep 2021</ExperienceSubtitle>
        <ExperienceSubtitle>Malang, East Java, Indonesia . On-site</ExperienceSubtitle>
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
    </AboutContainer>
   );
 };

 export default About;