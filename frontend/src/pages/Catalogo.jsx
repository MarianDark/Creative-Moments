import { useState } from 'react';

const videos = [
  {
    id: 1,
    titulo: 'Invitación Princesas',
    thumbnail: '/princesadisney.jpg', // debe existir en /public/videos/
    videoUrl: '/videos/princesas.mp4',
  },
  {
    id: 2,
    titulo: 'Invitación Safari',
    thumbnail: '/videos/safari-thumb.jpg',
    videoUrl: '/videos/safari.mp4',
  },
  {
    id: 3,
    titulo: 'Invitación Superhéroes',
    thumbnail: '/videos/superheroes-thumb.jpg',
    videoUrl: '/videos/superheroes.mp4',
  },
  // Agrega más videos aquí
];

const Catalogo = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleSeleccionar = (video) => {
    setVideoSeleccionado(video);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold mb-10 text-center text-mmlpink">
        Elige tu invitación favorita
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={video.thumbnail}
              alt={video.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{video.titulo}</h2>
              <button
                onClick={() => handleSeleccionar(video)}
                className="bg-slate-800 text-white px-4 py-2 rounded hover:text-mmlgold transition"
              >
                Seleccionar
              </button>
            </div>
          </div>
        ))}
      </div>

      {videoSeleccionado && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Vista previa: {videoSeleccionado.titulo}
          </h2>
          <div className="flex justify-center">
            <video
              src={videoSeleccionado.videoUrl}
              controls
              className="w-full max-w-xl rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogo;
