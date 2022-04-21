import Swiper, { Navigation } from "swiper";
import { useDebug } from "./useDebug";

const SWIPER_SPEED = 500;

const [log, logError] = useDebug(true);

log("masks");

window.addEventListener("DOMContentLoaded", () => {
  try {
    const masks = document.querySelector("[data-masks]");

    log({
      masks,
      sw: Swiper,
    });

    const masksSwiper = new Swiper(masks, {
      modules: [Navigation],

      loop: true,

      speed: SWIPER_SPEED,

      slidesPerView: "auto",
      slidesPerGroup: 2,

      navigation: {
        nextEl: "[data-masks-next]",
        prevEl: "[data-masks-prev]",
      },
    });
  } catch (error) {
    logError(error);
  }
});
