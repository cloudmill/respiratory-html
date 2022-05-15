import { useDebug } from "./useDebug";

const [log, logError] = useDebug(true, "[loaded.js]");

const loaded = () => {
  log(document.documentElement);

  document.documentElement.classList.add("loaded");
};

export { loaded };
