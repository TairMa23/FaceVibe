import React from 'react';

interface CardProps {
  imageUrl: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, text }) => {
  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      {/* וודא שהתמונה מוצגת רק באמצעות הפרופס ולא מועברת הלאה */}
      <img src={imageUrl} alt="Card image" style={{ width: '100%', height: 'auto', display: 'block' }} />
      <p style={{ marginTop: '10px' }}>{text}</p>
    </div>
  );
};

export default Card;
