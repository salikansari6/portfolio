import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fadeAnimation, setFadeAnimation] = useState(false);
  const [moveCarousel, setMoveCarousel] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(null);
  const [containerHeight, setContainerHeight] = useState(null);

  const galleryRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    console.log(galleryRef.current.clientHeight);
    console.log(containerRef.current.clientHeight);
    setMaxTranslate(galleryRef.current.clientHeight);
    setContainerHeight(containerRef.current.clientHeight);
  });

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
    <div className="image-gallery grid grid-cols-12 grid-rows-4 gap-5">
      <div
        className={`current-image ${
          fadeAnimation ? "animate-fade-in" : ""
        } col-span-12 row-span-3 lg:col-span-10 relative lg:row-span-4 border-2 rounded-lg border-purple-200`}
      >
        <Image
          src={`/images/${currentImage}.png`}
          layout="fill"
          className="rounded"
          objectFit="cover"
          objectPosition="center top"
        />
      </div>
      <div
        className="gallery pt-10 relative lg:col-span-2 lg:row-span-4  overflow-hidden p-5 shadow rounded box-content"
        ref={containerRef}
      >
        <button
          className="absolute top-0 left-0 right-0 z-10 mx-auto"
          onClick={() => {
            setMoveCarousel((prev) => {
              if (prev > 0) {
                return prev - 150;
              }
              return 0;
            });
          }}
        >
          Up
        </button>
        <button
          className="absolute bottom-0 left-0 h-1 w-1 right-0 mx-auto z-10 rounded-full p-5 bg-white"
          onClick={() => {
            setMoveCarousel((prev) => {
              if (prev < maxTranslate - containerHeight) {
                return prev + 150;
              }
              return prev;
            });
          }}
        >
          Down
        </button>
        <div
          className={`transition duration-500 transform `}
          ref={galleryRef}
          style={{
            transform: `translateY(-${moveCarousel}px)`,
          }}
        >
          {images.map((image) => {
            return (
              <div
                key={image}
                className={`gallery-item relative  rounded-lg h-36  mb-3 cursor-pointer ${
                  image === currentImage
                    ? "border-2 border-purple-700"
                    : "border border-purple-200"
                }`}
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
      </div>
    </div>
  );
};

export default ImageGallery;
