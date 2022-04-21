import debounce from "lodash.debounce";

const DEBOUNCE_DURATION = 100;

const DEBUG = false;

const log = (...msgs) => DEBUG && console.log(...msgs);
const logError = (...msgs) => DEBUG && console.error(...msgs);

log("rails");

window.addEventListener("DOMContentLoaded", () => {
  try {
    const rails = document.querySelector("[data-rails]");
    const header = document.querySelector("[data-header]");

    log({
      rails,
      header,
    });

    const getHeaderHeight = () => header.getBoundingClientRect().height;

    log({
      hh: getHeaderHeight(),
    });

    const getPx = (number) => `${number}px`;

    const updateRailsTop = () => {
      const headerHeight = getHeaderHeight();

      rails.style.top = getPx(headerHeight);

      log("updateRailsTop", {
        hh: getHeaderHeight(),
      });
    };

    const updateRailsTopDebounce = debounce(updateRailsTop, DEBOUNCE_DURATION);

    updateRailsTopDebounce();

    window.addEventListener("load", updateRailsTopDebounce);
    window.addEventListener("resize", updateRailsTopDebounce);
  } catch (error) {
    logError(error);
  }
});
