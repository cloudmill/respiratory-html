// style import

import "./styles/app";

// script import

import { useDebug } from "./scripts/useDebug";
import { htmlPreloadLoaded } from "./scripts/htmlPreloadLoaded";
import { aos } from "./scripts/aos";
import { sectionSlider } from "./scripts/sectionSlider";
import { examplesSlider } from "./scripts/examplesSlider";
import { startDrops } from "./scripts/drop";

// data

const [log, logError] = useDebug([false, true], "[app.js]");

// handlers

const DOMContentLoadedHandler = () => {
  sectionSlider();
  examplesSlider();
  startDrops();
};

const loadHandler = () => {
  htmlPreloadLoaded();
  aos();
};

// events

window.addEventListener("DOMContentLoaded", () => {
  log("DOMContentLoaded");

  try {
    DOMContentLoadedHandler();
  } catch (error) {
    logError(error);
  }
});

window.addEventListener("load", () => {
  log("load");

  try {
    loadHandler();
  } catch (error) {
    logError(error);
  }
});
