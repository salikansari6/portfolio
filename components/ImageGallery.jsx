import React, { useState, useEffect } from "react";
import Image from "next/image";
const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fadeAnimation, setFadeAnimation] = useState(false);

  const changeImage = (image) => {
    setCurrentImage(image);
    setFadeAnimation(true);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFadeAnimation(false);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentImage]);

  return (
    <div className="image-gallery grid grid-cols-12 grid-rows-4 gap-5">
      <div
        className={`current-image ${
          fadeAnimation ? "animate-fade-in" : ""
        } col-span-12 row-span-3 lg:col-span-10 relative lg:row-span-4 border-2 rounded-lg border-pink-200`}
      >
        <Image
          src={`/images/${currentImage}.png`}
          layout="fill"
          className="rounded-lg"
          objectFit="cover"
          objectPosition="center top"
        />
      </div>
      {images.map((image) => {
        return (
          <div
            className="gallery-item col-span-3 lg:col-span-2 border border-pink-200 row-span-1 relative rounded-lg cursor-pointer"
            onClick={() => changeImage(image)}
          >
            <Image
              src={`/images/${image}.png`}
              layout="fill"
              className="rounded-lg"
              objectFit="cover"
              objectPosition="center"
            />
            ;
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
