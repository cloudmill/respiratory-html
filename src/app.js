import "./styles/app";

import { loaded } from "./scripts/loaded";
import { useDebug } from "./scripts/useDebug";
import { aos } from "./scripts/aos";
import { sectionSlider } from "./scripts/sectionSlider";
import { examplesSlider } from "./scripts/examplesSlider";
import { buttonTest } from "./scripts/buttonTest";

const [log, logError] = useDebug(false, "[app.js]");

window.addEventListener("DOMContentLoaded", () => {
  log("DOMContentLoaded");

  sectionSlider();
  examplesSlider();
  buttonTest();
});

window.addEventListener("load", () => {
  log("load");

  loaded();
  aos();
});
