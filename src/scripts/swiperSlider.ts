import Swiper, {
  SwiperOptions,
  Parallax,
  Navigation,
  Pagination,
} from "swiper";
import { GALLERY_DURATION, FSLIDER_DURATION } from "./constants";

const getSwiperOptions = (swiperEl: HTMLElement): SwiperOptions => {
  const swiperId = swiperEl.dataset.swiperSlider;

  switch (swiperId) {
    case "card":
      {
        const prevEl = swiperEl.querySelector<HTMLElement>(
          "[data-swiper-slider-prev]"
        );
        const nextEl = swiperEl.querySelector<HTMLElement>(
          "[data-swiper-slider-next]"
        );

        const paginationSrc: string[] = JSON.parse(
          swiperEl.dataset.swiperSliderPagination || "[]"
        );
        const paginationList = swiperEl.querySelector<HTMLElement>(
          "[data-swiper-slider-list]"
        );
        const paginationRender = (index, className) => `
        <div class="gallery__bullet ${className}">
          <img class="gallery__bullet-img" src="${paginationSrc[index]}" />
        </div>
      `;

        return {
          modules: [Parallax, Navigation, Pagination],
          parallax: true,
          navigation: {
            prevEl,
            nextEl,
          },
          speed: GALLERY_DURATION,
          pagination: {
            el: paginationList,
            clickable: true,
            renderBullet: paginationRender,
          },
        };
      }
      break;
    case "0":
      {
        const prevBtn = document.querySelector('[data-swiper-slider-prev="0"]');
        const nextBtn = document.querySelector('[data-swiper-slider-next="0"]');

        return {
          slidesPerView: "auto",
          modules: [Navigation],
          navigation: {
            prevEl: prevBtn,
            nextEl: nextBtn,
          },
        };
      }
      break;
    default:
      return {};
  }
};

const start = () => {
  const swiperEls = document.querySelectorAll<HTMLElement>(
    "[data-swiper-slider]"
  );

  swiperEls.forEach((swiperEl) => {
    const swiper = new Swiper(swiperEl, getSwiperOptions(swiperEl));
  });
};

export { start };
