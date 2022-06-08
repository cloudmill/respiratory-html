const start = () => {
  const components = document.querySelectorAll("[data-drop]");

  components.forEach((component) => {
    // data
    const btn = component.querySelector("[data-drop-btn]");

    // state
    const state = {
      isOpen: false,
    };

    const ACTION = {
      BTN_CLICK: "BTN_CLICK",
      CLICK_OUTSIDE: "CLICK_OUTSIDE",
    };

    const reducer = (action) => {
      switch (action) {
        case ACTION.BTN_CLICK:
          component.classList.toggle("drop--open");
          state.isOpen = !state.isOpen;
          break;
        case ACTION.CLICK_OUTSIDE:
          component.classList.remove("drop--open");
          state.isOpen = false;
          break;
      }
    };

    // methods
    const checkBtn = (target) => {
      const targetBtn = target.closest("[data-drop-btn]");

      return !!targetBtn && targetBtn === btn;
    };

    // events
    window.addEventListener("click", ({ target }) => {
      reducer(checkBtn(target) ? ACTION.BTN_CLICK : ACTION.CLICK_OUTSIDE);
    });
  });
};

export { start };
