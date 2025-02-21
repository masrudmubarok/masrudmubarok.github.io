import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaLaravel, FaVuejs, FaJava, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiMongodb, SiMysql, SiNextdotjs, SiExpress } from "react-icons/si";
import styles from "./index.module.css";

const techIcons = {
  "HTML": <FaHtml5 className={styles.icon} style={{ marginRight: "2px"}} />, 
  "CSS": <FaCss3Alt className={styles.icon} style={{ marginRight: "2px"}} />, 
  "JS": <FaJs className={styles.icon} style={{ marginRight: "2px"}} />, 
  "React": <FaReact className={styles.icon} style={{ marginRight: "2px"}} />, 
  "Node.js": <FaNodeJs className={styles.icon} style={{ marginRight: "2px"}} />, 
  "Express": <SiExpress className={styles.icon} style={{ marginRight: "2px"}} />, 
  "Socket.io": <FaNodeJs className={styles.icon} style={{ marginRight: "2px"}} />, 
  "Laravel": <FaLaravel className={styles.icon} style={{ marginRight: "2px"}} />, 
  "Vue.js": <FaVuejs className={styles.icon} style={{ marginRight: "2px"}} />, 
  "Java": <FaJava className={styles.icon} style={{ marginRight: "2px"}} />, 
  "MySQL": <SiMysql className={styles.icon} style={{ marginRight: "2px"}} />,
  "MongoDB": <SiMongodb className={styles.icon} style={{ marginRight: "2px"}} />,
  "Next.js": <SiNextdotjs className={styles.icon} style={{ marginRight: "2px"}} />,
};

const portfolioItems = [
  { id: 1, category: "Web", title: "SIMKEU PPTIK", tech: ["Laravel", "Vue.js", "MySQL"], image: "/img/project.png", site: "#", code: "#" },
  { id: 2, category: "Web", title: "PPTIK Academy Admin", tech: ["Laravel", "Vue.js", "MySQL"], image: "/img/project.png", site: "#", code: "#" },
  { id: 3, category: "Mobile", title: "PPTIK Academy", tech: ["Java", "MySQL"], image: "/img/project.png", site: "#", code: "#" },
  { id: 4, category: "Web", title: "Devanote", tech: ["Node.js", "React", "Express", "MongoDB"], image: "/img/project.png", site: "#", code: "#" },
  { id: 5, category: "Web", title: "Khelsya Store", tech: ["Next.js", "MongoDB"], image: "/img/project.png", site: "#", code: "#" },
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
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut" }} 
          className={styles.titleSection}
        >
          <h2 className={styles.title}>My Projects</h2>
        </motion.div>

        <div className={styles.filterWrapper}>
          <div className={styles.buttonsContainerFixed}>
            {categories.map(category => (
              <motion.button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ""}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div layout className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </motion.div>

      </div>
    </div>
  );
};

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
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{item.title}</h3>
        <div className={styles.projectTech}>
          {item.tech.map((tech, index) => (
            <span key={index} className={styles.techIcon}>
              {techIcons[tech]} {tech}
              {index !== item.tech.length - 1 && " "}
            </span>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <motion.a 
            href={item.site} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconButton}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <FaExternalLinkAlt /> Demo
          </motion.a>
          <motion.a 
            href={item.code} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconButton}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <FaCode /> Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioGallery;
