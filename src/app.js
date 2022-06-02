// style import

import "./styles/app";

// script import

import { useDebug } from "./scripts/useDebug";
import { htmlPreloadLoaded } from "./scripts/htmlPreloadLoaded";
import { aos } from "./scripts/aos";
import { sectionSlider } from "./scripts/sectionSlider";
import { examplesSlider } from "./scripts/examplesSlider";
import { startDrops } from "./scripts/drop";
import { progressPreloader, hidePreloader } from "./scripts/preloader";

// data

const [log, logError] = useDebug([false, false], "[app.js]");

// handlers

const DOMContentLoadedHandler = () => {
  sectionSlider();
  examplesSlider();
  startDrops();
};

const loadHandler = () => {
  htmlPreloadLoaded();
  aos();

  const preloader = document.querySelector("[data-preloader]");
  progressPreloader(preloader, () => {
    setTimeout(() => {
      hidePreloader(preloader, () => {
        console.log("preloader done");
      });
    }, 500);
  });
};

// events

window.addEventListener("DOMContentLoaded", () => {
  log("DOMContentLoaded");

  DOMContentLoadedHandler();
});

window.addEventListener("load", () => {
  loadHandler();
});
