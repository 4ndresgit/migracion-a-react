import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import HomePage from "./pages/HomePage";
//import GaleriaPage from "./pages/GaleriaPage";
//import NosotrosPage from "./pages/NosotrosPage";
//import ContactoPage from "./pages/ContactoPage";
//import Header from "./components/layout/Header/Header";
import "./index.css";
import App from "./App";

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Header />}>
//         <Route index element={<HomePage />} />
//         <Route path="Galeria" element={<GaleriaPage />} />
//         <Route path="Nosotros" element={<NosotrosPage />} />
//         <Route path="Contacto" element={<ContactoPage />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
