const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};

const scrollToLeft = () => {
  document.documentElement.scrollLeft = 0;
};

const scrollToTopLeft = () => {
  scrollTo(0, 0);
};

const scrollToLeftBeforeUnload = () => {
  window.addEventListener("beforeunload", () => {
    scrollToLeft();
  });
};

const lockScroll = () => {
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.body.style.overflow = "";
};

export {
  scrollToTop,
  scrollToLeft,
  scrollToTopLeft,
  scrollToLeftBeforeUnload,
  lockScroll,
  unlockScroll,
};
