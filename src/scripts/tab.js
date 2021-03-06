const start = () => {
  const container = document.querySelector(".js-tab-container");

  if (container) {
    const buttons = document.querySelectorAll(".js-tab-button");
    const items = document.querySelectorAll(".js-tab-item");

    let active = 0;

    const removeActive = () => {
      buttons.forEach((button) => button.classList.remove("tab--active"));
      items.forEach((item) =>
        item.classList.remove("tab-container__item--active")
      );
    };
    const setActive = (index) => {
      buttons[index].classList.add("tab--active");
      items[index].classList.add("tab-container__item--active");
    };

    buttons.forEach((button, index) => {
      button.addEventListener("click", (e) => {
        if (index !== active) {
          removeActive();
          setActive(index);

          active = index;

          if (e.target.closest('.where-buy-tubs') && index == 1) {
            button.closest('.grid').classList.add('hide-second')
          } else {
            button.closest('.grid').classList.remove('hide-second')
          }

        }
      });
    });
  }
};

export { start };
