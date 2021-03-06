import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

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
    <div className="image-gallery block lg:grid lg:grid-cols-12 lg:grid-rows-4 gap-5 cursor-pointer">
      {isOpen && (
        <Lightbox
          mainSrc={`/images/` + images[photoIndex]}
          nextSrc={"/images/" + images[(photoIndex + 1) % images.length]}
          prevSrc={
            "/images/" +
            images[(photoIndex + images.length - 1) % images.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className={`current-image h-56 md:h-96 lg:h-auto mb-2 ${
          fadeAnimation ? "animate-fade-in" : ""
        } col-span-12 row-span-3 lg:h-auto lg:col-span-10 relative lg:row-span-4 border rounded-lg  border-purple-400`}
      >
        <Image
          src={`/images/${currentImage}`}
          layout="fill"
          className="rounded"
          objectFit="cover"
          objectPosition="center top"
        />
      </div>
      <div className="gallery p-2 border border-purple-400 flex overflow-auto relative lg:pt-12 col-span-12  bg-purple-50  lg:block lg:col-span-2 lg:row-span-4  lg:p-5 shadow rounded ">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              className={`gallery-item   flex-shrink-0 ml-5 lg:ml-0  h-20 relative w-32  lg:w-auto  rounded-lg   lg:mb-3 xl:h-20 2xl:h-36 cursor-pointer ${
                image === currentImage
                  ? "border-2 border-purple-700"
                  : "border border-purple-200"
              }`}
              onClick={() => {
                changeImage(image);
                setPhotoIndex(index);
              }}
            >
              <Image
                src={`/images/${image}`}
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
    </div>
  );
};

export default ImageGallery;
