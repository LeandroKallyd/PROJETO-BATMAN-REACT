import React from 'react';
import '../styles/Contato.css';

const Obrigado = () => {
  return (
    <div className="main">
      <h1 className="text">Obrigado pelo contato!</h1>
      <p className="paragrafo">Em breve entraremos em contato</p>
      <a href="/" className="btn">Home</a>
      <footer>
        <p>&copy; Leandro Nascimento. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Obrigado;
