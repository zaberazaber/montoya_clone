import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

const menuVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setActiveSubMenu(index === activeSubMenu ? null : index);
  };

  return (
    <div className="navbar">

       <div className="logo"> <img className="whitelogo" src="./logo.png" alt="Logo White"></img></div>
      <div className={`${isOpen ? "padding-menu-button" : "menu-button"}`} onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.ul id="menu-main-menu" className="flexnav menu with-js opacity sm-screen">
              {['Portfolio', 'About', 'Stories', 'Contact', 'More'].map((item, index) => (
                <motion.li
                  key={item}
                  className="menu-item"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                
                  exit="hidden"
                  variants={menuVariants}
                >
                  <a href="#" className="menu-text" onClick={() => toggleSubMenu(index)}>
                    <span data-hover={item}>{item}</span>
                  </a  >
                  {item === 'Portfolio' && (
                    <ul className={`sub-menu ${activeSubMenu === 0 ? 'open' : ''}`}>
                      <li className="menu-item">
                        <a href="#" className="ajax-link menu-text active">Overlapping Gallery</a>
                      </li>
                      <li className="menu-item">
                        <a href="#" className="ajax-link menu-text">Parallax Gallery</a>
                      </li>
                      <li className="menu-item">
                        <a href="#" className="ajax-link menu-text">Portfolio Grid</a>
                      </li>
                      <li className="menu-item">
                        <a href="#" className="ajax-link menu-text">Archive Gallery</a>
                      </li>
                    </ul>
                  )}
                  {item === 'More' && (
                    <ul className={`sub-menu ${activeSubMenu === 4 ? 'open' : ''}`}>
                      <li className="menu-item">
                        <a href="#" className="ajax-link menu-text">Typography</a>
                      </li>
                      <li className="menu-item">
                        <a href="#" className="ajax-link menu-text">Multimedia</a>
                      </li>
                      <li className="menu-item">
                        <a href="#" className="ajax-link menu-text">Shortcodes</a>
                      </li>
                    </ul>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
