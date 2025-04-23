import React, { useState } from 'react';
 import styled from 'styled-components';
 import { motion, AnimatePresence } from 'framer-motion';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
 import { FaGithub } from 'react-icons/fa';

 // Utility function (pastikan ini tersedia)
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
  padding: 1rem 1.5rem 1rem 1.5rem; /* Padding lebih besar untuk mobile */

  @media (min-width: 768px) {
   padding: 2rem 4rem 2rem 4rem; /* Padding lebih besar untuk desktop */
  }
 `;

 const SectionTitle = styled.h2`
  font-size: 1.5rem; /* Ukuran font lebih besar untuk mobile */
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
  text-align: center;

  @media (min-width: 768px) {
   font-size: 2rem; /* Ukuran font lebih besar untuk desktop */
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
  max-height: 400px; /* Contoh tinggi maksimal card */
  transition: box-shadow 0.3s ease; /* Transisi untuk box shadow default */

  &:hover {
   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Efek bayangan saat hover (fallback) */
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
  width: 100%; /* Mengisi lebar card di mobile */
  height: auto;
  display: block;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border-radius: 8px 8px 0 0;

  @media (min-width: 768px) {
   width: 650px;
   height: 120%; /* Mengisi tinggi card di desktop */
   max-height: 350px; /* Contoh tinggi maksimal gambar yang sedikit lebih besar */
   flex-basis: 200px; /* Lebar dasar gambar di desktop */
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
 `;

 const ProjectTitle = styled.h3`
  font-size: 1.2rem; /* Ukuran font lebih besar untuk mobile */
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.8rem;

  @media (min-width: 768px) {
   font-size: 1.5rem; /* Ukuran font lebih besar untuk desktop */
   margin-bottom: 1rem;
  }
 `;

 const ProjectShortDescription = styled.p`
  font-size: 1rem; /* Ukuran font lebih besar untuk mobile */
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.2rem;

  @media (min-width: 768px) {
   font-size: 1.1rem; /* Ukuran font lebih besar untuk desktop */
   margin-bottom: 1.5rem;
  }
 `;

 const TechStackList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap; /* Biarkan tech stack wrap ke baris baru */
  gap: 0.5rem;
  font-size: 0.9rem; /* Ukuran font lebih besar untuk mobile */
  color: ${({ theme }) => theme.secondary};

  @media (min-width: 768px) {
   gap: 0.75rem; /* Gap lebih besar untuk desktop */
   font-size: 1rem; /* Ukuran font lebih besar untuk desktop */
   margin-bottom: 1.5rem;
  }
 `;

 const TechStackItem = styled.li`
  background-color: ${({ theme }) => theme.body === '#FFF' ? '#eee' : '#555'};
  padding: 0.4rem 0.8rem; /* Padding lebih besar untuk mobile */
  border-radius: 6px;
  font-size: 0.8rem; /* Ukuran font lebih besar untuk mobile */

  @media (min-width: 768px) {
   padding: 0.5rem 1rem; /* Padding lebih besar untuk desktop */
   font-size: 0.9rem; /* Ukuran font lebih besar untuk desktop */
  }
 `;

 const ProjectActions = styled.div`
  display: flex;
  gap: 1rem; /* Gap lebih besar untuk mobile */
  margin-top: 1rem; /* Margin atas untuk mobile */

  @media (min-width: 768px) {
   gap: 1.5rem; /* Gap lebih besar untuk desktop */
   margin-top: 0;
  }
 `;

 const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem; /* Gap lebih besar untuk mobile */
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.6rem 1.2rem; /* Padding lebih besar untuk mobile */
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem; /* Ukuran font lebih besar untuk mobile */
  transition: background-color 0.3s ease;

  &:hover {
   background-color: ${({ theme }) => darken(0.1, theme.primary)};
  }

  @media (min-width: 768px) {
   gap: 0.5rem; /* Gap lebih besar untuk desktop */
   padding: 0.7rem 1.5rem; /* Padding lebih besar untuk desktop */
   font-size: 1.1rem; /* Ukuran font lebih besar untuk desktop */
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
  padding: 2rem; /* Padding lebih besar untuk mobile */
  max-width: 90%; /* Lebar maksimal lebih besar untuk mobile */
  max-height: 85%; /* Tinggi maksimal lebih besar untuk mobile */
  overflow-y: auto;
  position: relative;

  @media (min-width: 768px) {
   padding: 3rem; /* Padding lebih besar untuk desktop */
   max-width: 75%; /* Lebar maksimal lebih besar untuk desktop */
   max-height: 80%; /* Tinggi maksimal lebih besar untuk desktop */
  }
 `;

 const ModalImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem; /* Margin bawah lebih besar untuk mobile */
  border-radius: 8px;
 `;

 const ModalTitle = styled.h3`
  font-size: 1.8rem; /* Ukuran font lebih besar untuk mobile */
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
   font-size: 2.2rem; /* Ukuran font lebih besar untuk desktop */
   margin-bottom: 1.5rem;
  }
 `;

 const ModalDescription = styled.p`
  font-size: 1.1rem; /* Ukuran font lebih besar untuk mobile */
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
   font-size: 1.2rem; /* Ukuran font lebih besar untuk desktop */
   margin-bottom: 2rem;
  }
 `;

 const ModalTechStackList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem; /* Margin bawah lebih besar untuk mobile */
  display: flex;
  flex-wrap: wrap; /* Biarkan wrap untuk mobile */
  gap: 0.75rem;
  font-size: 1rem; /* Ukuran font lebih besar untuk mobile */
  color: ${({ theme }) => theme.secondary};

  @media (min-width: 768px) {
   gap: 1rem; /* Gap lebih besar untuk desktop */
   font-size: 1.1rem; /* Ukuran font lebih besar untuk desktop */
   margin-bottom: 2rem;
  }
 `;

 const ModalTechStackItem = styled.li`
  background-color: ${({ theme }) => theme.body === '#FFF' ? '#eee' : '#555'};
  padding: 0.5rem 1rem; /* Padding lebih besar untuk mobile */
  border-radius: 6px;
  font-size: 0.9rem; /* Ukuran font lebih besar untuk mobile */

  @media (min-width: 768px) {
   padding: 0.6rem 1.2rem; /* Padding lebih besar untuk desktop */
   font-size: 1rem; /* Ukuran font lebih besar untuk desktop */
  }
 `;

 const ModalActions = styled.div`
  display: flex;
  gap: 1rem; /* Gap lebih besar untuk mobile */

  @media (min-width: 768px) {
   gap: 1.5rem; /* Gap lebih besar untuk desktop */
  }
 `;

 const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem; /* Posisi lebih jauh dari atas untuk mobile */
  right: 1rem; /* Posisi lebih jauh dari kanan untuk mobile */
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem; /* Ukuran font lebih besar untuk mobile */
  cursor: pointer;

  &:hover {
   color: ${({ theme }) => theme.secondary};
  }

  @media (min-width: 768px) {
   top: 1.5rem; /* Posisi normal untuk desktop */
   right: 1.5rem; /* Posisi normal untuk desktop */
   font-size: 1.8rem; /* Ukuran font normal untuk desktop */
  }
 `;

 const initialProjects = [
  {
   id: 1,
   title: 'SIMKEU PPTIK',
   shortDescription: 'A short catchy description of the web application.',
   description: 'A more detailed explanation of the Awesome Web App. This could include the problem it solves, the main features, and the technologies used. You can also add multiple paragraphs here for a comprehensive overview.',
   imageUrl: '/project-example.png',
   demoUrl: 'https://demo.awesome-webapp.com',
   githubUrl: 'https://github.com/user/awesome-webapp',
   techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
   type: 'web',
   fullImage: '/assets/project1-full.png',
  },
  {
   id: 2,
   title: 'PPTIK Academy',
   shortDescription: 'An exciting mobile game for adventure lovers.',
   description: 'Dive into the world of Mobile Adventure Game! Explore vast landscapes, solve challenging puzzles, and embark on an epic quest. Built with Unity and C#.',
   imageUrl: '/web-porto.jpg',
   demoUrl: '#',
   githubUrl: 'https://github.com/user/mobile-game',
   techStack: ['Unity', 'C#'],
   type: 'mobile',
   fullImage: '/assets/project2-full.png',
  },
  {
   id: 3,
   title: 'Desktop Utility Tool',
   shortDescription: 'A handy tool to boost your productivity on desktop.',
   description: 'Desktop Utility Tool is designed to streamline your workflow. Features include file management, task scheduling, and more. Developed using Java Swing.',
   imageUrl: '/web-porto.jpg',
   demoUrl: '#',
   githubUrl: 'https://github.com/user/desktop-tool',
   techStack: ['Java', 'Swing'],
   type: 'desktop',
   fullImage: '/assets/project3-full.png',
  },
  {
   id: 4,
   title: 'Another Web Project',
   shortDescription: 'A brief overview of this other web development project.',
   description: 'More details about Another Web Project. Discuss its purpose, features, and the technologies that power it.',
   imageUrl: '/project-example.png',
   demoUrl: 'https://another-web-project.com',
   githubUrl: 'https://github.com/user/another-web',
   techStack: ['Angular', 'Firebase'],
   type: 'web',
   fullImage: '/assets/project4-full.png',
  },
  {
   id: 5,
   title: 'Cool Mobile App',
   shortDescription: 'A short description of this cool mobile application.',
   description: 'Learn more about the Cool Mobile App. What problems does it solve? What are its key functionalities? Built with React Native.',
   imageUrl: '/project-example.png',
   demoUrl: '#',
   githubUrl: 'https://github.com/user/cool-mobile',
   techStack: ['React Native', 'Redux'],
   type: 'mobile',
   fullImage: '/assets/project5-full.png',
  },
 ];

 const Portfolio = () => {
  const [visibleProjects] = useState(initialProjects); // Tampilkan semua proyek
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
   setSelectedProject(project);
   document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
   setSelectedProject(null);
   document.body.style.overflow = 'unset';
  };

  return (
   <PortfolioContainer
    id="portfolio"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
   >
    <SectionTitle>Project Showcase</SectionTitle>

    <PortfolioList>
     <AnimatePresence>
      {visibleProjects.map((project, index) => (
       <ProjectItem // Menggunakan ProjectItem (yang sudah di-motion)
        key={project.id}
        layout
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        transition={{ duration: 0.3 }}
        onClick={() => openModal(project)}
        index={index}
       >
        <ProjectImage src={project.imageUrl} alt={project.title} index={index} />
        <ProjectInfo>
         <ProjectTitle>{project.title}</ProjectTitle>
         <ProjectShortDescription>{project.shortDescription}</ProjectShortDescription>
         <TechStackList>
          {project.techStack.map((tech, i) => (
           <TechStackItem key={i}>{tech}</TechStackItem>
          ))}
         </TechStackList>
         <ProjectActions>
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
        <ModalTechStackList>
         {selectedProject.techStack.map((tech, i) => (
          <ModalTechStackItem key={i}>{tech}</ModalTechStackItem>
         ))}
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
       </ProjectModal>
      </ProjectModalOverlay>
     )}
    </AnimatePresence>
   </PortfolioContainer>
  );
 };

 export default Portfolio;