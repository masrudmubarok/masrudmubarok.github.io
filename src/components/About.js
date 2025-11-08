import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBriefcase,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

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
   padding-left: 0; 
   margin-left: 1rem;
   list-style-position: outside;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

const ExperienceNote = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: -0.5rem;
  margin-top: 1.5rem;

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

  const yearText = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
  const monthText = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

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
    note: 'Assigned to MySiloam projects',
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
    note: '',
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
    note: '',
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
                  {exp.note && exp.note.trim() !== '' && (
                    <ExperienceNote>{exp.note}</ExperienceNote>
                  )}
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
   </AboutContainer>
  );
 };

 export default About;