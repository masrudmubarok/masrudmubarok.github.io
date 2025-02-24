import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaravel, FaVuejs, FaJava, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiMongodb, SiMysql, SiNextdotjs, SiExpress } from "react-icons/si";
import styles from "./index.module.css";

const techIcons = {
  "Node.js": { icon: <FaNodeJs className={styles.techIcon} />, link: "https://nodejs.org/" },
  "Express.js": { icon: <SiExpress className={styles.techIcon} />, link: "https://expressjs.com/" },
  "React.js": { icon: <FaReact className={styles.techIcon} />, link: "https://react.dev/" },
  "Vue.js": { icon: <FaVuejs className={styles.techIcon} />, link: "https://vuejs.org/" },
  "Next.js": { icon: <SiNextdotjs className={styles.techIcon} />, link: "https://nextjs.org/" },
  "Laravel": { icon: <FaLaravel className={styles.techIcon} />, link: "https://laravel.com/" },
  "Java": { icon: <FaJava className={styles.techIcon} />, link: "https://www.java.com/" },
  "MySQL": { icon: <SiMysql className={styles.techIcon} />, link: "https://www.mysql.com/" },
  "MongoDB": { icon: <SiMongodb className={styles.techIcon} />, link: "https://www.mongodb.com/" },
};

const portfolioItems = [
  { id: 1, category: "Web", title: "SIMKEU PPTIK", description: "A financial management system for PPTIK.", tech: ["Laravel", "Vue.js", "MySQL"], image: "/img/project.png", site: "#", code: "#" },
  { id: 2, category: "Web", title: "PPTIK Academy Admin", description: "Admin panel for managing courses and users.", tech: ["Laravel", "Vue.js", "MySQL"], image: "/img/project.png", site: "#", code: "#" },
  { id: 3, category: "Mobile", title: "PPTIK Academy", description: "Mobile app for students to access learning materials.", tech: ["Java", "MySQL"], image: "/img/project.png", site: "#", code: "#" },
  { id: 4, category: "Web", title: "Devlite", description: "A handbook platform for developers to learn and refine the software development skills.", tech: ["React.js"], image: "/img/devlite-portofolio.png", site: "https://devlite.org/", code: "#" },
  { id: 5, category: "Web", title: "Devanote", description: "A note-taking web app with real-time collaboration.", tech: ["Node.js", "React.js", "Express.js", "MongoDB"], image: "/img/project.png", site: "#", code: "#" },
  { id: 6, category: "Web", title: "Khelsya Store", description: "An e-commerce website for selling fashion products.", tech: ["Next.js", "MongoDB"], image: "/img/project.png", site: "#", code: "#" },
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
        <h2 className={styles.title}>Portfolio</h2>
        <motion.p 
          className={styles.description} 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A collection of my best work, blending innovation, performance, and seamless functionality. Each project is crafted with precision and powered by cutting-edge technology.
        </motion.p>
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

const PortfolioItem = ({ item, activeTech, setActiveTech }) => {
  return (
    <motion.div className={styles.galleryItem}>
      <div className={styles.imageContainer}>
        <motion.img src={item.image} alt={item.title} className={styles.galleryImage} />
        <div className={styles.buttonOverlay}>
          <motion.a href={item.site} target="_blank" className={styles.iconButton}>
            <FaExternalLinkAlt /> Demo
          </motion.a>
          <motion.a href={item.code} target="_blank" className={styles.iconButton}>
            <FaCode /> Code
          </motion.a>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{item.title}</h3>
        <p className={styles.projectDescription}>{item.description}</p>
        <div className={styles.projectTech}>
          {item.tech.map((tech, index) => (
            <motion.a
              key={index}
              href={techIcons[tech]?.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.techButton} ${activeTech === tech ? styles.active : ""}`}
            >
              {techIcons[tech]?.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioGallery;