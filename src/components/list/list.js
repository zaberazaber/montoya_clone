import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './list.css';

const WordList = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const controls = useAnimation();

  const words = [
    'Web design', 
    'mobile web development', 
    'seo optimization', 
    'UI/UX design', 
    'social media management', 
    'data analytics', 
    'content creation'
  ];

  const handleScroll = () => {
    const elements = document.querySelectorAll('.word');
    const newActiveIndices = [];
    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        newActiveIndices.push(index);
      }
    });
    setActiveIndices(newActiveIndices);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start((i) => ({
      color: activeIndices.includes(i) ? '#fff' : 'rgba(255, 255, 255, 0.2)',
    }));
  }, [activeIndices, controls]);

  return (
    <div className="word-list">
      {words.map((word, index) => (
        <motion.div
          key={index}
          className="word"
          custom={index}
          initial={{ color: 'rgba(255, 255, 255, 0.2)' }}
          animate={controls}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default WordList;
