import "./styles/app.scss";

import * as scrollPage from "./scripts/scrollPage";
import * as aos from "./scripts/aos";
import * as noTransition from "./scripts/noTransition";
// import { updateHtmlModifiers } from "./scripts/html";
// import { initDrop } from "./scripts/drop";
// import { progressPreloader, hidePreloader } from "./scripts/preloader";
// import { init as initTop } from "./scripts/top";

scrollPage.toLeftBeforeUnload();
aos.init();

window.addEventListener("DOMContentLoaded", () => {});

window.addEventListener("load", () => {
  noTransition.remove();
});

let preloader;

scrollPage.toLeftBeforeUnload();
aos.init();

function handleDOMContentLoaded() {
  preloader = document.querySelector("[data-preloader]");

  initDrop();

  if (preloader) {
    scrollPage.lockScroll();
  }
}

function handleLoad() {
  updateHtmlModifiers();

  if (preloader) {
    progressPreloader(preloader, () => {
      setTimeout(() => {
        scrollPage.scrollToTop();
        scrollPage.unlockScroll();
        initTop();

        hidePreloader(preloader, () => {
          console.log("preloader hide complete");
        });
      }, 500);
    });
  }
}
