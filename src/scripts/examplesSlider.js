import Swiper, { Navigation } from "swiper";

const getSelector = (attr) => `[data-examples-slider-${attr}]`;

const examplesSlider = () => {
  const componentsEl = document.querySelectorAll(getSelector("component"));

  componentsEl.forEach((componentEl) => {
    const containerEl = componentEl.querySelector(getSelector("container"));

    const prevEl = componentEl.querySelector(getSelector("prev"));
    const nextEl = componentEl.querySelector(getSelector("next"));

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
