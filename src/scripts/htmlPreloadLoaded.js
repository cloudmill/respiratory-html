const htmlPreloadLoaded = () => {
  const html = document.documentElement;

  html.classList.remove("html--preload");
  html.classList.add("html--loaded");
};

export { htmlPreloadLoaded };
