import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { motion } from "framer-motion";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageAbout from '@site/src/components/HomepageAbout';
import HomepageRoadmap from '@site/src/components/HomepageRoadmap';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeedback from '@site/src/components/HomepageFeedback';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.fullScreen}>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img src='/img/shurri.png' className={styles.appLogo} alt="logo" />
          <Heading as="h3" className={clsx('hero__title', styles.heroTitle, styles.smallHeading)}>
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <motion.button
              className="button button--primary button--lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/handbook/genin/intro"}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </header>
    </section>
  );
}

function HomepageAboutWrapper() {
  return (
    <section id="about" className={styles.heroBanner}>
      <div>
        <HomepageAbout />
      </div>
    </section>
  );
}

function HomepageRoadmapWrapper() {
  return (
    <section id="roadmap" className={clsx(styles.heroBanner, styles.dynamicHeight, styles.handbooksSection)}>
      <div className="container">
        <HomepageRoadmap />
      </div>
    </section>
  );
}

function HomepageFeaturesWrapper() {
  return (
    <section id="features" className={styles.heroBanner}>
      <div>
        <HomepageFeatures />
      </div>
    </section>
  );
}

function HomepageFeedbackWrapper() {
  return (
    <section id="feedback" className={styles.heroBanner}>
      <div>
        <HomepageFeedback />
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Devlite`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.responsiveContainer}> {/* Ganti dengan responsiveContainer */}
        <HomepageHeader />
        <HomepageAboutWrapper />
        <HomepageRoadmapWrapper />
        <HomepageFeaturesWrapper />
        <HomepageFeedbackWrapper />
      </div>
    </Layout>
  );
}