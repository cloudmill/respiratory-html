import anime from "animejs";
import cases from "@magic/cases";

const exist = () => Boolean(document.querySelector("[data-preloader]"));

const animate = () => {
  const preloader = document.querySelector("[data-preloader]");
  const preloaderStyle = getComputedStyle(preloader);

  const getCustomPropName = (propName) => `--preloader-progress-${propName}`;
  const getCustomPropValue = (propName) => style.getPropertyValue(getCustomPropName(propName));

  const customProps = {}
  ['value', 'duration', 'easing'].forEach(propName => customProps[propName] = getCustomPropValue(propName).trim());

  const state = {
    // строка а-ля "10%"
    value: customProps.value,
    // число а-ля 1500 (мс)
    duration: Number(customProps.duration),
    // строка а-ля "cubicBezier(.5, .05, .1, .3)"
    easing: cases.camel(customProps.easing),
  };

  const updatePreloader = () => {
    preloader.style.setProperty("--preloader-progress-value", progress.value);
  };

  anime({
    targets: progress,
    value: "100%",
    easing: progress.easing,
    duration: progress.duration,

    update: updatePreloaderProgress,

    complete: () => {
      updatePreloaderProgress();

      callback && callback();
    },
  });
};

const hide = (preloader, callback) => {
  const preloaderStyle = getComputedStyle(preloader);

  const hide = {
    duration: +preloaderStyle
      .getPropertyValue("--preloader-hide-duration")
      .trim(),
  };

  preloader.classList.add("preloader--hide");

  callback && setTimeout(callback, hide.duration);
};

export { exist, animate, hide };
