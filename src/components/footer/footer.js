import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './footer.css';

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <motion.div
        className="back-to-top"
        onClick={handleScrollToTop}
        whileHover={{ color: '#00f' }}
      >
        ↑ Back to Top
      </motion.div>
      <div
        className="social-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="follow"
          whileHover={{ y: -20 }}
        >
          Follow
        </motion.div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="icons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <a href="#" className="icon">FB</a>
              <a href="#" className="icon">TW</a>
              <a href="#" className="icon">IN</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;
