import * as scrollPage from "./scrollPage";

const ACTIVE_CLASS = "side-modal--active";

const start = () => {
  const sideModalAll = document.querySelectorAll("[data-side-modal]");

  sideModalAll.forEach((sideModal) => {
    // data
    const id = sideModal.dataset.sideModal;
    const overlay = sideModal.querySelector("[data-side-modal-overlay]");

    const triggerAll = document.querySelectorAll(
      `[data-side-modal-trigger=${id}]`
    );

    console.log({
      id,
      overlay,
      triggerAll,
    });

    // state
    const state = {
      isOpen: false,
    };

    // methods
    const open = () => {
      sideModal.classList.add(ACTIVE_CLASS);
      scrollPage.lock();

      state.isOpen = true;
    };
    const close = () => {
      sideModal.classList.remove(ACTIVE_CLASS);
      scrollPage.unlock();

      state.isOpen = false;
    };

    // events
    triggerAll.forEach((trigger) => trigger.addEventListener("click", open));
    overlay.addEventListener("click", close);
  });
};

export { start };
