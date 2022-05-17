import { useDebug } from "./useDebug";
import Swiper, { Navigation } from "swiper";
import autoprefixer from "autoprefixer";

const [log] = useDebug(true, "[examplesSlider.js]");

const getSelector = (attr) => `[data-examples-slider-${attr}]`;

const examplesSlider = () => {
  const componentsEl = document.querySelectorAll(getSelector("component"));

  componentsEl.forEach((componentEl) => {
    const containerEl = componentEl.querySelector(getSelector("container"));

    const prevEl = componentEl.querySelector(getSelector("prev"));
    const nextEl = componentEl.querySelector(getSelector("next"));

    log(containerEl, prevEl, nextEl);

    const swiper = new Swiper(containerEl, {
      modules: [Navigation],

      loop: true,

      speed: 750,

      allowTouchMove: false,

      slidesPerView: 2,

      navigation: {
        prevEl,
        nextEl,
      },
    });
  });
};

export { examplesSlider };
