import Swiper, { Parallax as SwiperParallax, Autoplay } from "swiper";
import * as ease from "./ease";

class Slider {
  static SLIDE_DURATION = 5000;
  static SLIDE_CHANGE = 1500;

  static KEYBOARD_CONTROL = true;

  init() {
    this.swiperEl = document.querySelector("[data-top-swiper]");

    this.swiper = new Swiper(this.swiperEl, {
      modules: [Autoplay, SwiperParallax],

      speed: Slider.SLIDE_CHANGE,
      allowTouchMove: false,

      autoplay: {
        delay: Slider.SLIDE_DURATION,

        disableOnInteraction: false,
      },

      parallax: true,
    });

    if (Slider.KEYBOARD_CONTROL) {
      addEventListener("keydown", ({ key }) => {
        switch (key) {
          case "ArrowLeft":
            this.swiper.slidePrev();
            break;
          case "ArrowRight":
            this.swiper.slideNext();
            break;
        }
      });
    }
  }

  pause() {
    this.swiper.autoplay.stop();
  }

  play() {
    this.swiper.autoplay.start();
  }
}

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

class Zoom {
  out() {
    const top = document.querySelector("[data-top]");
    top.classList.remove("top--zoom--out");
  }

  in() {
    const top = document.querySelector("[data-top]");
    top.classList.add("top--zoom--in");
  }
}

class Reveal {
  static MASK_ACTIVE_CLASS = "mask-text--active";
  static FADE_ACTIVE_CLASS = "fade--active";

  constructor(props) {
    this.slider = props.slider;

    this.remove = this.remove.bind(this);
  }

  start() {
    this.init();
    this.set(0);
    this.subscribe();
  }

  subscribe() {
    const swiper = this.slider.swiper;

    swiper.on("slideChangeTransitionStart", this.remove);
    swiper.on("slideChangeTransitionEnd", () => this.set(swiper.activeIndex));
  }

  init() {
    this.slides = document.querySelectorAll("[data-top-slide]");

    this.slidesElementsMask = [...this.slides].map((slide) =>
      slide.querySelectorAll("[data-top-mask]")
    );
    this.slidesElementsFade = [...this.slides].map((slide) =>
      slide.querySelectorAll("[data-top-fade]")
    );
  }

  set(index) {
    this.slidesElementsMask[index].forEach((element) =>
      element.classList.add(Reveal.MASK_ACTIVE_CLASS)
    );
    this.slidesElementsFade[index].forEach((element) =>
      element.classList.add(Reveal.FADE_ACTIVE_CLASS)
    );
  }

  remove() {
    this.slidesElementsMask.forEach((slideElementsMask) =>
      slideElementsMask.forEach((element) =>
        element.classList.remove(Reveal.MASK_ACTIVE_CLASS)
      )
    );
    this.slidesElementsFade.forEach((slideElementsFade) =>
      slideElementsFade.forEach((element) =>
        element.classList.remove(Reveal.FADE_ACTIVE_CLASS)
      )
    );
  }
}

export const slider = new Slider();
export const parallax = new Parallax();
export const reveal = new Reveal({ slider });
export const zoom = new Zoom();
