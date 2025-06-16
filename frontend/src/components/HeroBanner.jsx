import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // velocidad a la mitad
    }
  }, []);

  return (
    <section className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Capa oscura para contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Texto centrado */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white text-center text-3xl md:text-6xl font-bold drop-shadow-lg"
        >
          Donde cada invitación <br className="hidden md:block" /> cuenta una historia
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroBanner;
