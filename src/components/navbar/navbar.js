import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

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
          >
            <motion.ul id="menu-main-menu" className="flexnav menu with-js opacity sm-screen">
              <motion.li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-2742 link menu-timeline active item-with-ul">
                <a href="#" className="menu-text active" onClick={() => toggleSubMenu(1)}>
                  <span data-hover="Portfolio">Portfolio</span>
                </a>
                <ul className={`sub-menu ${activeSubMenu === 1 ? 'open' : ''}`}>
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
              </motion.li>
              <motion.li className="menu-item">
                <a href="#" className="ajax-link menu-text"><span data-hover="About">About</span></a>
              </motion.li>
              <motion.li className="menu-item">
                <a href="#" className="ajax-link menu-text"><span data-hover="Stories">Stories</span></a>
              </motion.li>
              <motion.li className="menu-item">
                <a href="#" className="ajax-link menu-text"><span data-hover="Contact">Contact</span></a>
              </motion.li>
              <motion.li className="menu-item menu-item-has-children">
                <a href="#" className="menu-text" onClick={() => toggleSubMenu(2)}>
                  <span data-hover="More">More</span>
                </a>
                <ul className={`sub-menu ${activeSubMenu === 2 ? 'open' : ''}`}>
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
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
