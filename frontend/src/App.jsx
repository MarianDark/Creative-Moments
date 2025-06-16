import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Carousel from "./components/Carousel"; 

import Catalogo from "./pages/Catalogo";
import Nosotros from "./pages/Nosotros";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";
import Privacidad from "./pages/Privacidad";
import Envio from "./pages/Envio";
import Devolucion from "./pages/Devolucion";
import AvisoLegal from "./pages/AvisoLegal";

import ScrollToTop from "./components/ScrollToTop";
import WhatsappFloatingButton from './components/WhatsappFloatingButton';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="pt-20 flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroBanner />
                <Carousel /> {/* 👈 Aquí se muestra el carrusel debajo del video */}
              </>
            } />
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
        <WhatsappFloatingButton />
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
