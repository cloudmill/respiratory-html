import { Fancybox } from "@fancyapps/ui";
import { useDebug } from "./useDebug";

const [log, logError] = useDebug(true);

log("gallery");

window.addEventListener("DOMContentLoaded", () => {
  try {
    log({
      Fb: Fancybox,
    });

    Fancybox.bind("[data-fancybox]", {});
  } catch (error) {
    logError(error);
  }
});
