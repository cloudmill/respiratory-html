import "./styles/app.scss";

import * as scrollPage from "./scripts/scrollPage";
import AOS from "aos";
import * as noTransition from "./scripts/noTransition";
import * as preloader from "./scripts/preloader";
// import * as drop from "./scripts/drop";
import * as top from "./scripts/newTop";

AOS.init();

addEventListener("DOMContentLoaded", () => {
  if (preloader.exist()) {
    scrollPage.lock();
  }
});

addEventListener("load", () => {
  noTransition.remove();

  if (preloader.exist()) {
    preloader.progress(() => {
      top.slider.initSwiper();

      top.slider.pauseSwiper();

      setTimeout(() => {
        // top.parallaxY();
        // top.zoomOut();

        scrollPage.toTop();
        scrollPage.unlock();

        setTimeout(() => {
          // top.revealMask();
          // top.revealFade();
        }, 1000);

        preloader.hide(() => {
          top.slider.playSwiper();
          // top.startZoomIn();
        });
      }, 500);
    });
  }
});

addEventListener("beforeunload", () => {
  scrollPage.toLeft();
});
