export const toTop = () => scrollTo({ top: 0 });
export const toLeft = () => scrollTo({ left: 0 });
export const toStart = () => scrollTo({ top: 0, left: 0 });

export const lock = () => (document.body.style.overflow = "hidden");
export const unlock = () => (document.body.style.overflow = "");
