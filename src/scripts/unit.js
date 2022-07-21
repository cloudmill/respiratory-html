const start = () => {
  const unitAll = document.querySelectorAll("[data-unit]");

  unitAll.forEach((unit) => {
    unit.addEventListener("click", (event) => {
      const { target } = event;

      if (target.hasAttribute("data-unit-inactive")) {
        event.preventDefault();
      }
    });
  });
};

export { start };
