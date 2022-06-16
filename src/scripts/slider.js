import React from "react";
import ReactDOM from "react-dom/client";

console.log("slider");

addEventListener("DOMContentLoaded", () => {
  if (matchMedia("(min-width: 1280px)").matches) {
    console.log("slider desktop");

    const container = document.querySelector(".js-slider-root");

    const root = ReactDOM.createRoot(container);

    root.render(<div>Hello, world!</div>);
  }
});
