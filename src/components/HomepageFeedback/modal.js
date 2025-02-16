import React, { useState } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import styles from './styles.module.css';

function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    from_email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // Untuk status pengiriman

  if (!isOpen) return null;

  // Handle perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk mengirim email
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'your_serviceID', 
        'your_templateID', 
        formData,
        'your_publicKey' 
      );

      console.log('Email Sent:', response);
      setStatus('success');
      setFormData({ from_email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Email Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <motion.div 
        className={styles.modalContent}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika diklik di dalamnya
      >
        <h3 className={styles.modalTitle}>Send Feedback</h3>

        <form onSubmit={sendEmail}>
          <input 
            type="email" 
            name="from_email" 
            placeholder="Your Email" 
            className={styles.modalInput} 
            value={formData.from_email}
            onChange={handleChange}
            required 
          />

          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            className={styles.modalInput} 
            value={formData.subject}
            onChange={handleChange}
            required 
          />

          <textarea 
            name="message" 
            placeholder="Your Message" 
            className={styles.modalTextarea} 
            value={formData.message}
            onChange={handleChange}
            required 
          />

          <div className={styles.modalActions}>
            <button type="button" className="button button--secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="button button--primary">Send</button>
          </div>

          {status === 'success' && <p className={styles.successMsg}>Email Sent Successfully!</p>}
          {status === 'error' && <p className={styles.errorMsg}>Failed to Send Email!</p>}
        </form>
      </motion.div>
    </div>
  );
}

export default Modal;