import Swiper, { Parallax as SwiperParallax, Autoplay } from "swiper";
import * as ease from "./ease";

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
  static RATIO = 0.25;
  static EASING = ease.outCubic;

  static getTranslate3d(y) {
    return `translate3d(0, ${y}px, 0)`;
  }

  static getParallaxY() {
    const y = scrollY;
    const height = innerHeight;

    const progress = y / height;
    const normalizedProgress = Math.min(progress, 1);
    const easeProgress = Parallax.EASING(normalizedProgress);

    const easeY = height * easeProgress;
    const parallaxY = easeY * Parallax.RATIO;

    return parallaxY;
  }

  constructor() {
    this.handleScroll = this.handleScroll.bind(this);
  }

  start() {
    this.elements = document.querySelectorAll("[data-top-parallax]");
    addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.update(Parallax.getParallaxY());
  }

  update(y) {
    this.elements.forEach(
      (element) => (element.style.transform = Parallax.getTranslate3d(y))
    );
  }
}

export const parallax = new Parallax();

class Zoom {
  out() {
    const top = document.querySelector("[data-top]");
    top.classList.remove("top--zoom--start");
  }

  in() {}
}

export const zoom = new Zoom();

class Reveal {
  mask() {}

  fade() {}
}

export const reveal = new Reveal();
