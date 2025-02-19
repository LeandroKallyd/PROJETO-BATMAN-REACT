import React, { useState } from 'react';
import '../styles/Comments.css';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName('');
      setComment('');
    }
  };

  return (
    <main>
      <header>
        <h1>Comentários</h1>
      </header>
      <section className="comment-section">
        <h2>Deixe seu comentário</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="comment">Comentário:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            required
          />

          <button type="submit">Enviar Comentário</button>
        </form>
      </section>
      <section className="comments-list">
        <h2>Comentários</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.name}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Comments;
