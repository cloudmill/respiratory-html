import anime from "animejs";

const HIDE_DURATION = 2000;

const get = () => document.querySelector("[data-preloader]");
const exist = () => Boolean(get());
const style = () => getComputedStyle(get());

const progress = (callback) => {
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
      
      callback && callback();
    },
  });
};

const hide = (callback) => {
  get().classList.add("preloader--hide");

  callback && setTimeout(callback, HIDE_DURATION);
};

export { get, exist, style, progress, hide };
