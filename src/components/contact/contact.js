import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import "./contact.css"
import '@fortawesome/fontawesome-free/css/all.min.css'; // Make sure to install Font Awesome

const ContactInfo = () => {
  return (
    <div className="bg-transparent p-8 pt78 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="flex flex-col items-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl mb-2">
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </div>
          <h6 className="text-lg">office@montoya.com</h6>
          <p>Email</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-4xl mb-2">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <h6 className="text-lg">35 M Str, New York, USA</h6>
          <p>Address</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-4xl mb-2">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </div>
          <h6 className="text-lg">0040 (7763) 574-8901</h6>
          <p>Phone</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactInfo;
