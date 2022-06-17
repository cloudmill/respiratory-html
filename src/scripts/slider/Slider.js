import React, { useEffect, useState } from "react";

export const Slider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const template = document.querySelector(".js-slider-template");
    const slides = template.content.querySelectorAll(".js-slider-slide");

    slides.forEach((slide) => {
      const src = slide.querySelector(".js-slider-src").src;
      const href = slide.querySelector(".js-slider-href").href;
      const day = slide.querySelector(".js-slider-day").textContent;
      const month = slide.querySelector(".js-slider-month").textContent;
      const label = slide.querySelector(".js-slider-label").textContent;
      const text = slide.querySelector(".js-slider-text").textContent;

      setSlides((slides) => [
        ...slides,
        {
          src,
          href,
          day,
          month,
          label,
          text,
        },
      ]);
    });
  }, []);

  return (
    <ul>
      {slides.map((slide, index) => (
        <li key={index}>
          <img src={slide.src} />
          <a href={slide.href}>qwe</a>
          <div>{slide.day}</div>
          <div>{slide.month}</div>
          <div>{slide.label}</div>
          <div>{slide.text}</div>
        </li>
      ))}
    </ul>
  );
};
