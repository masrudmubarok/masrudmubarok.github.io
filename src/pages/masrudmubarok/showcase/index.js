import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import styles from "./index.module.css";

const techIcons = {
  "HTML": <FaHtml5 className={styles.icon} />, 
  "CSS": <FaCss3Alt className={styles.icon} />, 
  "JS": <FaJs className={styles.icon} />, 
  "React": <FaReact className={styles.icon} />, 
  "Node.js": <FaNodeJs className={styles.icon} />, 
  "Express": <FaNodeJs className={styles.icon} />, 
  "Socket.io": <FaNodeJs className={styles.icon} />, 
};

const portfolioItems = [
  { id: 1, category: "Web", title: "Landing Page", tech: ["HTML", "CSS", "JS"], image: "/img/project.png", site: "#", code: "#" },
  { id: 2, category: "Web", title: "Portfolio Website", tech: ["React", "CSS"], image: "/img/project.png", site: "#", code: "#" },
  { id: 3, category: "Web", title: "Dashboard Admin", tech: ["React", "Node.js"], image: "/img/project.png", site: "#", code: "#" },
  { id: 4, category: "Mobile", title: "Mobile App", tech: ["React Native", "Node.js"], image: "/img/project.png", site: "#", code: "#" },
  { id: 5, category: "Desktop", title: "Desktop Application", tech: ["Electron", "Node.js"], image: "/img/project.png", site: "#", code: "#" },
  { id: 6, category: "Desktop", title: "Text Editor", tech: ["Electron", "React"], image: "/img/project.png", site: "#", code: "#" },
];

const categories = ["All", "Web", "Mobile", "Desktop"];

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className={styles.fixedContainer}>
      <div className={styles.portfolioContainer}>
        {/* Title Section */}
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut" }} 
          className={styles.titleSection}
        >
          <h2 className={styles.title}>My Projects</h2>
        </motion.div>

        {/* Filter Wrapper */}
        <div className={styles.filterWrapper}>
          <div className={styles.buttonsContainerFixed}>
            {categories.map(category => (
              <motion.button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ""}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.1 }} // Slight zoom effect on hover
                transition={{ duration: 0.2 }}
                initial={{ scale: 0 }} // Start scale 0
                animate={{ scale: 1 }} // Animate to scale 1
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery */}
        <motion.div layout className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Portfolio Item without Scroll Animation
const PortfolioItem = ({ item }) => {
  return (
    <motion.div 
      initial={{ scale: 1 }} 
      animate={{ scale: 1 }} 
      transition={{ duration: 0.5, ease: "easeOut" }} 
      className={styles.galleryItem}
    >
      <div className={styles.imageContainer}>
        <motion.img
          src={item.image} 
          alt={item.title} 
          className={styles.galleryImage} 
          whileHover={{ scale: 1.1 }} // Zoom effect on image hover
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{item.title}</h3>
        {/* Removed category line here */}
        <div className={styles.projectTech}>
          {item.tech.map((tech, index) => (
            <span key={index} className={styles.techIcon}>
              {techIcons[tech]} {tech}
            </span>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <motion.a 
            href={item.site} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconButton}
            whileHover={{ scale: 1.2 }} // Zoom effect on button hover
            transition={{ duration: 0.2 }}
          >
            <FaExternalLinkAlt />
          </motion.a>
          <motion.a 
            href={item.code} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconButton}
            whileHover={{ scale: 1.2 }} // Zoom effect on button hover
            transition={{ duration: 0.2 }}
          >
            <FaCode />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioGallery;