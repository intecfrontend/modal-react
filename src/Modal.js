import React from 'react';
import './index.css';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal">
      <img src={image.src} alt={image.alt} />
      <p>{image.text}</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;
