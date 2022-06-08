import "./styles/app.scss";

import * as scrollPage from "./scripts/scrollPage";
import * as aos from "./scripts/aos";
import * as noTransition from "./scripts/noTransition";
import * as preloader from "./scripts/preloader";
import * as drop from "./scripts/drop";
import { Top } from "./scripts/newTop";

scrollPage.toLeftBeforeUnload();
aos.init();

window.addEventListener("DOMContentLoaded", () => {
  drop.start();

  if (preloader.exist()) {
    scrollPage.lock();
  }
});

window.addEventListener("load", () => {
  noTransition.remove();

  if (preloader.exist()) {
    scrollPage.toTopAsync();

    preloader.progress(() => {
      const top = new Top();

      setTimeout(() => {
        top.zoomOut();

        setTimeout(() => {
          top.reveal();
        }, 1000);

        preloader.hide(() => {
          top.start();

          scrollPage.unlock();
        });
      }, 500);
    });
  }
});
