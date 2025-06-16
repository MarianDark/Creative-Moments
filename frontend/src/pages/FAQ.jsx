import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const preguntas = [
  {
    pregunta: '¿Qué tipo de archivos recibiré?',
    respuesta:
      'Recibirás un archivo de video en formato MP4, compatible con cualquier dispositivo y red social. Podrás descargarlo y compartirlo fácilmente por WhatsApp, Instagram, correo u otras plataformas.',
  },
  {
    pregunta: '¿Cuánto tiempo tardan en enviarlo?',
    respuesta:
      'Normalmente lo enviamos en menos de 48 horas. En temporadas altas puede tardar hasta 72h, pero siempre te informamos del progreso.',
  },
  {
    pregunta: '¿Puedo pedir una invitación con un tema personalizado?',
    respuesta:
      '¡Por supuesto! Puedes indicarnos el tema que deseas (película, personaje, caricatura o estilo) y lo adaptamos para ti.',
  },
  {
    pregunta: '¿Qué medios de pago aceptan?',
    respuesta:
      'Aceptamos pagos por tarjeta, transferencia bancaria, Bizum, Paypal.',
  },
  {
    pregunta: '¿Puedo solicitar cambios después de recibir la invitación?',
    respuesta:
      'Sí. Si detectas algún error o deseas ajustar algún detalle, puedes solicitar una corrección sin coste adicional dentro de las primeras 48h.',
  },
];

const FAQ = () => {
  const [abierta, setAbierta] = useState(null);

  const toggle = (index) => {
    setAbierta(abierta === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-mmlpink mb-8">
        Preguntas Frecuentes
      </h2>

      <p className="text-gray-600 mb-10">
        Aquí respondemos las dudas más comunes sobre nuestros productos y servicios.  
        Si necesitas más ayuda, contáctanos por WhatsApp o email.
      </p>

      <div className="space-y-4 text-left">
        {preguntas.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded shadow-xl"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left px-4 py-4 text-slate-800 font-medium hover:text-mmlgold transition"
            >
              {item.pregunta}
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  abierta === index ? 'rotate-180 text-mmlgold' : ''
                }`}
              />
            </button>
            {abierta === index && (
              <div className="px-4 pb-4 text-lg text-gray-600">
                {item.respuesta}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
