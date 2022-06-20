import { store, changeSeries } from "./store";

class Tabs {
  static ACTIVE_CLASS = "tab--active";

  private products: Element;
  private tabAll: NodeListOf<Element>;
  private tabButtonAll: NodeListOf<Element>;

  constructor(products) {
    this.products = products;

    this.updateUI = this.updateUI.bind(this);
  }

  start() {
    this.init();
    this.subscribeUI();
    this.subscribeStore();
    this.updateUI();
  }

  init() {
    this.tabAll = this.products.querySelectorAll(".js-products-tab");
    this.tabButtonAll = this.products.querySelectorAll(
      ".js-products-tab-button"
    );
  }

  removeActive() {
    this.tabAll.forEach((tab) => tab.classList.remove(Tabs.ACTIVE_CLASS));
  }

  setActive(index) {
    this.tabAll[index].classList.add(Tabs.ACTIVE_CLASS);
  }

  subscribeUI() {
    this.tabButtonAll.forEach((tabButton, index) =>
      tabButton.addEventListener("click", () =>
        store.dispatch(changeSeries(index))
      )
    );
  }

  subscribeStore() {
    store.subscribe(this.updateUI);
  }

  updateUI() {
    const { series, isChange } = store.getState().series;

    if (isChange) {
      this.removeActive();
      this.setActive(series);
    }
  }
}

class Contents {
  
}

export const start = () => {
  const productsAll = document.querySelectorAll(".js-products");

  productsAll.forEach((products) => {
    const tabs = new Tabs(products);

    tabs.start();
  });
};
