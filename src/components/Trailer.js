import React from 'react';
import Banner from './Banner';
import '../styles/Trailer.css';

const videoUrl = 'https://www.youtube.com/embed/mqqft2x_Aa4';

const Trailer = () => {
  return (
    <div>
      <Banner />
      <div id="trailer-container">
        <div className="content">
          <iframe
            width="100%"
            height="500"
            src={videoUrl}
            title="The Batman - Trailer Principal"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div id="synopsis">
            <p className="description">
              O filme "Batman" de 2022, dirigido por Matt Reeves, segue a história do jovem Bruce Wayne, interpretado por Robert Pattinson, em seu segundo ano como vigilante noturno na fictícia Gotham City. Ele investiga uma série de crimes e se depara com a corrupção crescente na cidade. À medida que busca vingar a morte de seus parents, ele descobre que a criminalidade em Gotham é mais profunda do que imaginava.
            </p>
            <button className="button" aria-label="Clique para comprar ingressos do filme Batman">
              Comprar Ingressos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
