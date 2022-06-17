import React, { useEffect, useState } from "react";
import { Slide } from "./Slide";
import { normIndex, getTrio } from "../utils";

export const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

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

    const prev = document.querySelector(".js-slider-prev");
    const next = document.querySelector(".js-slider-next");

    prev.addEventListener("click", () =>
      setIndex((index) => normIndex(index - 1, slides))
    );
    next.addEventListener("click", () =>
      setIndex((index) => normIndex(index + 1, slides))
    );
  }, []);

  return (
    slides.length && (
      <div className="slider">
        <div className="slider__col">
          <Slide slides={getTrio(index, slides)} large />
        </div>
        <div className="slider__col">
          <Slide slides={getTrio(index + 1, slides)} small />
        </div>
        <div className="slider__col">
          <Slide slides={getTrio(index + 4, slides)} small />
        </div>
      </div>
    )
  );
};
