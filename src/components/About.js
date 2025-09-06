import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBriefcase,
  faGraduationCap,
  faTools
} from '@fortawesome/free-solid-svg-icons';
 import {
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaVuejs,
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiPhp, SiCodeigniter, SiLaravel, SiSymfony, SiRedis, SiNestjs, SiNextdotjs, SiElastic, SiDotnet, SiAdonisjs, SiPostgresql } from 'react-icons/si';
import { FaAngular, FaAws } from 'react-icons/fa';

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

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: -0.2rem;
  }
 `;

 const Headline = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
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
  text-align: justify;

  & > ul {
   padding-left: 0; /* Hapus padding pada list container */
   margin-left: 1rem; /* Berikan margin kiri pada list container */
   list-style-position: outside;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
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
  font-weight: bold;
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
    background: transparent;
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.12);
    transform: translateY(-2px) scale(1.07);
    filter: brightness(1.08);
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

 const ExperienceItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-top: 20px;
  gap: 16px;
`;

const ExperienceTitle = styled(motion.h3)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: -0.3rem;
  margin-top: -0.02rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ExperienceSubtitle = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: -0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ExperienceOffice = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: -0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const EducationPlace = styled(motion.h3)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: -0.5rem;
  margin-top: -0.02rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const EducationTitle = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: -0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const EducationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EducationItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-top: 20px;
  gap: 16px;
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
  gap: 1.2rem;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 0.2rem;
  }
`;

// Each category block
const SkillsCategory = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 14px;
  background: transparent;
  box-shadow: none;
  padding: 1.2rem;
  @media (max-width: 900px) {
    padding: 0.7rem;
  }
`;

const SkillsCategoryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CategoryHr = styled.hr`
  border: none;
  border-bottom: 2.5px solid ${({ theme }) => theme.border};
  margin: 0.2rem 0 1.1rem 0;
`;

const LogoImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === 'present' ? new Date() : new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Menangani kasus '1 year 0 months'
  const yearText = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
  const monthText = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

  // Menggabungkan string, memastikan tidak ada spasi berlebih
  if (yearText && monthText) {
    return `${yearText} ${monthText}`;
  } else if (yearText) {
    return yearText;
  } else if (monthText) {
    return monthText;
  }
  
  return '';
};

