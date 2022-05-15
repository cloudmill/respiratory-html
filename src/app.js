import "./styles/app";

import { loaded } from "./scripts/loaded";
import { useDebug } from "./scripts/useDebug";

const [log, logError] = useDebug(true, "[app.js]");

window.addEventListener("DOMContentLoaded", () => {
  log("DOMContentLoaded");
});

window.addEventListener("load", () => {
  log("load");

  loaded();
});
