import React, { useState } from 'react';
import Modal from './Modal';
import anaImage from './ana.jpg';
import banImage from './ban.jpg';
import anacountry from './anacountry.jpg';
import bancountry from './bancountry.jpg';
import './index.css';


const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src2: anaImage,
      src: anacountry,

      alt: 'Image 1',
      text: 'Description for Image 1',
    },
    {
      id: 2,
      src2: banImage,
      src: bancountry,
      alt: 'Image 2',
      text: 'Description for Image 2',
    },
    // Add more images as needed
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src2}
          alt={image.alt}
          onClick={() => openModal(image)}
        />
      ))}
      {modalOpen && (
        <Modal image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ImageGallery;
