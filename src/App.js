import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";
import Nav from "./components/layout/Nav.js";

import HomePage from "./pages/HomePage.js";
import ContactoPage from "./pages/ContactoPage.js";
import GaleriaPage from "./pages/GaleriaPage.js";
import NosotrosPage from "./pages/NosotrosPage.js";

function App() {
  // return('hola')
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="contacto" element={<ContactoPage />} />
          <Route exact path="galeria" element={<GaleriaPage />} />
          <Route exact path="nosotros" element={<NosotrosPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
