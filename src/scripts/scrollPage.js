export const getPageElement = () => document.querySelector("[data-app]");

export const toTop = () => getPageElement().scrollTo({ top: 0 });
export const toLeft = () => getPageElement().scrollTo({ left: 0 });
export const toStart = () => getPageElement().scrollTo({ top: 0, left: 0 });

export const lock = () => (getPageElement().style.overflowY = "hidden");
export const unlock = () => (getPageElement().style.overflowY = "");

export const getScrollY = () => {
  return getPageElement().scrollTop;
};

export const onScroll = (callback, options) =>
  getPageElement().addEventListener("scroll", callback, options);
