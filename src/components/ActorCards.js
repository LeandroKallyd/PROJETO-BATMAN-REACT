import React from 'react';
import '../styles/ActorCards.css';

const ActorCards = () => {
  const actors = [
    {
      name: "Robert Pattinson",
      image: "https://media.vogue.mx/photos/5c06fe93f5bb24fb60fe70ce/2:3/w_2560%2Cc_limit/donde_esta_robert_pattinson_2018_que_hace_peliculas_6623.jpg"
    },
    {
      name: "Zoë Kravitz", 
      image: "https://i0.web.de/image/636/36653636,pd=1,f=sdata43/zoe-kravitz.jpg"
    },
    {
      name: "Jeffrey Wright",
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/82013_v9_bc.jpg"
    }
  ];

  return (
    <div className="actor-cards-container">
      <div className="cards-content">
        {actors.map((actor, index) => (
          <div 
            key={index}
            className="card"
            style={{ backgroundImage: `url(${actor.image})` }}
          >
            {actor.name}
          </div>
        ))}
      </div>
    </div>
  );
};


export default ActorCards;
