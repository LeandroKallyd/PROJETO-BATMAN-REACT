import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const images = [
    'https://c4.wallpaperflare.com/wallpaper/304/940/11/batman-the-batman-2022-black-background-hd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/832/242/432/batman-robert-pattinson-2022-batman-hd-wallpaper-preview.jpg',
    'https://images.wallpapersden.com/image/download/batman-movie-2022-new_bWdpbGmUmZqaraWkpJRobWllrWdma2U.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYHw6DTabfzeSJoiHCHsFYcOnnlIGzSARjg&s',
    'https://cloud.estacaonerd.com/wp-content/uploads/2021/04/28164852/the-batman-2021-robert-pattinson-4k-0q-scaled.jpg',
    'https://cdn.bs9.com.br/upload/dn_arquivo/2022/03/whatsapp-image-2022-03-01-at-132925.jpg',
    'https://images5.alphacoders.com/131/1311166.jpeg',
    'https://lh4.googleusercontent.com/proxy/2zQsOINl9pkkb0pGmgjAO-SPqKbHgIZtZ_rkhfaUa7TAlfbbeuez5ODFUtU5RBFY8sxeT-Zau1VHTMx87yPHFweDLCw9-rOR',
    'https://wallpaperboat.com/wp-content/uploads/2021/12/28/80171/the-batman-2022-movie-12.jpg',
    'https://images3.alphacoders.com/137/1377278.jpg',
    'https://wallpapercave.com/wp/wp10947552.jpg',
    'https://wallpapercat.com/w/full/4/a/6/145365-3840x2160-desktop-4k-the-batman-2022-wallpaper-image.jpg'
  ];

  return (
    <main>
      <header>
        <h1>Galeria de Fotos</h1>
      </header>
      <section className="gallery">
        {images.map((image, index) => (
          <div key={index} className="photo">
            <img src={image} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Gallery;
