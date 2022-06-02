import "./styles/app.scss";

import {
  scrollToTop,
  scrollToLeftBeforeUnload,
  lockScroll,
  unlockScroll,
} from "./scripts/scroll";
import { updateHtmlModifiers } from "./scripts/html";
import { initDrop } from "./scripts/drop";
import { progressPreloader, hidePreloader } from "./scripts/preloader";
import { initAos } from "./scripts/aos";

window.addEventListener("DOMContentLoaded", () => {
  handleDOMContentLoaded();
});

window.addEventListener("load", () => {
  handleLoad();
});

let preloader;

initAos();
scrollToLeftBeforeUnload();

function handleDOMContentLoaded() {
  preloader = document.querySelector("[data-preloader]");

  initDrop();

  if (preloader) {
    lockScroll();
  }
}

function handleLoad() {
  updateHtmlModifiers();

  if (preloader) {
    progressPreloader(preloader, () => {
      setTimeout(() => {
        scrollToTop();
        unlockScroll();

        hidePreloader(preloader);
      }, 500);
    });
  }
}
