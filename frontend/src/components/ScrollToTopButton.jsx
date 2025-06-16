import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 bg-gray-700 hover:bg-black text-white p-3 rounded-full shadow-lg transition duration-300"
      aria-label="Subir al inicio"
    >
      <FaArrowUp className="text-lg" />
    </button>
  ) : null;
};

export default ScrollToTopButton;
