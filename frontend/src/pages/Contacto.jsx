import React, { useState } from "react";

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formulario);
    // Aquí puedes enviar los datos a tu backend
  };

  return (
    <section className="bg-[#f5faff] py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-slate-700 mb-6">
          Contacto
        </h2>

        <p className="text-center text-gray-600 mb-4">
          Queremos ayudarte a crear momentos especiales. Si tienes alguna
          pregunta o necesitas asistencia, déjanos tu mensaje y te responderemos
          muy pronto.
        </p>

        <p className="text-center text-gray-600 mb-8">
          Si deseas también puedes escribirnos al{" "}
          <a
            href="https://wa.me/34600116095"
            className="text-mmlpink underline"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>{" "}
          para una atención más inmediata.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Nombre<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-cyan-100 rounded focus:outline-none focus:ring-2 focus:ring-mmlpink"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Correo<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="correo"
                value={formulario.correo}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-cyan-100 rounded focus:outline-none focus:ring-2 focus:ring-mmlpink"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Teléfono<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telefono"
              value={formulario.telefono}
              onChange={handleChange}
              placeholder="600 123 456"
              required
              className="w-full px-4 py-2 bg-cyan-100 rounded focus:outline-none focus:ring-2 focus:ring-mmlpink"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Asunto<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="asunto"
              value={formulario.asunto}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-cyan-100 rounded focus:outline-none focus:ring-2 focus:ring-mmlpink"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Mensaje<span className="text-red-500">*</span>
            </label>
            <textarea
              name="mensaje"
              value={formulario.mensaje}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-2 bg-cyan-100 rounded resize-none focus:outline-none focus:ring-2 focus:ring-mmlpink"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-mmlpink hover:bg-pink-500 text-white font-medium px-6 py-2 rounded transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
