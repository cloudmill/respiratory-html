import "./styles/app";

import { loaded } from "./scripts/loaded";
import { useDebug } from "./scripts/useDebug";
import { aos } from "./scripts/aos";

const [log, logError] = useDebug(false, "[app.js]");

window.addEventListener("DOMContentLoaded", () => {
  log("DOMContentLoaded");
});

window.addEventListener("load", () => {
  log("load");

  loaded();
  aos();
});
