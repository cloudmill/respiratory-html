const toTop = () => (document.documentElement.scrollTop = 0);
const toLeft = () => (document.documentElement.scrollLeft = 0);
const toStart = () => scrollTo(0, 0);

const lock = () => (document.body.style.overflow = "hidden");
const unlock = () => (document.body.style.overflow = "");

const toLeftBeforeUnload = () =>
  window.addEventListener("beforeunload", toLeft);

export { toTop, toLeft, toStart, lock, unlock, toLeftBeforeUnload };
