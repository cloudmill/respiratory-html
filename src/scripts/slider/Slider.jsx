import React, { useEffect, useState } from "react";
import { Slide } from "./Slide";
import { normIndex } from "../utils";
import { SLIDER_DURATION as DURATION } from "../constants";

export const Slider = (props) => {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    props.slides.forEach((slide) => {
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

    props.prev.addEventListener("click", () => {
      if (!props.prev.classList.contains("js-slider-disabled")) {
        props.prev.classList.add("js-slider-disabled");
        props.next.classList.add("js-slider-disabled");

        setIsAnimate("prev");

        setTimeout(() => {
          props.prev.classList.remove("js-slider-disabled");
          props.next.classList.remove("js-slider-disabled");

          setIsAnimate(false);
          setIndex((index) => normIndex(index - 1, props.slides));
        }, DURATION);
      }
    });
    props.next.addEventListener("click", () => {
      if (!props.next.classList.contains("js-slider-disabled")) {
        props.prev.classList.add("js-slider-disabled");
        props.next.classList.add("js-slider-disabled");

        setIsAnimate("next");

        setTimeout(() => {
          props.prev.classList.remove("js-slider-disabled");
          props.next.classList.remove("js-slider-disabled");

          setIsAnimate(false);
          setIndex((index) => normIndex(index + 1, props.slides));
        }, DURATION);
      }
    });
  }, []);

  return (
    slides.length && (
      <div className="slider">
        <div className="slider__col">
          <Slide index={index} slides={slides} large isAnimate={isAnimate} />
        </div>
        <div className="slider__col">
          <Slide
            index={index + 1}
            slides={slides}
            small
            isAnimate={isAnimate}
          />
        </div>
        <div className="slider__col">
          <Slide
            index={index + 2}
            slides={slides}
            small
            isAnimate={isAnimate}
          />
        </div>
      </div>
    )
  );
};
