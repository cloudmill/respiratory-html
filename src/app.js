import "./styles/app.scss";

import * as scrollPage from "./scripts/scrollPage";
import * as aos from "./scripts/aos";
import * as noTransition from "./scripts/noTransition";
import * as preloader from "./scripts/preloader";
import * as drop from "./scripts/drop";
// import { updateHtmlModifiers } from "./scripts/html";
// import { progressPreloader, hidePreloader } from "./scripts/preloader";
// import { init as initTop } from "./scripts/top";

scrollPage.toLeftBeforeUnload();
aos.init();

window.addEventListener("DOMContentLoaded", () => {
  drop.init();
});

window.addEventListener("load", () => {
  noTransition.remove();

  if (preloader.exist()) {
    preloader.animate(() => {
      setTimeout(() => {
        preloader.hide(() => {
          console.log("qwe");
        });
      }, 500);
    });
  }
});
