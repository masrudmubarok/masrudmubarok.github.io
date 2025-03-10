import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaravel, FaVuejs, FaJava, FaPhp } from "react-icons/fa";
import { SiPython, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiExpress, SiRedis, SiElasticsearch, SiSwagger, SiSymfony, SiDocker, SiTailwindcss, SiCodeigniter } from "react-icons/si";
import styles from "./index.module.css";

const techIcons = {
    // Programming Languages
    "PHP": { icon: <FaPhp className={styles.techIcon} />, link: "https://www.php.net/" },
    "JavaScript": { icon: <SiJavascript className={styles.techIcon} />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    "Python": { icon: <SiPython className={styles.techIcon} />, link: "https://www.python.org/" },
    "Java": { icon: <FaJava className={styles.techIcon} />, link: "https://www.java.com/" },

    // Backend Frameworks
    "Node.js": { icon: <FaNodeJs className={styles.techIcon} />, link: "https://nodejs.org/" },
    "Express.js": { icon: <SiExpress className={styles.techIcon} />, link: "https://expressjs.com/" },
    "Laravel": { icon: <FaLaravel className={styles.techIcon} />, link: "https://laravel.com/" },
    "Symfony": { icon: <SiSymfony className={styles.techIcon} />, link: "https://symfony.com/" },
    "CodeIgniter": { icon: <SiCodeigniter className={styles.techIcon} />, link: "https://codeigniter.com/" },
  
    // Frontend Frameworks
    "React.js": { icon: <FaReact className={styles.techIcon} />, link: "https://react.dev/" },
    "Vue.js": { icon: <FaVuejs className={styles.techIcon} />, link: "https://vuejs.org/" },
  
    // Databases
    "MySQL": { icon: <SiMysql className={styles.techIcon} />, link: "https://www.mysql.com/" },
    "MongoDB": { icon: <SiMongodb className={styles.techIcon} />, link: "https://www.mongodb.com/" },
    "Redis": { icon: <SiRedis className={styles.techIcon} />, link: "https://redis.io/" },
    "Elasticsearch": { icon: <SiElasticsearch className={styles.techIcon} />, link: "https://www.elastic.co/elasticsearch/" },
  
    // Tools and Libraries
    "Swagger API": { icon: <SiSwagger className={styles.techIcon} />, link: "https://swagger.io/" },
    "Docker": { icon: <SiDocker className={styles.techIcon} />, link: "https://www.docker.com/" },
    "Tailwind CSS": { icon: <SiTailwindcss className={styles.techIcon} />, link: "https://tailwindcss.com/" },
};  

const StackGallery = () => {
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.portfolioContainer}>
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut" }} 
          className={styles.titleSection}
        >
          <h2 className={styles.title}>Tech Stack</h2>
          <motion.p 
            className={styles.description} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of cutting-edge technologies that power my projects with speed, scalability, and seamless performance, delivering innovative and flawless solutions.
          </motion.p>
        </motion.div>
      </div>

      <div className={styles.stackGalleryContainer}>
        <div className={styles.stackSlider}>
          {Object.entries(techIcons).map(([name, { icon, link }], index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.techIconWrapper}
              whileHover={{ scale: 1.5 }}
            >
              {React.cloneElement(icon, { className: styles.largeIcon })}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackGallery;