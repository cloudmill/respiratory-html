import Swiper, { SwiperOptions } from "swiper";

const getSwiperOptions = (swiperId: string | undefined): SwiperOptions => {
  switch (swiperId) {
    case "0":
      return {
        loop: true,
        slidesPerView: "auto",
      };
    default:
      return {};
  }
};

const start = () => {
  const swiperEls = document.querySelectorAll<HTMLElement>(
    "[data-swiper-slider]"
  );

  swiperEls.forEach((swiperEl) => {
    const swiperId = swiperEl.dataset.swiperSlider;
    console.log(swiperId);

    const swiper = new Swiper(swiperEl, getSwiperOptions(swiperId));
  });
};

export { start };
