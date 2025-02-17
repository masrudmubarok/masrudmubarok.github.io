import clsx from "clsx";
import Heading from "@theme/Heading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.css";

const AboutList = [
  {
    title: "Devlite (Developer Elite)",
    Svg: require("@site/static/img/undraw_hello_ccwj.svg").default,
    description: (
      <>
        <p className={styles.justifyText}>
        Devlite is an open-source handbook designed for software development learning, drawing inspiration from the discipline and agility of a ninja. We believe that becoming a great developer requires not only technical skills but also perseverance, strategy, and continuous growth.
        </p>
        <p className={styles.justifyText}>
        Our structured learning path provides an engaging and smooth journey, guiding developers from Genin (beginner) to Kage (master) at their own pace. With Devlite, you have the freedom to explore, learn, and refine your coding skills without pressure, just pure knowledge to empower your progress.
        </p>
        <p className={styles.justifyText}>
        As an open-source resource, Devlite creates a dynamic environment for exploration and growth. Whether you're just starting or looking to deepen your expertise, Devlite provides valuable insights to help you navigate and thrive in the ever-evolving world of technology.
        </p>
      </>
    ),
  },
];

function About({ Svg, title, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={clsx("row", styles.featureRow)}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 50 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
    >
      <div className="col col--6">
        <motion.div
          className="text--left padding-horiz--md"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 50 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >
          <Heading as="h3">{title}</Heading>
          {description}
        </motion.div>
      </div>
      <div className="col col--6 text--center">
        <motion.div
          className={styles.parallaxContainer}
          initial={{ y: 0, scale: 1 }}
          animate={{ y: [-5, 5, -5], scale: [1, 1.05, 1] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Svg className={styles.featureSvgMedium} role="img" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HomepageAbout() {
  return (
    <section className={styles.features}>
      <div className="container">
        {AboutList.map((props, idx) => (
          <About key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}