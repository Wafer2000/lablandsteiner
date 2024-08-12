"use client";

import { useEffect, useState } from "react";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((slideIndex + 1) % 4); // 4 is the number of images
    }, 3500); // Change image every 2 seconds
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  const handlePrevClick = () => {
    setSlideIndex((slideIndex - 1 + 4) % 4);
  };

  const handleNextClick = () => {
    setSlideIndex((slideIndex + 1) % 4);
  };

  const handleDotClick = (index: number) => {
    setSlideIndex(index - 1);
  };

  const handleMouseOver = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <section
      id="Carousel"
      className="relative w-full h-[200px] sm:h-[400px] md:h-[480px] lg:h-[650px] xl:h-[850px] pt-10"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {[1, 2, 3, 4].map((index) => (
        <img
          key={index}
          src={`/PAQUETES AGOSTO-0${index}.jpg`}
          alt="Imagen de fondo"
          className={`absolute object-cover w-[100%] h-auto ${
            slideIndex === index - 1 ? "block" : "hidden"
          }`}
        />
      ))}
      <div
        className="absolute top-1/2 left-0 flex justify-center"
        style={{
          opacity: showButtons ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <button
          className="prev"
          onClick={handlePrevClick}
          style={{
            fontSize: "24px",
            padding: "12px 24px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          ❮
        </button>
      </div>
      <div
        className="absolute top-1/2 right-0 flex justify-center"
        style={{
          opacity: showButtons ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <button
          className="next"
          onClick={handleNextClick}
          style={{
            fontSize: "24px",
            padding: "12px 24px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Carousel;