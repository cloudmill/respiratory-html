import React from "react";
import ReactDOM from "react-dom/client";
import { Slider } from "./Slider";

console.log("slider");

addEventListener("DOMContentLoaded", () => {
  if (matchMedia("(min-width: 1280px)").matches) {
    console.log("slider desktop");

    const rootEl = document.querySelector(".js-slider-root");

    if (rootEl) {
      const root = ReactDOM.createRoot(rootEl);

      root.render(<Slider />);
    }
  }
});
