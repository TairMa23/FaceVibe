import React from 'react';
import { FaGithub } from 'react-icons/fa';

const FAButton: React.FC = () => {
  return (
    <a
      href="https://github.com/TairMa23/FaceVibe"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#afc3f2',
        color: 'black',
        borderRadius: '50%',
        padding: '15px',
        boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
    >
      <FaGithub size={25} />
    </a>
  );
};

export default FAButton;
