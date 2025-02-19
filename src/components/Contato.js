import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Contato.css';

const Contato = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/obrigado');
  };

  return (
    <div className="contato-container">
      <h1>Contato</h1>
      <p>Entre em contato conosco para mais informações sobre o filme Batman.</p>
      <form className="contato-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
