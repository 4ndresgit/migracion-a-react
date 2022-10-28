import React from "react";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import Header from "./components/layout/Header/Header"; 
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
