import React from 'react';
import { Link } from 'react-router-dom';
import batmanLogo from '../assets/batman-logo.webp';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={batmanLogo} alt="Logo do Batman" />

      
      <nav className="footer-navigation">
        <ul className="footer-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contato">Contatos</Link></li>
          <li><Link to="/fotos">Fotos</Link></li>
          <li><Link to="/comentarios">Comentarios</Link></li>
        </ul>
      </nav>
      <span>Todos os direitos reservados ©</span>
      <span>Desenvolvido por Leandro Nascimento</span>
    </footer>
  );
};

export default Footer;
