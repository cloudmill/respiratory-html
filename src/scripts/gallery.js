import { useDebug } from "./useDebug";

const [log, logError] = useDebug(true);

log("gallery");

window.addEventListener("DOMContentLoaded", () => {
  try {
  } catch (error) {
    logError(error);
  }
});
