import anime from "animejs";
import cases from "@magic/cases";

const get = (() => {
  let preloader;

  return () => preloader || document.querySelector("[data-preloader]");
})();
const exist = () => Boolean(get());
const style = () => getComputedStyle(get());

const animate = (callback) => {
  const getCustomPropName = (propName) => `--preloader-progress-${propName}`;
  const getCustomPropValue = (propName) =>
    style().getPropertyValue(getCustomPropName(propName));

  const customProps = {};
  ["value", "duration", "easing"].forEach(
    (propName) => (customProps[propName] = getCustomPropValue(propName).trim())
  );

  const state = {
    // строка а-ля "10%"
    value: customProps.value,
    // число а-ля 1500 (мс)
    duration: Number(customProps.duration),
    // строка а-ля "cubicBezier(.5, .05, .1, .3)"
    easing: cases.camel(customProps.easing),
  };

  const updatePreloader = () => {
    get().style.setProperty("--preloader-progress-value", state.value);
  };

  anime({
    targets: state,

    value: "100%",

    duration: state.duration,
    easing: state.easing,

    update: updatePreloader,

    complete: () => {
      updatePreloader();

      callback && callback();
    },
  });
};

const hide = (callback) => {
  const duration = +style()
    .getPropertyValue("--preloader-hide-duration")
    .trim();

  get().classList.add("preloader--hide");

  callback && setTimeout(callback, duration);
};

export { exist, animate, hide };
