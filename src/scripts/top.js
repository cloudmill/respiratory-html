import Swiper from "swiper/bundle";

const start = () => {
  console.log("top start");

  const tops = document.querySelectorAll("[data-top]");

  tops.forEach((top) => {
    const swiperEl = top.querySelector("[data-top-swiper]");

    const controls = top.querySelectorAll("[data-top-control]");

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

    swiper.on("slideChange", () => {
      const ACTIVE_CLASS = "top__control--active";
      controls.forEach((control) => control.classList.remove(ACTIVE_CLASS));
      controls[swiper.realIndex].classList.add(ACTIVE_CLASS);
    });

    const ACTIVE_CLASS = "top__control--active";
    controls.forEach((control) => control.classList.remove(ACTIVE_CLASS));
    controls[swiper.realIndex].classList.add(ACTIVE_CLASS);

    controls.forEach((control, index) =>
      control.addEventListener("click", (event) => {
        swiper.slideToLoop(index);

        const ACTIVE_CLASS = "top__control--active";
        controls.forEach((control) => control.classList.remove(ACTIVE_CLASS));
        event.currentTarget.classList.add(ACTIVE_CLASS);
      })
    );

    // test
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          {
            let newRealIndex = swiper.realIndex - 1;
            newRealIndex < 0 ? swiper.slides.length - 1 : newRealIndex;

            swiper.slideToLoop(newRealIndex);
          }
          break;
        case "ArrowRight":
          {
            let newRealIndex = swiper.realIndex + 1;
            newRealIndex >= swiper.slides.length ? 0 : newRealIndex;

            swiper.slideToLoop(newRealIndex);
          }
          break;
      }
    });
  });
};

export { start };
