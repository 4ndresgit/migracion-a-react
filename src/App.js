import React from "react";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import Header from "./components/layout/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <ContactoPage />
      <Footer />
    </div>
  );
}

export default App;
