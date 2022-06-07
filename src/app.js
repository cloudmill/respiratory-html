import "./styles/app.scss";

import * as scrollPage from "./scripts/scrollPage";
import * as aos from "./scripts/aos";
import * as noTransition from "./scripts/noTransition";
import * as preloader from "./scripts/preloader";
import * as drop from "./scripts/drop";

scrollPage.toLeftBeforeUnload();
aos.init();

window.addEventListener("DOMContentLoaded", () => {
  drop.init();
});

window.addEventListener("load", () => {
  // загрузились
  console.log(gsap, MorphSVGPlugin);

  // активировали переходы
  noTransition.remove();

  // если прелоадер существует
  if (preloader.exist()) {
    // начинаем цепочку, анимируем прогресс прелоадера
    preloader.animate(() => {
      // init swiper without autoplay
      // start parallax

      setTimeout(() => {
        preloader.hide(() => {
          console.log("qwe");
        });

        setTimeout(() => {});
      }, 500);
    });
  }
});
