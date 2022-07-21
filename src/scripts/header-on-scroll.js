import * as scrollPage from "./scrollPage";

function headerOnScroll() {
  const mediaQuery = window.matchMedia("(min-width: 1280px)");

  const header = document.querySelector(".header");
  let scrollTop = scrollPage.getScrollY();

  if (header && mediaQuery.matches) {
    scrollPage.onScroll(scroll, { once: true });

    function scroll() {
      update();

      setTimeout(() => {
        update();

        scrollPage.onScroll(scroll, { once: true });
      }, 1000 / 120);
    }

    function update() {
      let newScrollTop = scrollPage.getScrollY();

      if (Math.abs(scrollTop - newScrollTop) >= 1) {
        if (newScrollTop > scrollTop) {
          header.classList.add("header--hide");
        } else {
          header.classList.remove("header--hide");
          header.classList.add("header--short");
        }
      }

      if (scrollTop < 1) {
        header.classList.remove("header--short");
        header.classList.remove("header--hide");
      }

      scrollTop = newScrollTop;
    }
  }
}

export { headerOnScroll };
