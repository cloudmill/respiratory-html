const PROGRESS_DURATION = 1500;
const HIDE_DURATION = 2000;

const get = () => document.querySelector("[data-preloader]");
const exist = () => Boolean(get());
const style = () => getComputedStyle(get());

const progress = () =>
  new Promise((resolve) => {
    get().classList.add("preloader--progress");
    setTimeout(resolve, PROGRESS_DURATION);
  });

const hide = () =>
  new Promise((resolve) => {
    get().classList.add("preloader--hide");
    setTimeout(resolve, HIDE_DURATION);
  });

export { get, exist, style, progress, hide };
