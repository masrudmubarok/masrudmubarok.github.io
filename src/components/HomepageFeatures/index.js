import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Structured Learning Path',
    Svg: require('@site/static/img/undraw_applications_h0mq.svg').default,
    description: 'Devlite offers a tiered handbook inspired by ninja mastery, guiding you through software development from Genin (beginner) to Kage (master), ensuring a focused and systematic learning journey.',
  },
  {
    title: 'Industry-Relevant & Up-to-Date',
    Svg: require('@site/static/img/undraw_engineering-team_13ax.svg').default,
    description: 'All content is curated based on the latest industry trends, covering everything from programming fundamentals to advanced system architecture.',
  },
  {
    title: 'Open Source & Free',
    Svg: require('@site/static/img/undraw_tasting_cd81.svg').default,
    description: 'This open-source handbook is freely accessible to everyone. Designed for learners at all levels, it welcomes feedback and suggestions to improve its content, supporting your growth at no cost.',
  },
];

function Feature({ Svg, title, description }) {
  const controls = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (controls.current) observer.observe(controls.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={controls}
      className={clsx('col col--4', styles.featureCard)}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className="text--center"><b>Key Points</b></h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}