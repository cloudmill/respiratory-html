import debounce from "lodash.debounce";
import { getPx } from "./utils";

const mediaQuery = window.matchMedia(`(min-width: 1280px)`);

const DEBOUNCE = 100;

const start = () => {

  if (mediaQuery.matches) {

    const panel = document.querySelector(".card-panel");
    const asideAll = document.querySelectorAll<HTMLElement>(".aside");

    const getWindowHeight = () => document.documentElement.clientHeight;
    const getPanelHeight = () => panel?.getBoundingClientRect().height || 0;

    asideAll.forEach((aside) => {
      const getAsideTop = () => aside.getBoundingClientRect().top;

      const getAsideHeight = () => {
        const windowHeight = getWindowHeight();
        const asideTop = getAsideTop();
        const panelHeight = getPanelHeight();

        return windowHeight - (panelHeight + asideTop);
      };

      const updateAside = () => {
        aside.style.height = getPx(getAsideHeight());
      };
      const updateAsideDebounced = debounce(updateAside, DEBOUNCE);

      updateAsideDebounced();
      addEventListener("load", () => updateAsideDebounced());
      addEventListener("resize", () => updateAsideDebounced());
    });
    
  }

};

export { start };
