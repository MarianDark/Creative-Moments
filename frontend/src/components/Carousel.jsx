import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    title: 'Invitación Princesas',
    videoUrl: '/videos/princesas.mp4',
  },
  {
    id: 2,
    title: 'Invitación Dinosaurios',
    videoUrl: '/videos/dinosaurios.mp4',
  },
  {
    id: 3,
    title: 'Invitación Superhéroes',
    videoUrl: '/videos/superheroes.mp4',
  },
];

const Carousel = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-mmlpink mb-8">
        Últimos videos vendidos
      </h2>

      {/* Contenedor scrollable horizontal solo en móviles */}
      <div className="overflow-x-auto md:overflow-x-hidden scrollbar-hide">
        <div className="flex flex-nowrap md:flex-wrap justify-center gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="min-w-[260px] max-w-[300px] bg-white shadow-md rounded-lg overflow-hidden"
            >
              <video
                controls
                className="w-full h-48 object-cover"
                src={video.videoUrl}
              />
              <div className="p-3 text-center font-medium text-mmlblack">
                {video.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
