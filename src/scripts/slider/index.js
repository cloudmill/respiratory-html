import React from "react";
import ReactDOM from "react-dom/client";
import { Slider } from "./Slider";

export const start = () => {
  const sliderAll = document.querySelectorAll(".js-slider");

  sliderAll.forEach((slider) => {
    if (matchMedia("(min-width: 1280px)").matches) {
      const root = slider.querySelector(".js-slider-root");
      const template = slider.querySelector(".js-slider-template");
      const slides = template.content.querySelectorAll(".js-slider-slide");
      const prev = slider.querySelector(".js-slider-prev");
      const next = slider.querySelector(".js-slider-next");

      const reactRoot = ReactDOM.createRoot(root);
      reactRoot.render(<Slider {...{ slides, prev, next }} />);
    }
  });
};
