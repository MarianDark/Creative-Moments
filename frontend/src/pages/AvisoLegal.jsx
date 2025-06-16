import React from 'react';

const AvisoLegal = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-slate-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-mmlpink mb-8">
        Aviso Legal
      </h1>

      <div className="space-y-6 text-base md:text-lg text-justify leading-relaxed">
        <p>
          Este sitio web, <strong>CreativeMoments</strong>, ha sido creado con fines informativos y comerciales. Al acceder y navegar por este sitio, aceptas las condiciones establecidas en este Aviso Legal.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Titularidad del sitio</h2>
        <p>
          Nombre comercial: <strong>CreativeMoments</strong><br />
          Correo electrónico de contacto: contacto@creativemoments.com
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos, diseños, imágenes, logotipos, textos y vídeos son propiedad de CreativeMoments o cuentan con autorización para su uso. Queda prohibida su reproducción total o parcial sin consentimiento previo por escrito.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Responsabilidad del usuario</h2>
        <p>
          El usuario se compromete a utilizar este sitio web de forma responsable, sin realizar actividades que puedan dañar la imagen o los derechos de CreativeMoments o de terceros.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Enlaces externos</h2>
        <p>
          Este sitio puede contener enlaces a páginas externas. CreativeMoments no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Legislación aplicable</h2>
        <p>
          Este sitio se rige por la legislación española. Cualquier conflicto derivado del uso de este sitio será resuelto en los tribunales correspondientes del domicilio del titular.
        </p>

        <p className="mt-8 font-medium text-center">
          Gracias por visitar nuestro sitio. Estamos aquí para ayudarte a crear recuerdos inolvidables 💛
        </p>
      </div>
    </div>
  );
};

export default AvisoLegal;
