import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=9720584055147&text=faceVibe"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsappButton;
