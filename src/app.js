import "./styles/app";

import { loaded } from "./scripts/loaded";
import { useDebug } from "./scripts/useDebug";
import { aos } from "./scripts/aos";
import { sectionSlider } from "./scripts/sectionSlider";

const [log, logError] = useDebug(false, "[app.js]");

window.addEventListener("DOMContentLoaded", () => {
  log("DOMContentLoaded");

  sectionSlider();
});

window.addEventListener("load", () => {
  log("load");

  loaded();
  aos();
});
