import { useDebug } from "./useDebug";
import Swiper, { Navigation, Pagination } from "swiper";

const [log] = useDebug(true, "[sectionSlider.js]");

const getSelector = (attr) => `[data-section-slider-${attr}]`;

const sectionSlider = () => {
  const componentsEl = document.querySelectorAll(getSelector("component"));

  componentsEl.forEach((componentEl) => {
    const containerEl = componentEl.querySelector(getSelector("container"));

    const prevEl = componentEl.querySelector(getSelector("prev"));
    const nextEl = componentEl.querySelector(getSelector("next"));

    const paginationEl = componentEl.querySelector(getSelector("pagination"));
    const currentEl = componentEl.querySelector(getSelector("current"));
    const totalEl = componentEl.querySelector(getSelector("total"));

    log(containerEl, prevEl, nextEl, paginationEl, currentEl, totalEl);

    const swiper = new Swiper(containerEl, {
      modules: [Navigation, Pagination],

      loop: true,

      speed: 750,

      allowTouchMove: false,

      navigation: {
        prevEl,
        nextEl,
      },

      pagination: {
        type: "custom",
        el: paginationEl,

        renderCustom(swiper, current, total) {
          currentEl.textContent = current;
          totalEl.textContent = total;
        },
      },
    });
  });
};

export { sectionSlider };
