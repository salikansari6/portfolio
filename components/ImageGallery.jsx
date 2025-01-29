'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fadeAnimation, setFadeAnimation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const changeImage = (image) => {
    setCurrentImage(image);
    setFadeAnimation(true);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFadeAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentImage]);

  return (
    <div className="block lg:grid lg:grid-cols-12 gap-5">
      {isOpen && (
        <Lightbox
          mainSrc={`/images/` + images[photoIndex]}
          nextSrc={'/images/' + images[(photoIndex + 1) % images.length]}
          prevSrc={'/images/' + images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className={`relative aspect-video mb-5 lg:mb-0 lg:col-span-10 rounded-lg overflow-hidden border border-dark-lighter ${
          fadeAnimation ? 'animate-fade-in' : ''
        }`}
      >
        <Image
          src={`/images/${currentImage}`}
          layout="fill"
          className="rounded object-contain"
          alt="Project screenshot"
        />
      </div>

      <div className="gallery flex lg:flex-col items-center gap-4 overflow-x-auto lg:overflow-y-auto lg:col-span-2 p-4 bg-dark-light/50 rounded-lg border border-dark-lighter">
        {images.map((image, index) => (
          <div
            key={image}
            className={`relative w-28 lg:w-full h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ${
              image === currentImage ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => {
              changeImage(image);
              setPhotoIndex(index);
            }}
          >
            <Image
              src={`/images/${image}`}
              layout="fill"
              className="object-cover"
              alt={`Project screenshot ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
