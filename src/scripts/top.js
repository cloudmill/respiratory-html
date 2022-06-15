import Swiper, { Parallax, Autoplay } from "swiper";
import { easeOutCubic } from "./ease";
import throttle from "lodash/throttle";

const SPEED = 1500;
const DELAY = 2000;

const PARALLAX = 0.25;

const initParallaxY = (top) => {
  const findElements = throttle(() => {
    console.log("find elements");

    return top.querySelectorAll("[data-top-parallax-y]");
  }, 1000);

  const updateElements = (elements, y) => {
    elements.forEach(
      (element) => (element.style.transform = `translate3d(0, ${y}px, 0)`)
    );
  };

  let elements = findElements();

  window.addEventListener("scroll", () => {
    elements = findElements();

    const y = scrollY;
    const height = innerHeight;

    const progress = Math.min(y / height, 1);
    const easeProgress = easing(progress);

    const easeY = height * easeProgress;

    updateElements(elements, easeY * PARALLAX);
  });
};

const initSwiper = (top) => {
  const swiperEl = top.querySelector("[data-top-swiper]");

  const swiper = new Swiper(swiperEl, {
    modules: [Parallax, Autoplay],

    parallax: true,

    speed: SPEED,
    loop: true,
    allowTouchMove: false,

    autoplay: {
      delay: DELAY,
      disableOnInteraction: false,
    },
  });

  const stopAutoplay = () => {
    swiper.autoplay.stop();
  };
  const startAutoplay = () => {
    swiper.autoplay.start();
  };

  stopAutoplay();

  return { stopAutoplay, startAutoplay };
};

const init = () => {
  const tops = document.querySelectorAll("[data-top]");

  tops.forEach((top) => {
    const { startAutoplay } = initSwiper(top);

    setTimeout(startAutoplay, 2500);

    initParallaxY(top);
  });
};

export { init };
