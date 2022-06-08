import Swiper, { Parallax, Autoplay } from "swiper";

class Top {
  constructor() {

  }
}

const swiper = {
  init: () => {
    const swiper = new Swiper(
      document.querySelector("[data-top-swiper]", {
        loop: true,
      })
    );
  },
  start: () => console.log("top swiper start"),
};

const image = {
  parallax: () => console.log("top image parallax"),

  zoom: {
    in: () => console.log("top image zoom in"),
    out: () => console.log("top image zoom out"),
  },
};

const reveal = {
  first: () => console.log("top reveal first"),
};

export { swiper, image, reveal, Top };
