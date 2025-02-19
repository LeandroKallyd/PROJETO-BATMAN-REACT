import React from 'react';
import { Link } from 'react-router-dom';
import batmanLogo from '../assets/batman-logo.webp';

import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <img id="logo" src={batmanLogo} alt="Logo do Batman" />

      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link">Contatos</Link>
          </li>
          <li className="nav-item">
            <Link to="/fotos" className="nav-link">Fotos</Link>
          </li>
          <li className="nav-item">
            <Link to="/comentarios" className="nav-link">Comentários</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
