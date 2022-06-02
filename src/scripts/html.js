const updateHtmlModifiers = () => {
  document.documentElement.classList.remove("html--preload");
  document.documentElement.classList.add("html--loaded");
};

export { updateHtmlModifiers };
