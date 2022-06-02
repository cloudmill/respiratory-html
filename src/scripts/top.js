import Swiper from "swiper/bundle";

const start = () => {
  console.log("top start");

  const tops = document.querySelectorAll("[data-top]");

  tops.forEach((top) => {
    const swiperEl = top.querySelector("[data-top-swiper]");

    const swiper = new Swiper(swiperEl, {
      parallax: true,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
    });

    // test
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          swiper.slidePrev();
          break;
        case "ArrowRight":
          swiper.slideNext();
          break;
      }
    });
  });
};

export { start };
