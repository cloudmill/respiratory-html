import "./styles/app.scss";

import * as scrollPage from "./scripts/scrollPage";
import * as aos from "./scripts/aos";
import * as noTransition from "./scripts/noTransition";
import * as preloader from "./scripts/preloader";
import * as drop from "./scripts/drop";
import * as top from "./scripts/newTop";

scrollPage.toLeftBeforeUnload();
aos.init();

window.addEventListener("DOMContentLoaded", () => {
  drop.init();
});

window.addEventListener("load", () => {
  noTransition.remove();

  if (preloader.exist()) {
    preloader.animate(() => {
      top.swiper.init();
      top.image.parallax();

      setTimeout(() => {
        top.image.zoomOut();

        setTimeout(() => {
          top.reveal.start();
        }, 1000);

        preloader.hide(() => {
          top.swiper.play();
          top.image.zoomIn();
        });
      }, 500);
    });
  }
});
