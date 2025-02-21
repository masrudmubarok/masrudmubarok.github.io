import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Modal from './modal';

function HomepageFeedback() {
  const controlsLeft = useAnimation();
  const refLeft = useRef(null);
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

  return (
    <section id="feedback" className={styles.feedbackSection}>
      <div className={styles.container}>
        <div className={styles.feedbackContainer} style={{justifyContent: 'center'}}> {/* Center the content */}
          <motion.div
            ref={refLeft}
            className={styles.feedbackLeft}
            initial={{ opacity: 0, x: -150, scale: 0.9 }}
            animate={controlsLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{textAlign: 'center'}} // Center align text within the div
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
              style={{margin: '0 auto', display: 'block'}} //center button
            >
              Submit Feedback
            </motion.button>
          </motion.div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default HomepageFeedback;