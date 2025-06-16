import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Asegúrate de poner tu logo aquí

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Creative Moments" className="h-28 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-14">
          <Link to="/" className="text-mmlblack hover:text-mmlpink font-semibold">Inicio</Link>
          <Link to="/catalogo" className="text-mmlblack hover:text-mmlpink font-semibold">Catálogo</Link>
          <Link to="/quienes-somos" className="text-mmlblack hover:text-mmlpink font-semibold">Nosotros</Link>
          <Link to="/faq" className="text-mmlblack hover:text-mmlpink font-semibold">Preguntas Frecuentes</Link>
          <Link to="/contacto" className="text-mmlblack hover:text-mmlpink font-semibold">Contacto</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-2xl text-mmlpink" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 pt-2 flex flex-col gap-3">
          <Link to="/" onClick={closeMenu} className="text-mmlblack hover:text-mmlpink">Inicio</Link>
          <Link to="/catalogo" onClick={closeMenu} className="text-mmlblack hover:text-mmlpink">Catálogo</Link>
          <Link to="/quienes-somos" onClick={closeMenu} className="text-mmlblack hover:text-mmlpink">Nosotros</Link>
          <Link to="/faq" onClick={closeMenu} className="text-mmlblack hover:text-mmlpink">Preguntas Frecuentes</Link>
          <Link to="/contacto" onClick={closeMenu} className="text-mmlblack hover:text-mmlpink">Contacto</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
