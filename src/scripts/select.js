let freeZIndex = 1;

const CLASSES = {
  OPEN: "select--open",
  VALUE: "select--value",
  ACTIVE_VALUE: "select__value--active",
};

class Select {
  constructor(select) {
    // init elements
    this.select = select;

    this.mask = select.querySelector("[data-select-mask]");
    this.panel = select.querySelector("[data-select-panel]");
    this.text = select.querySelector("[data-select-text]");
    this.text = select.querySelector("[data-select-text]");
    this.values = select.querySelectorAll("[data-select-value]");

    // init state
    this.state = {
      value: null,
      isOpen: false,
    };

    // bind handlers
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickPanel = this.handleClickPanel.bind(this);
    this.handleClickValue = this.handleClickValue.bind(this);

    // click outside mask
    window.addEventListener("click", (event) => {
      const targetMask = event.target.closest("[data-select-mask]");

      if (targetMask !== this.mask) {
        this.handleClickOutside();
      }
    });

    // click panel
    this.panel.addEventListener("click", this.handleClickPanel);

    // click value
    this.values.forEach((valueElement) =>
      valueElement.addEventListener("click", () =>
        this.handleClickValue(valueElement.dataset.selectValue)
      )
    );
  }

  handleClickOutside() {
    this.close();
  }

  handleClickPanel() {
    this.toggle();
  }

  handleClickValue(value) {
    this.change(value);
  }

  open() {
    this.select.style.zIndex = freeZIndex++;

    this.select.classList.add(CLASSES.OPEN);

    this.state = {
      ...this.state,

      isOpen: true,
    };
  }

  close() {
    this.select.classList.remove(CLASSES.OPEN);

    this.state = {
      ...this.state,

      isOpen: false,
    };
  }

  toggle() {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  change(value) {
    this.state = {
      ...this.state,

      value,
    };

    this.select.classList.add(CLASSES.VALUE);

    this.text.innerText = value;

    this.values.forEach((valueElement) => {
      if (valueElement.dataset.selectValue === value) {
        valueElement.classList.add(CLASSES.ACTIVE_VALUE);
      } else {
        valueElement.classList.remove(CLASSES.ACTIVE_VALUE);
      }
    });

    this.close();
  }
}

const start = () => {
  try {
    const selects = document.querySelectorAll("[data-select-component]");

    selects.forEach((select) => new Select(select));
  } catch (error) {
    console.warn(error);
  }
};

export { start };
