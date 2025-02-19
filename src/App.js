import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Trailer from './components/Trailer';
import ActorCards from './components/ActorCards';
import Contato from './components/Contato';
import Fotos from './components/Fotos';
import Comentarios from './components/Comentarios';
import Obrigado from './components/Obrigado';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Trailer />
              <ActorCards />
              <Footer />
            </>
          } />
          <Route path="/contato" element={<Contato />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/comentarios" element={<Comentarios />} />
          <Route path="/obrigado" element={<Obrigado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
