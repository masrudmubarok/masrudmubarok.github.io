import React from 'react';
 import styled, { keyframes } from 'styled-components';
 import { motion } from 'framer-motion';
 import { FaWhatsapp } from 'react-icons/fa';
 import { MdEmail } from 'react-icons/md';

 const ContactContainer = styled(motion.div)`
  padding: 2rem; /* Padding lebih kecil untuk mobile */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh; /* Sedikit lebih tinggi untuk tata letak vertikal yang lebih baik */
  background-color: ${({ theme }) => theme.background};
  text-align: center;

  @media (min-width: 768px) {
   padding: 2rem 2rem; /* Padding lebih besar untuk desktop */
   min-height: 50vh; /* Kembali ke tinggi semula untuk desktop */
  }
 `;

 const WavyTitleAnimation = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(-8px); }
  40% { transform: translateY(4px); }
  60% { transform: translateY(-4px); }
  80% { transform: translateY(8px); }
  100% { transform: translateY(0); }
 `;

 const Title = styled(motion.h2)`
  font-size: 2.5rem; /* Ukuran font lebih kecil untuk mobile */
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem; /* Margin bawah lebih kecil untuk mobile */
  letter-spacing: -0.06em;
  line-height: 1.2;
  animation: ${WavyTitleAnimation} 2s ease-in-out infinite alternate;

  @media (min-width: 768px) {
   font-size: 3rem; /* Ukuran font kembali ke semula untuk desktop */
   margin-bottom: 2rem; /* Margin bawah kembali ke semula untuk desktop */
   letter-spacing: -0.08em;
   line-height: 1.1;
  }
 `;

 const SubTitle = styled(motion.h3)`
  font-size: 1.3rem; /* Ukuran font lebih kecil untuk mobile */
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
   font-size: 1.5rem; /* Ukuran font kembali ke semula untuk desktop */
   letter-spacing: -0.03em;
  }
 `;

 const ContactDescription = styled(motion.p)`
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem; /* Ukuran font lebih kecil untuk mobile */
  line-height: 1.6;
  margin-bottom: 2rem; /* Margin bawah lebih kecil untuk mobile */
  max-width: 90%; /* Lebar maksimal lebih besar untuk mobile */
  font-style: italic;

  @media (min-width: 768px) {
   font-size: 1.2rem; /* Ukuran font kembali ke semula untuk desktop */
   line-height: 1.7;
   margin-bottom: 2.5rem;
   max-width: 700px; /* Lebar maksimal kembali ke semula untuk desktop */
  }
 `;

 const ContactMethodList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Gap lebih kecil untuk mobile */
  align-items: center;
 `;

 const ContactLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.8rem; /* Gap lebih kecil untuk mobile */
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.2rem; /* Ukuran font lebih kecil untuk mobile */
  font-weight: 600;
  transition: color 0.3s ease, transform 0.2s ease-in-out;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.2rem; /* Padding bawah lebih kecil untuk mobile */

  &:hover {
   color: ${({ theme }) => theme.primary};
   transform: translateY(-2px);
  }

  @media (min-width: 768px) {
   font-size: 1.3rem; /* Ukuran font kembali ke semula untuk desktop */
   gap: 1.2rem; /* Gap kembali ke semula untuk desktop */
   padding-bottom: 0.3rem; /* Padding bawah kembali ke semula untuk desktop */
  }
 `;

 const IconStyle = `
  font-size: 1.5rem; /* Ukuran ikon lebih kecil untuk mobile */

  @media (min-width: 768px) {
   font-size: 1.8rem; /* Ukuran ikon kembali ke semula untuk desktop */
  }
 `;

 const WhatsApp = styled(FaWhatsapp)`
  ${IconStyle}
  color: #25D366;
 `;

 const Email = styled(MdEmail)`
  ${IconStyle}
  color: ${({ theme }) => theme.secondary};
 `;

 const EmphasisText = styled.span`
  color: ${({ theme }) => theme.accent || theme.primary}; /* Warna penekanan */
  font-weight: 700;
 `;

 const Contact = () => {
  const containerVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
  };

  const itemVariants = {
   hidden: { opacity: 0, y: 20 }, /* Jarak y lebih kecil untuk mobile */
   visible: { opacity: 1, y: 0 },
  };

  return (
   <ContactContainer variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
    <Title variants={itemVariants}>Connect <EmphasisText>With Me!</EmphasisText></Title>
    <SubTitle variants={itemVariants}>Let's Forge Something Amazing Together</SubTitle>
    <ContactDescription variants={itemVariants}>
     I'm eager to explore exciting new projects and collaborations. Don't hesitate to reach out if you have an interesting idea or just want to say hello! Your message is highly valued.
    </ContactDescription>
    <ContactMethodList variants={itemVariants}>
     <ContactLink href="https://wa.me/6281321219970" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
      <WhatsApp /> Chat on WhatsApp
     </ContactLink>
     <ContactLink href="mailto:masrud.mubarok21@gmail.com" variants={itemVariants}>
      <Email /> Drop Me an Email
     </ContactLink>
     {/* Tambahkan tautan kontak lain jika perlu */}
    </ContactMethodList>
   </ContactContainer>
  );
 };

 export default Contact;