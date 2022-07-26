$(() => {
  const modalsContainer = $("[data-header-modals]");

  window.addEventListener("click", (event) => {
    const target = $(event.target);
    if (target.closest("[data-header-button]").length) {
      const btn = target.closest("[data-header-button]");
      const id = btn.data("header-button");

      if (btn.hasClass("active")) {
        modalsContainer.removeClass("active");
        $(`[data-header-modal='${id}']`).slideUp();
        btn.removeClass("active");
      } else {
        $("[data-header-modal]").slideUp();
        $("[data-header-button].active").removeClass("active");

        btn.addClass("active");
        $(`[data-header-modal='${id}']`).slideDown();
        modalsContainer.addClass("active");
      }
    }

    if (
      target.closest("[data-header-overlay]").length ||
      target.closest("[data-header-close]").length
    ) {
      modalsContainer.removeClass("active");
      $("[data-header-modal]").slideUp();
      $("[data-header-button].active").removeClass("active");
    }
  });
});
