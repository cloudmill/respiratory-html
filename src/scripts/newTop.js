import Swiper, { Parallax, Autoplay } from "swiper";

class Slider {
  static SLIDE_DURATION = 5000;
  static SLIDE_CHANGE = 1500;

  initSwiper() {
    this.swiperEl = document.querySelector("[data-top-swiper]");

    this.swiper = new Swiper(this.swiperEl, {
      modules: [Autoplay, Parallax],

      speed: Slider.SLIDE_CHANGE,
      // allowTouchMove: false,

      autoplay: {
        delay: Slider.SLIDE_DURATION,

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
