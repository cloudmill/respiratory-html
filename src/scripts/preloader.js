import anime from "animejs";
import cases from "@magic/cases";

const progressPreloader = (preloader, callback) => {
  const preloaderStyle = getComputedStyle(preloader);

  const progress = {
    duration: +preloaderStyle
      .getPropertyValue("--preloader-progress-duration")
      .trim(),
    easing: cases.camel(
      preloaderStyle.getPropertyValue("--preloader-progress-easing").trim()
    ),
    value: preloaderStyle.getPropertyValue("--preloader-progress-value").trim(),
  };

  const updatePreloaderProgress = () => {
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

const hidePreloader = (preloader, callback) => {
  const preloaderStyle = getComputedStyle(preloader);

  const hide = {
    duration: +preloaderStyle
      .getPropertyValue("--preloader-hide-duration")
      .trim(),
  };

  preloader.classList.add("preloader--hide");

  callback && setTimeout(callback, hide.duration);
};

export { progressPreloader, hidePreloader };
