import throttle from "lodash.throttle";

const start = () => {
  const header = document.querySelector<HTMLElement>(".header");

  if (header?.classList.contains("header--transparent")) {
    const dropAll = header?.querySelectorAll<HTMLElement>(".drop");

    const handleScroll = () => {
      if (scrollY > 5) {
        header?.classList.remove("header--transparent");
        dropAll?.forEach((drop) => drop.classList.remove("drop--yellow"));
      } else {
        header?.classList.add("header--transparent");
        dropAll?.forEach((drop) => drop.classList.add("drop--yellow"));
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    addEventListener("scroll", throttledHandleScroll);
  }
};

export { start };
