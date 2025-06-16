import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappFloatingButton = () => {
  const whatsappNumber = '+34600116095';

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      className="fixed bottom-20 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      <FaWhatsapp className="text-2xl" />
    </motion.a>
  );
};

export default WhatsappFloatingButton;
