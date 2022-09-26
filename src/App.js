import React from 'react';

import Nav from './components/layout/Header/Nav';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
