import React from 'react';

const Nosotros = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-6xl font-bold text-center text-mmlpink mb-8">
        Nosotros
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="md:w-1/2 text-slate-700 text-xl leading-relaxed space-y-10">
          <p>
            En <strong>Creative Moments</strong> creemos que cada celebración merece ser única,
            emotiva y memorable. Creamos <strong>video invitaciones personalizadas</strong> para
            cumpleaños, baby showers, bautizos y todo tipo de eventos especiales.
          </p>
          <p>
            Nuestro objetivo es ayudarte a <strong>sorprender a tus invitados</strong> con diseños creativos,
            temas adaptados a tus gustos y entrega rápida en formato digital.
          </p>
          <p>
            Trabajamos con amor, ilusión y una pizca de magia para que tus momentos importantes sean inolvidables.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="/nosotros-ilustracion.png"
            alt="Equipo de Creative Moments"
            className="w-full rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
