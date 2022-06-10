import "./styles/app.scss";

import * as scrollPage from "./scripts/scrollPage";
import AOS from "aos";
import * as noTransition from "./scripts/noTransition";
import * as preloader from "./scripts/preloader";
import * as drop from "./scripts/drop";
import { Top } from "./scripts/newTop";

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
      // const top = new Top();

      setTimeout(() => {
        // top.zoomOut();

        setTimeout(() => {
          // top.reveal();
        }, 1000);

        scrollPage.toTop();
        scrollPage.unlock();

        preloader.hide(() => {
          // top.start();
        });
      }, 500);
    });
  }
});

addEventListener("beforeunload", () => {
  scrollPage.toLeft();
});
