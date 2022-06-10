import Swiper, { Parallax, Autoplay } from "swiper";

class Slider {
  static DELAY = 5000;
  static SPEED = 1500;

  initSwiper() {
    this.swiperEl = document.querySelector("[data-top-swiper]");

    this.swiper = new Swiper(this.swiperEl, {
      modules: [Autoplay, Parallax],

      speed: Slider.SPEED,
      // allowTouchMove: false,

      autoplay: {
        delay: Slider.DELAY,

        disableOnInteraction: false,
      },

      parallax: true,
    });
  }

  pauseSwiper() {
    this.swiper.autoplay.stop();
  }

  playSwiper() {
    this.swiper.autoplay.start();
  }
}

export const slider = new Slider();
