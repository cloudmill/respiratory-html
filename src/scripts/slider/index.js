import React from "react";
import ReactDOM from "react-dom/client";
import { Slider } from "./Slider.jsx";

addEventListener("DOMContentLoaded", () => {
  if (matchMedia("(min-width: 1280px)").matches) {
    const rootEl = document.querySelector(".js-slider-root");

    if (rootEl) {
      const root = ReactDOM.createRoot(rootEl);

      root.render(<Slider />);
    }
  }
});
