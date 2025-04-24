import React, { useState } from 'react';
 import styled from 'styled-components';
 import { motion, AnimatePresence } from 'framer-motion';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
 import { FaGithub, FaReact, FaNodeJs, FaVuejs, FaJava } from 'react-icons/fa';
 import { SiMysql, SiMongodb, SiTailwindcss, SiCodeigniter, SiLaravel, SiExpress, SiRedux, SiRedis } from 'react-icons/si';

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
  padding: 1rem 1.5rem 3rem 1.5rem; /* Added bottom padding */

  @media (min-width: 768px) {
   padding: 2rem 4rem 4rem 4rem; /* Added bottom padding */
  }
 `;

 const ProjectsIntro = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};

  h2 {
   font-size: 1.7rem;
   margin-bottom: 0.5rem;
  }

  p {
   font-size: 1rem;
   color: ${({ theme }) => theme.secondaryText};
   max-width: 600px;
   margin: 0 auto;
  }

  @media (min-width: 768px) {
   margin-bottom: 4rem;

   h2 {
    font-size: 2rem;
   }

   p {
    font-size: 1.2rem;
   }
  }
 `;

 const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  text-align: center;
  display: none; /* Hide the redundant section title */

  @media (min-width: 768px) {
   font-size: 1.7rem;
   margin-bottom: 3rem;
  }
 `;

 const PortfolioList = styled(motion.ul)`
  list-style: none;
  padding: 0;
 `;

 const ProjectItemBase = styled.li`
  background-color: ${({ theme }) => theme.body === '#FFF' ? '#f9f9f9' : '#444'};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
  max-height: 450px;
  transition: box-shadow 0.3s ease;

  &:hover {
   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
   flex-direction: ${({ index }) => (index % 2 === 0 ? 'row' : 'row-reverse')};
   align-items: stretch;
   margin-bottom: 3rem;
  }
 `;

 const ProjectItem = styled(motion(ProjectItemBase)).attrs({
  whileHover: { scale: 1.03, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)" },
  transition: { duration: 0.2 },
 })``;

 const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  margin-bottom: -0.1rem;
  border-radius: 8px 8px 0 0;

  @media (min-width: 768px) {
   width: 650px;
   height: 120%;
   max-height: 350px;
   flex-basis: 200px;
   flex-shrink: 0;
   margin: ${({ index }) => (index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem')};
   border-radius: 8px 0 0 8px;
  }
 `;

 const ProjectInfo = styled(motion.div)`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 768px) {
   max-width: 400px;
  }
 `;

 const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
   font-size: 1.5rem;
   margin-bottom: 0.75rem;
  }
 `;

 const ProjectShortDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7; /* Maximum 7 lines */
  -webkit-box-orient: vertical;
  position: relative;

  &::after {
   content: ...;
   position: absolute;
   bottom: 0;
   left: 0;
  }

  @media (min-width: 768px) {
   font-size: 1rem;
   margin-bottom: 1.25rem;
  }
 `;

 const TechStackList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 1.5rem; /* Ukuran ikon */
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
   gap: 1rem;
   font-size: 1.75rem; /* Ukuran ikon lebih besar di desktop */
   margin-bottom: 1.5rem;
  }

  /* Mobile-specific styling for icon list */
  @media (max-width: 600px) {
   justify-content: center; /* Center icons on smaller screens */
   gap: 1rem; /* Lebih banyak ruang antar ikon di mobile */
   margin-bottom: 1.5rem;
  }
 `;

 const TechStackItem = styled(motion.li)`
  display: flex;
 `;

 const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
   gap: 1.5rem;
   margin-top: 0;
  }

  /* Mobile-specific styling for actions */
  @media (max-width: 600px) {
   flex-direction: column;
   align-items: stretch;
  }
 `;

 const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
   background-color: ${({ theme }) => darken(0.1, theme.primary)};
  }

  @media (min-width: 768px) {
   gap: 0.5rem;
   padding: 0.7rem 1.5rem;
   font-size: 1.1rem;
  }

  /* Mobile-specific styling for buttons */
  @media (max-width: 600px) {
   width: 100%;
  }
 `;

 const ProjectModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
 `;

 const ProjectModal = styled(motion.div)`
  background-color: ${({ theme }) => theme.body};
  border-radius: 12px;
  padding: 2rem;
  max-width: 90%;
  max-height: 85%;
  overflow-y: auto;
  position: relative;

  @media (min-width: 768px) {
   padding: 3rem;
   max-width: 75%;
   max-height: 80%;
  }
 `;

 const ModalImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
 `;

 const ModalTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
   font-size: 1.7rem;
   margin-bottom: 1.5rem;
  }
 `;

 const ModalDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
   font-size: 1.2rem;
   margin-bottom: 2rem;
  }
 `;

 const ModalTechStackList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 2rem; /* Ukuran ikon modal */
  color: ${({ theme }) => theme.secondary};
  justify-content: flex-start; /* Align icons to the start on mobile */
  align-items: center; /* Vertically align with tech stack */

  @media (min-width: 768px) {
   gap: 1.25rem;
   font-size: 2.25rem; /* Ukuran ikon modal di desktop */
   justify-content: flex-start;
   align-items: center; /* Vertically align with tech stack */
  }

  /* Mobile specific for modal icons */
  @media (max-width: 600px) {
   justify-content: center; /* Center icons in modal on mobile */
   gap: 1.5rem;
   margin-bottom: 1rem; /* Add some margin on mobile */
  }
 `;

 const ModalTechStackItem = styled(motion.li)`
  display: flex;
 `;

 const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end; /* Align items to the right */
  align-items: center; /* Vertically align with tech stack */
  margin-top: 1rem;

  @media (min-width: 768px) {
   margin-top: 0;
  }

  /* Mobile specific for modal actions */
  @media (max-width: 600px) {
   flex-direction: column;
   align-items: center; /* Center items horizontally */
  }
 `;

 const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
   color: ${({ theme }) => theme.secondary};
  }

  @media (min-width: 768px) {
   top: 1.5rem;
   right: 1.5rem;
   font-size: 1.8rem;
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
  'Redis':{ icon: SiRedis, color: '#DC382D' },
 };

 const getTechIcon = (tech) => {
  return techIconMap[tech] || null;
 };

 const initialProjects = [
  {
   id: 1,
   title: 'SIMKEU PPTIK',
   shortDescription: 'A short catchy description of the web application. This description will be limited to a maximum of seven lines before being truncated with ...',
   description: 'A more detailed explanation of the Awesome Web App. This could include the problem it solves, the main features, and the technologies used. You can also add multiple paragraphs here for a comprehensive overview.',
   imageUrl: '/project-example.png',
   demoUrl: 'https://demo.awesome-webapp.com',
   githubUrl: 'https://github.com/user/awesome-webapp',
   techStack: ['Laravel', 'Tailwind CSS', 'MySQL'],
   type: 'web',
   fullImage: '/assets/project1-full.png',
  },
  {
   id: 2,
   title: 'PPTIK Academy',
   shortDescription: 'An exciting mobile game for adventure lovers. This description will be limited to a maximum of seven lines before being truncated with ....',
   description: 'Dive into the world of Mobile Adventure Game! Explore vast landscapes, solve challenging puzzles, and embark on an epic quest. Built with Unity and C#.',
   imageUrl: '/web-porto.jpg',
   demoUrl: '#',
   githubUrl: 'https://github.com/user/mobile-game',
   techStack: ['Java', 'CodeIgniter', 'MySQL'],
   type: 'mobile',
   fullImage: '/assets/project2-full.png',
  },
  {
   id: 3,
   title: 'Khelsya Store',
   shortDescription: 'A handy tool to boost your productivity on desktop. This description will be limited to a maximum of seven lines before being truncated with ...',
   description: 'Desktop Utility Tool is designed to streamline your workflow. Features include file management, task scheduling, and more. Developed using Java Swing.',
   imageUrl: '/web-porto.jpg',
   demoUrl: '#',
   githubUrl: 'https://github.com/user/desktop-tool',
   techStack: ['Node.js', 'React.js', 'MySQL', 'Node.js', 'Redis'],
   type: 'desktop',
   fullImage: '/assets/project3-full.png',
  },
 ];

 const Portfolio = () => {
  const [visibleProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
   setSelectedProject(project);
   document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
   setSelectedProject(null);
   document.body.style.overflow = 'unset';
  };

  const itemVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 10 } },
  };

  return (
   <PortfolioContainer
    id="portfolio"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
   >
    <ProjectsIntro>
     <h2>Projects</h2>
     <p>Explore My Projects. I invite you to look at some of the projects I've been developing and completing.</p>
    </ProjectsIntro>

    <SectionTitle>Projects</SectionTitle>

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
        onClick={() => openModal(project)}
        index={index}
       >
        <ProjectImage src={project.imageUrl} alt={project.title} index={index} />
        <ProjectInfo>
         <ProjectTitle>{project.title}</ProjectTitle>
         <ProjectShortDescription>{project.shortDescription}</ProjectShortDescription>
         <TechStackList
          as={motion.ul}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2 }}
         >
          {project.techStack.map((tech, i) => {
           const techInfo = getTechIcon(tech);
           return techInfo ? (
            <TechStackItem as={motion.li} key={i} style={{ color: techInfo.color }} whileHover={{ scale: 1.2 }}>
             {typeof techInfo.icon === 'function' ? <techInfo.icon /> : <techInfo.icon />}
            </TechStackItem>
           ) : (
            <TechStackItem key={i}>{tech}</TechStackItem>
           );
          })}
         </TechStackList>
         <ProjectActions>
          {/* Actions remain the same */}
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
         <ModalImage src={selectedProject.imageUrl} alt={selectedProject.title} />
        )}
        <ModalTitle>{selectedProject.title}</ModalTitle>
        <ModalDescription>{selectedProject.description}</ModalDescription>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
         <ModalActions>
          {selectedProject.demoUrl && (
           <ActionButton href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
           </ActionButton>
          )}
          {selectedProject.githubUrl && (
           <ActionButton href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={FaGithub} /> GitHub
           </ActionButton>
          )}
         </ModalActions>
        </div>
       </ProjectModal>
      </ProjectModalOverlay>
     )}
    </AnimatePresence>
   </PortfolioContainer>
  );
 };

 export default Portfolio;