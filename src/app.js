import "./styles/app.scss";

import AOS from "aos";
import * as scrollPage from "./scripts/scrollPage";
import * as noTransitionChild from "./scripts/noTransitionChild";
import * as preloader from "./scripts/preloader";
import * as top from "./scripts/newTop";
import { wait } from "./scripts/wait";
// import * as drop from "./scripts/drop";

AOS.init();

addEventListener("DOMContentLoaded", () => {
  if (preloader.exist()) {
    scrollPage.lock();
  }
});

addEventListener("load", async () => {
  noTransitionChild.remove();

  if (preloader.exist()) {
    await preloader.progress();

    top.slider.init();
    top.slider.pause();
    
    await wait(500);
    
    top.parallax.start();
    top.zoom.out();

    scrollPage.toTop();
    scrollPage.unlock();

    preloader.hide();

    await wait(1000);

    top.reveal.mask();
    top.reveal.fade();

    await wait(1000);

    top.slider.play();
    top.zoom.in();
  }
});

addEventListener("beforeunload", () => {
  scrollPage.toLeft();
});
