import React from 'react';

const Envio = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-slate-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-mmlpink mb-8">
        Política de Envío
      </h1>

      <div className="space-y-6 text-base md:text-lg text-justify leading-relaxed">
        <p>
          En <strong>Creative Moments</strong> trabajamos exclusivamente con productos digitales personalizados, por lo que no realizamos envíos físicos. Todas nuestras <strong>video invitaciones animadas</strong> se entregan en formato <code>.mp4</code> a través del correo electrónico proporcionado por el cliente.
        </p>

        <p>
          El plazo de entrega estándar es de <strong>48 a 72 horas</strong> desde la confirmación del pago y la recepción de todos los datos necesarios para la personalización. En la mayoría de los casos, recibirás tu invitación mucho antes.
        </p>

        <p>
          En temporadas de alta demanda (por ejemplo, Navidad, vacaciones escolares o eventos especiales), el tiempo de entrega podría extenderse ligeramente. En caso de cualquier retraso, te informaremos oportunamente.
        </p>

        <p>
          Es responsabilidad del cliente asegurarse de que el correo electrónico y/o numero de telefono ingresado sea correcto y esté operativo. Si no recibes tu video dentro del plazo estimado, te recomendamos revisar la carpeta de spam o escribirnos directamente por WhatsApp o email.
        </p>

        <p className="mt-8 font-medium text-center">
          ¡Gracias por elegirnos para darle vida a tus momentos especiales!
        </p>
      </div>
    </div>
  );
};

export default Envio;
