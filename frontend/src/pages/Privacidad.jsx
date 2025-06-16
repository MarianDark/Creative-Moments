import React from 'react';

const Privacidad = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-slate-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-mmlpink mb-8">
        Política de Privacidad
      </h1>

      <div className="space-y-6 text-base md:text-lg text-justify leading-relaxed">
        <p>
          En <strong>Creative Moments</strong> valoramos tu privacidad y nos comprometemos a proteger tus datos personales.
          Esta política cumple con lo establecido en el Reglamento General de Protección de Datos (RGPD) y la Ley de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).
        </p>

        <h2 className="text-xl font-semibold text-mmlpink mt-8">1. Responsable del tratamiento</h2>
        <p>
          Nombre comercial: <strong>Creative Moments</strong><br />
          Correo electrónico: contacto@creativemoments.com
        </p>

        <h2 className="text-xl font-semibold text-mmlpink mt-8">2. Finalidad del tratamiento</h2>
        <p>Los datos personales que recogemos tienen como finalidad:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Responder a tus dudas, comentarios o solicitudes.</li>
          <li>Gestionar pedidos y presupuestos personalizados.</li>
          <li>Notificarte sobre el estado de tus pedidos.</li>
          <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
        </ul>

        <h2 className="text-xl font-semibold text-mmlpink mt-8">3. Conservación de los datos</h2>
        <p>
          Tus datos serán conservados únicamente durante el tiempo necesario para cumplir con los fines mencionados
          o mientras mantengamos una relación activa contigo como cliente o usuario.
        </p>

        <h2 className="text-xl font-semibold text-mmlpink mt-8">4. Legitimación</h2>
        <p>
          La base legal para el tratamiento de tus datos es tu consentimiento explícito al completar nuestros formularios
          o al utilizar nuestros servicios.
        </p>

        <h2 className="text-xl font-semibold text-mmlpink mt-8">5. Destinatarios</h2>
        <p>
          No cedemos tus datos personales a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio,
          como herramientas de email o envío de archivos digitales.
        </p>

        <h2 className="text-xl font-semibold text-mmlpink mt-8">6. Derechos del usuario</h2>
        <p>
          Tienes derecho a acceder, rectificar o eliminar tus datos, así como a oponerte o limitar su tratamiento.
          Para ejercer estos derechos, contáctanos en nuestro email con tu solicitud y una copia de tu documento de identidad.
        </p>

        <h2 className="text-xl font-semibold text-mmlpink mt-8">7. Cookies</h2>
        <p>
          En nuestro sitio utilizamos cookies técnicas y analíticas para mejorar tu navegación.
          Puedes consultar más información detallada en nuestra <strong>Política de Cookies</strong>.
        </p>

        <h2 className="text-xl font-semibold text-mmlpink mt-8">8. Cambios en esta política</h2>
        <p>
          Nos reservamos el derecho de modificar esta política en cualquier momento para adaptarla a nuevas normativas
          o mejoras en nuestros servicios. Cualquier cambio será publicado en esta misma página.
        </p>

        <p className="mt-8 font-medium text-center">
          Gracias por confiar en <strong>Creative Moments</strong>. Tu seguridad y privacidad son nuestra prioridad.
        </p>
      </div>
    </div>
  );
};

export default Privacidad;
