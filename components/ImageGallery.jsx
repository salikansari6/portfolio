import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import DownArrow from "./icons/DownArrow";

const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fadeAnimation, setFadeAnimation] = useState(false);
  const [moveCarousel, setMoveCarousel] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(null);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [containerHeight, setContainerHeight] = useState(null);

  const galleryRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (window.screen.width <= 1024) {
      setIsSmallDevice(true);
    }
  }, []);

  useEffect(() => {
    setMaxTranslate(() => {
      if (isSmallDevice) {
        return 200 * images.length;
      }
      return galleryRef.current.clientHeight;
    });

    setContainerHeight(() => {
      if (isSmallDevice) {
        return containerRef.current.clientWidth;
      }
      return containerRef.current.clientHeight;
    });
  }, [isSmallDevice, galleryRef.current, containerRef.current]);

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
    <div className="image-gallery block lg:grid lg:grid-cols-12 lg:grid-rows-4 gap-5">
      <div
        className={`current-image h-56 md:h-96 mb-2 ${
          fadeAnimation ? "animate-fade-in" : ""
        } col-span-12 row-span-3 lg:h-auto lg:col-span-10 relative lg:row-span-4 border-2 rounded-lg border-purple-200`}
      >
        <Image
          src={`/images/${currentImage}`}
          layout="fill"
          className="rounded"
          objectFit="cover"
          objectPosition="center top"
        />
      </div>
      <div
        className="gallery p-2 block overflow-x-scroll lg:overflow-hidden relative lg:pt-12 col-span-12  bg-purple-50  lg:col-span-2 lg:row-span-4  lg:p-5 shadow rounded "
        ref={containerRef}
      >
        {!isSmallDevice && (
          <>
            <button
              className="absolute left-1 shadow lg:top-1 lg:left-0 grid  place-content-center rounded-full  h-1 w-1 right-0 lg:mx-auto z-10  p-5 bg-white"
              onClick={() => {
                setMoveCarousel((prev) => {
                  if (prev > 0) {
                    return prev - 150;
                  }
                  return 0;
                });
              }}
            >
              <DownArrow className="transform rotate-180" />
            </button>
            <button
              className="absolute  right-1 shadow lg:bottom-1 lg:left-0 grid  place-content-center rounded-full  h-1 w-1 lg:right-0 lg:mx-auto z-10  p-5 bg-white"
              onClick={() => {
                setMoveCarousel((prev) => {
                  if (prev < maxTranslate - containerHeight) {
                    return prev + 150;
                  }
                  return prev;
                });
              }}
            >
              <DownArrow />
            </button>
          </>
        )}
        <div
          className={`flex lg:block transition duration-500 transform `}
          ref={galleryRef}
          style={{
            transform: `translate${
              isSmallDevice ? "X" : "Y"
            }(-${moveCarousel}px)`,
          }}
        >
          {images.map((image) => {
            return (
              <div
                key={image}
                className={`gallery-item   flex-shrink-0 ml-5 lg:ml-0  h-20 relative w-32  lg:w-auto  rounded-lg lg:h-36  lg:mb-3 cursor-pointer ${
                  image === currentImage
                    ? "border-2 border-purple-700"
                    : "border border-purple-200"
                }`}
                onClick={() => changeImage(image)}
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
    </div>
  );
};

export default ImageGallery;
