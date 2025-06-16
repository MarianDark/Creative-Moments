import { useState } from "react";

const opciones = [
  { label: "Video horizontal", valor: "horizontal", precio: 0 },
  { label: "Video vertical", valor: "vertical", precio: 0 },
  { label: "15 segundos", valor: "15s", precio: 10 },
  { label: "30 segundos", valor: "30s", precio: 15 },
  { label: "45 segundos", valor: "45s", precio: 20 },
  { label: "60 segundos", valor: "60s", precio: 25 },
  { label: "Con personajes de películas", valor: "personajes", precio: 10 },
  { label: "Con IA", valor: "ia", precio: 15 },
  { label: "Subtítulos y voz en off", valor: "subvoz", precio: 10 },
  { label: "Solo subtítulos", valor: "subtitulos", precio: 5 },
  { label: "Con música de fondo", valor: "musica", precio: 5 },
  { label: "Sin música", valor: "sinmusica", precio: 0 },
];

const Personalizacion = () => {
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("");

  const toggleOpcion = (valor) => {
    setSeleccionadas((prev) =>
      prev.includes(valor) ? prev.filter((v) => v !== valor) : [...prev, valor]
    );
  };

  const calcularTotal = () => {
    return seleccionadas.reduce((total, valor) => {
      const opcion = opciones.find((o) => o.valor === valor);
      return total + (opcion?.precio || 0);
    }, 0);
  };

  const handlePagar = () => {
    if (descripcion.length > 5000) {
      setError("Has excedido el límite de 5000 caracteres.");
      return;
    }
    setError("");
    // Simulación de redirección a pasarela
    alert("Redirigiendo a la pasarela de pago...");
    // window.location.href = '/pago'; // Aquí iría la ruta real
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-8 text-center text-mmlpink">
        Personaliza tu video invitación
      </h1>

      <div className="space-y-4">
        {opciones.map((opcion) => (
          <div
            key={opcion.valor}
            className="flex items-center justify-between border-b pb-2"
          >
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={seleccionadas.includes(opcion.valor)}
                onChange={() => toggleOpcion(opcion.valor)}
                className="accent-mmlpink"
              />
              <span>{opcion.label}</span>
            </label>
            <span className="text-mmlgold">+{opcion.precio}€</span>
          </div>
        ))}

        <div className="mt-6">
          <label className="block font-semibold mb-2 text-slate-700">
            Cuéntanos cómo quieres tu video, (fecha, hora y lugar del evento,
            nombre del festejado, Cumpleaños, Bautizo, Boda, etc ), danos todos
            los detalles posibles para poder hacer la magia ✨:
          </label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            maxLength={5000}
            rows={6}
            className="w-full border rounded p-3 outline-none focus:ring-2 focus:ring-mmlpink"
            placeholder="Ej: Quiero un video con temática de princesas, que diga 'Emma cumple 5 años'..."
          />
          <p className="text-sm text-gray-500 mt-1">
            {descripcion.length}/5000 caracteres
          </p>
          {error && <p className="text-red-600 mt-1">{error}</p>}
        </div>

        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-xl font-bold text-slate-800">
              Total: <span className="text-mmlpink">{calcularTotal()}€</span>
            </p>
            <p className="text-sm text-gray-500">
              * Todos los precios incluyen IVA
            </p>
          </div>
          <button
            onClick={handlePagar}
            className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:text-mmlgold transition"
          >
            PAGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personalizacion;
