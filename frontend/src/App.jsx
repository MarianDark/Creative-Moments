import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';

import Catalogo from './pages/Catalogo';
import Nosotros from './pages/Nosotros';
import FAQ from './pages/FAQ';
import Contacto from './pages/Contacto';
import Privacidad from './pages/Privacidad';
import Envio from './pages/Envio';
import Devolucion from './pages/Devolucion';
import AvisoLegal from './pages/AvisoLegal';

import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HeroBanner />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/quienes-somos" element={<Nosotros />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/envio" element={<Envio />} />
          <Route path="/devolucion" element={<Devolucion />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