const experienceData = [
  {
    title: 'Software Engineer',
    office: 'PHINCON',
    type: 'Full-time',
    startDate: '2025-07-01',
    endDate: 'present',
    location: 'Tangerang, Banten, Indonesia',
    workMode: 'Hybrid',
    companyLogo: '/phincon.jpeg',
  },
  {
    title: 'Full Stack Developer',
    office: 'rSchoolToday',
    type: 'Full-time',
    startDate: '2021-09-01',
    endDate: '2025-02-28',
    location: 'Minnesota, United States',
    workMode: 'Remote',
    companyLogo: '/rschooltoday.jpeg',
  },
  {
    title: 'Full Stack Developer',
    office: 'PPTIK STIKI Malang',
    type: 'Internship',
    startDate: '2020-04-01',
    endDate: '2021-09-30',
    location: 'Malang, East Java, Indonesia',
    workMode: 'On-site',
    companyLogo: '/pptik.jpeg',
  },
];

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
     <Headline>Software Engineer | Fullstack Development</Headline>
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
        <TitleIcon icon={faBriefcase} /> Experience
      </SectionTitle>
      <ExperienceList>
        {experienceData.map((exp, index) => {
          const duration = calculateDuration(exp.startDate, exp.endDate);
          const endDateText = exp.endDate === 'present' ? 'present' : new Date(exp.endDate).toLocaleString('id-ID', { month: 'short', year: 'numeric' });
          const startDateText = new Date(exp.startDate).toLocaleString('id-ID', { month: 'short', year: 'numeric' });

          return (
            <React.Fragment key={index}>
              <ExperienceItem>
                <LogoWrapper>
                  <LogoImage src={exp.companyLogo} alt={`${exp.office} logo`} />
                </LogoWrapper>
                <ContentWrapper>
                  <ExperienceTitle>{exp.title}</ExperienceTitle>
                  <ExperienceOffice>{exp.office} . {exp.type}</ExperienceOffice>
                  <ExperienceSubtitle>{startDateText} - {endDateText} . {duration}</ExperienceSubtitle>
                  <ExperienceSubtitle>{exp.location} . {exp.workMode}</ExperienceSubtitle>
                </ContentWrapper>
              </ExperienceItem>
              {index < experienceData.length - 1 && <hr />}
            </React.Fragment>
          );
        })}
      </ExperienceList>
     </Section>

     <Section variants={sectionVariants}>
      <SectionTitle>
       <TitleIcon icon={faGraduationCap} /> Education
      </SectionTitle>
      <EducationList>
       <EducationItem>
        <LogoWrapper>
          <LogoImage src='/stiki.jpeg' alt={`stiki logo`} />
        </LogoWrapper>
        <ContentWrapper>
          <EducationPlace>STIKI Malang</EducationPlace>
          <EducationTitle>Bachelor of Informatics</EducationTitle>
          <ExperienceSubtitle>2017 - 2021</ExperienceSubtitle>
        </ContentWrapper>
       </EducationItem>
      </EducationList>
    </Section>

    <Section variants={sectionVariants}>
     <SectionTitle>
      <TitleIcon icon={faTools} /> Skills
     </SectionTitle>
     <SkillsSection>
      {/* Row 1: Programming Language & Database */}
      <SkillsRow>
        <SkillsCategory style={{ flex: 1 }}>
    <SkillsCategoryTitle>Programming Language</SkillsCategoryTitle>
    <CategoryHr />
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
        <SkillsCategory style={{ flex: 1 }}>
    <SkillsCategoryTitle>Database</SkillsCategoryTitle>
    <CategoryHr />
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
      </SkillsRow>

      {/* Row 2: Backend & Frontend */}
      <SkillsRow>
        <SkillsCategory style={{ flex: 1 }}>
    <SkillsCategoryTitle>Backend</SkillsCategoryTitle>
    <CategoryHr />
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
        <SkillsCategory style={{ flex: 1 }}>
    <SkillsCategoryTitle>Frontend</SkillsCategoryTitle>
    <CategoryHr />
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
      </SkillsRow>

      {/* Row 3: Testing & Observability */}
      <SkillsRow>
        <SkillsCategory style={{ flex: 1 }}>
    <SkillsCategoryTitle>Testing</SkillsCategoryTitle>
    <CategoryHr />
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
              <SkillIcon><img src="/karma.png" alt="Karma" style={{ height: '1.2rem' }} /></SkillIcon> Karma
            </SkillItemWrapper>
          </SkillsList>
        </SkillsCategory>
        <SkillsCategory style={{ flex: 1 }}>
    <SkillsCategoryTitle>Observability</SkillsCategoryTitle>
    <CategoryHr />
          <SkillsList>
            <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
              <SkillIcon style={{ color: techColors.elastic }}><SiElastic /></SkillIcon> Elastic APM
            </SkillItemWrapper>
            <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
              <SkillIcon style={{ color: techColors.cloudwatch }}><FaAws /></SkillIcon> AWS CloudWatch
            </SkillItemWrapper>
          </SkillsList>
        </SkillsCategory>
      </SkillsRow>

      {/* Row 4: Version Control & Containerization */}
      <SkillsRow>
        <SkillsCategory style={{ flex: 1 }}>
    <SkillsCategoryTitle>Version Control</SkillsCategoryTitle>
    <CategoryHr />
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
        <SkillsCategory style={{ flex: 1 }}>
    <SkillsCategoryTitle>Containerization</SkillsCategoryTitle>
    <CategoryHr />
          <SkillsList>
            <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
              <SkillIcon style={{ color: techColors.docker }}><FaDocker /></SkillIcon> Docker
            </SkillItemWrapper>
          </SkillsList>
        </SkillsCategory>
      </SkillsRow>

      {/* Row 5: Cloud */}
      <SkillsRow>
        <SkillsCategory style={{ flex: 0.93 }}>
          <SkillsCategoryTitle>Cloud</SkillsCategoryTitle>
          <CategoryHr />
          <SkillsList>
            <SkillItemWrapper variants={skillItemVariants} whileHover="hover">
              <SkillIcon style={{ color: techColors.aws }}><FaAws /></SkillIcon> AWS
            </SkillItemWrapper>
          </SkillsList>
        </SkillsCategory>
        <div style={{ flex: 1, background: 'transparent', border: 'none' }} />
      </SkillsRow>
     </SkillsSection>
    </Section>
    </AboutContainer>
   );
 };

 export default About;