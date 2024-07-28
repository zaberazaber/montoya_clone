import React from 'react';
import { motion } from 'framer-motion';

const HoverText = ({ text, transformOrigin }) => {
  const letters = text.split('');
  console.log(transformOrigin)
  return (
    <div style={{ 
      fontFamily: '"Six Caps", sans-serif', 
      textTransform: 'lowercase', 
      fontWeight: 500,
      display: 'flex',
      justifyContent: 'center',
      fontSize: 'calc(1rem + 22.15vw)',
      lineHeight: 'calc(1rem + 20.5vw)',
      color: 'white',
      paddingTop: '80px',
      paddingBottom: '80px'
    }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          whileHover={{ scaleY: 1.2 }}
          style={{
            display: 'inline-block',
            margin: '0 2px',
            transformOrigin: [transformOrigin]
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default HoverText;
