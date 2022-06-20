import { store, changeSeries } from "./store";

export const start = () => {
  const productsAll = document.querySelectorAll(".js-products");

  productsAll.forEach((products) => {
    const tabAll = products.querySelectorAll(".js-products-tab");

    const removeActiveTab = () =>
      tabAll.forEach((tab) => tab.classList.remove("tab--active"));

    tabAll.forEach((tab, index) =>
      tab.addEventListener("click", () => store.dispatch(changeSeries(index)))
    );

    store.subscribe(() => {
      const { series, isChange } = store.getState().series;

      if (isChange) {
        removeActiveTab();
        
        tabAll[series].classList.add("tab--active");
      }
    });
  });
};
