import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mmlturquoise text-white py-10 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-2">Creative Moments</h3>
          <p className="text-sm">Donde cada invitación cuenta una historia</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/privacidad" className="hover:underline">Política de Privacidad</Link>
            </li>
            <li>
              <Link to="/envio" className="hover:underline">Política de Envío</Link>
            </li>
            <li>
              <Link to="/devolucion" className="hover:underline">Política de Devolución</Link>
            </li>
            <li>
              <Link to="/aviso-legal" className="hover:underline">Aviso Legal</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Navegación</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:underline">Catálogo</Link></li>
            <li><Link to="/quienes-somos" className="hover:underline">Nosotros</Link></li>
            <li><Link to="/faq" className="hover:underline">Preguntas Frecuentes</Link></li>
            <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold mb-2">Créditos</h4>
          <p>
            Diseño y Posicionamiento:{" "}
            <a
              href="https://mml-website-lovat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-mmlpink"
            >
              mmlstack.com
            </a>
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white/80">
        &copy; {new Date().getFullYear()} Creative Moments. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
