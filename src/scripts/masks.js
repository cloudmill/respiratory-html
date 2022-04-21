import Swiper, { Navigation } from "swiper";
import { useDebug } from "./useDebug";

const DEBUG = true;
const SWIPER_PARAMETERS = {
  loop: true,
  modules: [Navigation],
};

const [log, logError] = useDebug(DEBUG);

log("masks");

window.addEventListener("DOMContentLoaded", () => {
  try {
    const masks = document.querySelector("[data-masks]");

    log({
      masks,
      sw: Swiper,
    });

    const masksSwiper = new Swiper(masks, {
      ...SWIPER_PARAMETERS,

      navigation: {
        nextEl: "[data-masks-next]",
        prevEl: "[data-masks-prev]",
      },

      spaceBetween: 20,
    });
  } catch (error) {
    logError(error);
  }
});
