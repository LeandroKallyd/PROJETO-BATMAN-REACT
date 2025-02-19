import React, { useState } from 'react';

import '../styles/Comentarios.css';

const Comentarios = () => {
  const [comments, setComments] = useState([
    { name: 'João Silva', text: 'Ótimo filme! A atuação do Robert Pattinson foi incrível.' },
    { name: 'Maria Oliveira', text: 'Adorei a atmosfera sombria e a trilha sonora.' },
    { name: 'Carlos Souza', text: 'O filme trouxe uma nova perspectiva para o Batman.' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debug log
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    
    if (name && comment) {
      console.log('Adding new comment:', { name, text: comment }); // Debug log
      setComments(prevComments => [...prevComments, { name, text: comment }]);
      e.target.reset();
    } else {
      console.log('Validation failed - missing name or comment');
    }
  };


  return (
    <>
      <header>
        <h1>Comentários</h1>
      </header>
      <main>
        <section className="comment-section">
          <h2>Deixe seu comentário</h2>
          <form id="commentForm" onSubmit={handleSubmit}>

            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="comment">Comentário:</label>
            <textarea id="comment" name="comment" rows="4" required></textarea>

            <button type="submit">Enviar Comentário</button>
          </form>
        </section>
        <section className="comments-list">
          <h2>Comentários</h2>
          <ul id="comments">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <li key={index}>
                  <h3>{comment.name}</h3>
                  <p>{comment.text}</p>
                </li>
              ))
            ) : (
              <p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>
            )}

          </ul>

        </section>
      </main>
      <footer>
        <p>&copy; Leandro Nascimento. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};


export default Comentarios;
