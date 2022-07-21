const getPageElement = () => document.querySelector("[data-wrapper]");

export const toTop = () => getPageElement().scrollTo({ top: 0 });
export const toLeft = () => getPageElement().scrollTo({ left: 0 });
export const toStart = () => getPageElement().scrollTo({ top: 0, left: 0 });

export const lock = () => (getPageElement().style.overfloyY = "hidden");
export const unlock = () => (getPageElement().style.overflow = "");
