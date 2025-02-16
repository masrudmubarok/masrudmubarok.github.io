import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import { Coffee } from "lucide-react"; // Import ikon kopi
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Modal from './modal';

function HomepageFeedback() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsLeft.start({ opacity: 1, x: 0, scale: 1 });
        } else {
          controlsLeft.start({ opacity: 0, x: -150, scale: 0.9 });
        }
      },
      { threshold: 0.2 }
    );

    if (refLeft.current) observer.observe(refLeft.current);
    return () => observer.disconnect();
  }, [controlsLeft]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsRight.start({ opacity: 1, x: 0, scale: 1 });
        } else {
          controlsRight.start({ opacity: 0, x: 150, scale: 0.9 });
        }
      },
      { threshold: 0.2 }
    );

    if (refRight.current) observer.observe(refRight.current);
    return () => observer.disconnect();
  }, [controlsRight]);

  return (
    <section id="feedback" className={styles.feedbackSection}>
      <div className={styles.container}>
        <div className={styles.feedbackContainer}>
          <motion.div
            ref={refLeft}
            className={styles.feedbackLeft}
            initial={{ opacity: 0, x: -150, scale: 0.9 }}
            animate={controlsLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Heading as="h3" className={styles.title}>Suggestions & Feedback</Heading>
            <p className={styles.subtitle}>
              Help us improve Devlite! Share your thoughts, suggestions, or report issues.
            </p>
            <motion.button
              className="button button--primary button--lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Submit Feedback
            </motion.button>
          </motion.div>

          <motion.div
            ref={refRight}
            className={styles.feedbackRight}
            initial={{ opacity: 0, x: 150, scale: 0.9 }}
            animate={controlsRight}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Heading as="h3" className={styles.title}>Support Devlite</Heading>
            <p className={styles.subtitle}>
              If you find this content useful, consider supporting us to keep it running.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.a
                  href="https://www.buymeacoffee.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary button--lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                      backgroundColor: '#8B5E3C',
                      color: '#fff',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      width: 'fit-content'
                  }}
              >
                  <Coffee size={18} /> Buy Me a Coffee
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default HomepageFeedback;