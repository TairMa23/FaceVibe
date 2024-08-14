import React, { useState, useEffect } from "react";

const GifLooper: React.FC = () => {
  const gifs = [
    { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.gif' },
    { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2639_fe0f/512.gif' },
    { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif' },
    { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62f/512.gif' },
    { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif' },
    { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif' }
  ];
  

  const interval = 2000; // זמן בהחלפת הגיפים (במילישניות)

  const [currentGifIndex, setCurrentGifIndex] = useState<number>(0);

  useEffect(() => {
    const gifLoop = setInterval(() => {
      setCurrentGifIndex((prevIndex) =>
        prevIndex === gifs.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(gifLoop);
  }, [gifs, interval]);

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={gifs[currentGifIndex].src} alt="Looping GIF" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

 

export default GifLooper;
