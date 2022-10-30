import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import GaleriaPage from "./pages/GaleriaPage";
import NosotrosPage from "./pages/NosotrosPage";
import Header from "./components/layout/Header/Header.js";

function App() {
  // return('hola')
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
