import anime from "animejs";

const HIDE_DURATION = 2000;

const get = () => document.querySelector("[data-preloader]");
const exist = () => Boolean(get());
const style = () => getComputedStyle(get());

const progress = () =>
  new Promise((resolve) => {
    const state = {
      value: "0%",
      duration: 1500,
      easing: "easeInOutQuint",
    };

    const update = () => {
      get().style.setProperty("--progress", state.value);
    };

    anime({
      targets: state,

      value: "100%",

      duration: state.duration,
      easing: state.easing,

      update,

      complete: () => {
        update();
        resolve();
      },
    });
  });

const hide = () =>
  new Promise((resolve) => {
    get().classList.add("preloader--hide");
    setTimeout(resolve, HIDE_DURATION);
  });

export { get, exist, style, progress, hide };
