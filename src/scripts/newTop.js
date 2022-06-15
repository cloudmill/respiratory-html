import Swiper, { Parallax as SwiperParallax, Autoplay } from "swiper";

class Slider {
  static SLIDE_DURATION = 5000;
  static SLIDE_CHANGE = 1500;

  init() {
    this.swiperEl = document.querySelector("[data-top-swiper]");

    this.swiper = new Swiper(this.swiperEl, {
      modules: [Autoplay, SwiperParallax],

      speed: Slider.SLIDE_CHANGE,
      // allowTouchMove: false,

      autoplay: {
        delay: Slider.SLIDE_DURATION,

        disableOnInteraction: false,
      },

      parallax: true,
    });
  }

  pause() {
    this.swiper.autoplay.stop();
  }

  play() {
    this.swiper.autoplay.start();
  }
}

export const slider = new Slider();

class Parallax {
  start() {}
}

export const parallax = new Parallax();

class Zoom {
  out() {}

  in() {}
}

export const zoom = new Zoom();

class Reveal {
  mask() {}

  fade() {}
}

export const reveal = new Reveal();
